

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    category: string;
    tags: string[];
    content: string;
}

// 1. Load all markdown files from src/content/blog
const modules = import.meta.glob('@/content/blog/*.md', { query: '?raw', import: 'default', eager: true });

// 2. Parser function for Frontmatter (Simple Regex approach to avoid dependencies)
const parseFrontmatter = (fileContent: string) => {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);

    if (!match) return { metadata: {}, content: fileContent };

    const frontmatterBlock = match[1];
    const content = fileContent.replace(frontmatterRegex, '').trim();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const metadata: any = {};
    frontmatterBlock.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            let value = valueParts.join(':').trim();
            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            // Handle array tags (simple comma separation or JSON-like if needed)
            // For this specific format logic: tags: ["a", "b"]
            if (key.trim() === 'tags' && value.startsWith('[') && value.endsWith(']')) {
                const tagsClean = value.slice(1, -1).split(',').map(t => t.trim().slice(1, -1)); // Remove quotes
                metadata[key.trim()] = tagsClean;
            } else {
                metadata[key.trim()] = value;
            }
        }
    });

    return { metadata, content };
};

// 3. Transform into BlogPost array
export const blogPosts: BlogPost[] = Object.keys(modules).map((path) => {
    const rawContent = modules[path] as string;
    const { metadata, content } = parseFrontmatter(rawContent);

    // Extract ID from filename: .../filename.md -> filename
    const id = path.split('/').pop()?.replace('.md', '') || 'unknown';

    return {
        id,
        title: metadata.title || 'Untitled',
        excerpt: metadata.excerpt || '',
        date: metadata.date || new Date().toISOString(),
        readTime: metadata.readTime || '1 min',
        image: metadata.image || '',
        category: metadata.category || 'Uncategorized',
        tags: metadata.tags || [],
        content
    };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


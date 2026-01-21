import { useEffect, useState } from "react";
import { Home, FolderOpen, FileText, Book, Link2, User, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { icon: Home, label: "Accueil", description: "Bienvenue sur mon espace personnel !", path: "/" },
  { icon: User, label: "À propos", description: "En savoir plus sur moi", path: "/#apropos" },
  { icon: FolderOpen, label: "Projets", description: "Vitrine de mes réalisations", path: "/projets" },
  { icon: FileText, label: "Blog", description: "Pensées, modèles mentaux et tutoriels", path: "/blog" },
  { icon: Link2, label: "Liens", description: "Tous mes liens utiles", path: "/liens" },
  { icon: Book, label: "Contact", description: "Laissez-moi un message", path: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/wahel-gader-7463551ba" },
  { icon: Github, label: "GitHub", href: "https://github.com/wgader27" },
];

const CommandPalette = ({ isOpen, onClose }: CommandPaletteProps) => {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const filteredItems = navigationItems.filter(
    (item) =>
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    // Scroll to selected item
    const selectedElement = document.getElementById(`command-item-${selectedIndex}`);
    if (selectedElement) {
      selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const item = filteredItems[selectedIndex];
        if (item) {
          navigate(item.path);
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filteredItems, selectedIndex, navigate]);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-full max-w-xl animate-fade-up">
        <div className="glass-card overflow-hidden shadow-2xl">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-lg placeholder:text-muted-foreground focus:outline-none"
              autoFocus
            />
            <kbd className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground">ESC</kbd>
          </div>

          {/* Navigation */}
          <div className="p-2 max-h-[400px] overflow-y-auto">
            <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Navigation
            </div>
            {filteredItems.map((item, index) => (
              <button
                key={item.label}
                id={`command-item-${index}`}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-left",
                  selectedIndex === index ? "bg-white/10" : "hover:bg-white/5"
                )}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => {
                  navigate(item.path);
                  onClose();
                }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors block"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">↓</kbd>
                naviguer
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">↵</kbd>
                choisir
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">esc</kbd>
                fermer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

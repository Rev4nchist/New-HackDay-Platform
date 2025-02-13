"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "cmdk";
import { Search, FileText, Users, Calendar, Settings, X } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  type: "idea" | "user" | "event" | "setting";
  description?: string;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: SearchResult) => void;
}

export function SearchOverlay({ isOpen, onClose, onSelect }: SearchOverlayProps) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);

  // Mock search results
  React.useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    // Simulate API call
    const mockResults: SearchResult[] = [
      {
        id: "1",
        title: "AI-Powered Code Review",
        type: "idea" as const,
        description: "An intelligent system for code review automation",
      },
      {
        id: "2",
        title: "John Doe",
        type: "user" as const,
        description: "Software Engineer",
      },
      {
        id: "3",
        title: "HackDay 2025 Kickoff",
        type: "event" as const,
        description: "March 15, 2025",
      },
      {
        id: "4",
        title: "Notification Settings",
        type: "setting" as const,
        description: "Configure notification preferences",
      },
    ].filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase())
    );

    setResults(mockResults);
  }, [query]);

  // Handle keyboard shortcuts
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          document.querySelector<HTMLInputElement>("[cmdk-input]")?.focus();
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, onClose]);

  const getIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "idea":
        return <FileText className="w-4 h-4" />;
      case "user":
        return <Users className="w-4 h-4" />;
      case "event":
        return <Calendar className="w-4 h-4" />;
      case "setting":
        return <Settings className="w-4 h-4" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-10 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:max-w-2xl z-50"
          >
            <Command
              className="w-full rounded-xl border shadow-2xl bg-card overflow-hidden"
              loop
            >
              <div className="flex items-center border-b px-3">
                <Search className="w-5 h-5 text-muted-foreground" />
                <Command.Input
                  value={query}
                  onValueChange={setQuery}
                  placeholder="Search ideas, users, events..."
                  className="flex-1 h-12 px-3 bg-transparent outline-none placeholder:text-muted-foreground"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded border px-2 py-1 text-xs text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
                <button
                  onClick={onClose}
                  className="ml-2 p-1 rounded-lg hover:bg-accent"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <Command.List className="max-h-[60vh] overflow-y-auto p-2">
                {query && results.length === 0 && (
                  <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                    No results found.
                  </Command.Empty>
                )}

                {results.length > 0 && (
                  <Command.Group>
                    {results.map((result) => (
                      <Command.Item
                        key={result.id}
                        value={result.title}
                        onSelect={() => {
                          onSelect(result);
                          onClose();
                        }}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted">
                          {getIcon(result.type)}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <p className="font-medium truncate">{result.title}</p>
                          {result.description && (
                            <p className="text-sm text-muted-foreground truncate">
                              {result.description}
                            </p>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground capitalize">
                          {result.type}
                        </span>
                      </Command.Item>
                    ))}
                  </Command.Group>
                )}

                {!query && (
                  <div className="py-6 text-center text-sm text-muted-foreground">
                    <p>Start typing to search...</p>
                    <p className="mt-1">
                      Search for ideas, users, events, and settings
                    </p>
                  </div>
                )}
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 
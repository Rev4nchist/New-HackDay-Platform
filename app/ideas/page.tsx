"use client";

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Temporary type for our idea structure
interface Idea {
  id: string;
  title: string;
  description: string;
  category: string;
  submissionDate: string;
  watchCount: number;
  reactions: {
    hot: number;
    interesting: number;
    tellMeMore: number;
  };
}

// Categories for filtering
const categories = [
  "All",
  "Sparks of AI",
  "Ignition Projects",
  "Phoenix Initiative",
  "Other"
];

// Sorting options
const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Most Watched", value: "watched" },
  { label: "Most Reactions", value: "reactions" }
];

// Temporary mock data with more examples
const mockIdeas: Idea[] = [
  {
    id: "1",
    title: "AI-Powered Code Review Assistant",
    description: "An intelligent system that helps developers review code more efficiently by highlighting potential issues and suggesting improvements.",
    category: "Sparks of AI",
    submissionDate: "2024-02-13",
    watchCount: 42,
    reactions: {
      hot: 15,
      interesting: 23,
      tellMeMore: 8
    }
  },
  {
    id: "2",
    title: "Sustainable Energy Dashboard",
    description: "A real-time monitoring system for tracking and optimizing energy consumption across company facilities.",
    category: "Phoenix Initiative",
    submissionDate: "2024-02-12",
    watchCount: 35,
    reactions: {
      hot: 12,
      interesting: 18,
      tellMeMore: 5
    }
  },
  // Add more mock ideas here
];

export default function IdeasPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("newest");
  const [date, setDate] = useState<Date>();
  const [ideas] = useState<Idea[]>(mockIdeas);

  // Filter and sort ideas
  const filteredIdeas = ideas
    .filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
      const matchesDate = !date || idea.submissionDate === format(date, "yyyy-MM-dd");
      return matchesSearch && matchesCategory && matchesDate;
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case "oldest":
          return new Date(a.submissionDate).getTime() - new Date(b.submissionDate).getTime();
        case "watched":
          return b.watchCount - a.watchCount;
        case "reactions":
          return (b.reactions.hot + b.reactions.interesting + b.reactions.tellMeMore) -
                 (a.reactions.hot + a.reactions.interesting + a.reactions.tellMeMore);
        default: // newest
          return new Date(b.submissionDate).getTime() - new Date(a.submissionDate).getTime();
      }
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">HackDay 2025 Ideas</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="text"
            placeholder="Search ideas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[180px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {date && (
            <Button 
              variant="ghost" 
              onClick={() => setDate(undefined)}
              className="h-10"
            >
              Clear date
            </Button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 text-muted-foreground">
        Found {filteredIdeas.length} ideas
      </div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((idea) => (
          <Card key={idea.id} className="p-6 hover:shadow-lg transition-shadow bg-card">
            <h2 className="text-xl font-semibold mb-2">{idea.title}</h2>
            <p className="text-muted-foreground mb-4 line-clamp-3">{idea.description}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <Badge variant="secondary">{idea.category}</Badge>
              <span>{idea.watchCount} watching</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex -space-x-2">
                {/* Reaction preview */}
                {idea.reactions.hot > 0 && (
                  <Badge variant="outline" className="px-2">
                    🔥 {idea.reactions.hot}
                  </Badge>
                )}
                {idea.reactions.interesting > 0 && (
                  <Badge variant="outline" className="px-2">
                    💡 {idea.reactions.interesting}
                  </Badge>
                )}
              </div>
              <Link href={`/ideas/${idea.id}`}>
                <Button size="sm">
                  View Details
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {filteredIdeas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No ideas found matching your criteria</p>
        </div>
      )}
    </div>
  );
} 
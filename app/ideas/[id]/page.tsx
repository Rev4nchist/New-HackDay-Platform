"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, Send, ThumbsUp, Heart, Laugh, Reply, X, MoreHorizontal, Pencil, Trash2, Home, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { QuickActions } from "@/components/ui/quick-actions";
import { SearchOverlay } from "@/components/ui/search-overlay";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface SearchResult {
  id: string;
  title: string;
  type: "idea" | "user" | "event" | "setting";
  description?: string;
}

// Temporary mock data for a single idea
const mockIdea = {
  id: "1",
  title: "AI-Powered Code Review Assistant",
  description: "An intelligent system that helps developers review code more efficiently by highlighting potential issues and suggesting improvements. The system will use machine learning to understand common patterns and best practices, providing contextual suggestions for code improvement.",
  category: "Sparks of AI",
  submissionDate: "2024-02-13",
  watchCount: 42,
  reactions: {
    hot: 15,
    interesting: 23,
    tellMeMore: 8
  },
  teamSize: "3-5 members",
  requiredSkills: ["Machine Learning", "Python", "Software Architecture", "DevOps"],
  impactAreas: ["Developer Productivity", "Code Quality", "Team Collaboration"],
  contactInfo: "john.doe@company.com",
  team: {
    maxSize: 5,
    currentSize: 2,
    openRoles: ["Machine Learning Engineer", "DevOps Engineer", "Frontend Developer"],
    members: [
      {
        id: "1",
        userId: "john.doe",
        role: "Team Lead",
        joinedAt: new Date(2024, 1, 1)
      },
      {
        id: "2",
        userId: "jane.smith",
        role: "Backend Developer",
        joinedAt: new Date(2024, 1, 15)
      }
    ] as TeamMember[],
    applications: [] as TeamApplication[]
  }
};

// Mock related ideas
const relatedIdeas = [
  {
    id: "2",
    title: "ML-Based Bug Prediction",
    category: "Sparks of AI",
    description: "Predict potential bugs in code before they occur using machine learning algorithms."
  },
  {
    id: "3",
    title: "Automated Code Documentation",
    category: "Developer Tools",
    description: "Generate comprehensive documentation from code using AI analysis."
  }
];

interface MessageReaction {
  type: 'like' | 'heart' | 'laugh';
  count: number;
  users: string[];
}

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: Date;
  type: 'team' | 'general' | 'help';
  parentId?: string;
  edited?: boolean;
  reactions: {
    like: MessageReaction;
    heart: MessageReaction;
    laugh: MessageReaction;
  };
}

// Updated mock messages with reactions and replies
const mockMessages: Message[] = [
  {
    id: "1",
    user: "John Doe",
    content: "I have experience with ML models and would love to contribute to this project. I&apos;ve worked on similar code review systems before.",
    timestamp: new Date(Date.now() - 3600000),
    type: 'team',
    reactions: {
      like: { type: 'like', count: 3, users: ['Jane Smith', 'Mike Johnson', 'Sarah Lee'] },
      heart: { type: 'heart', count: 1, users: ['Mike Johnson'] },
      laugh: { type: 'laugh', count: 0, users: [] }
    }
  },
  {
    id: "2",
    parentId: "1",
    user: "Jane Smith",
    content: "That&apos;s great! What kind of ML models have you worked with specifically?",
    timestamp: new Date(Date.now() - 3300000),
    type: 'team',
    reactions: {
      like: { type: 'like', count: 1, users: ['John Doe'] },
      heart: { type: 'heart', count: 0, users: [] },
      laugh: { type: 'laugh', count: 0, users: [] }
    }
  },
  {
    id: "3",
    user: "Mike Johnson",
    content: "I&apos;m a DevOps engineer and would be interested in helping with the infrastructure setup for this project.",
    timestamp: new Date(Date.now() - 900000),
    type: 'team',
    reactions: {
      like: { type: 'like', count: 0, users: [] },
      heart: { type: 'heart', count: 0, users: [] },
      laugh: { type: 'laugh', count: 0, users: [] }
    }
  },
  {
    id: "4",
    user: "Sarah Lee",
    content: "How do you plan to handle different programming languages in the review process?",
    timestamp: new Date(Date.now() - 600000),
    type: 'general',
    reactions: {
      like: { type: 'like', count: 0, users: [] },
      heart: { type: 'heart', count: 0, users: [] },
      laugh: { type: 'laugh', count: 0, users: [] }
    }
  }
];

// Add new interfaces for team management
interface TeamApplication {
  id: string;
  userId: string;
  role: string;
  experience: string;
  technicalSkills: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
  submittedAt: Date;
}

interface TeamMember {
  id: string;
  userId: string;
  role: string;
  joinedAt: Date;
}

// Add to the mock data section:
const mockApplications: TeamApplication[] = [
  {
    id: "1",
    userId: "mike.wilson",
    role: "Machine Learning Engineer",
    experience: "3 years of ML experience, worked on similar projects",
    technicalSkills: "Python, TensorFlow, PyTorch, Docker",
    message: "I&apos;m excited about this project and would love to contribute!",
    status: 'pending',
    submittedAt: new Date(2024, 1, 20)
  },
  {
    id: "2",
    userId: "sarah.chen",
    role: "Frontend Developer",
    experience: "Full-stack developer with React expertise",
    technicalSkills: "React, TypeScript, Next.js, Tailwind",
    message: "This project aligns perfectly with my interests",
    status: 'pending',
    submittedAt: new Date(2024, 1, 21)
  }
];

export default function IdeaDetailPage({ params: _params }: { params: { id: string } }) {
  const router = useRouter();
  const [isWatching, setIsWatching] = useState(false);
  const [reactions, setReactions] = useState(mockIdea.reactions);
  const [recentReaction, setRecentReaction] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [replyingTo, setReplyingTo] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState("");
  const [editingMessage, setEditingMessage] = useState<string | undefined>(undefined);
  const [editContent, setEditContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [applicationStatus, setApplicationStatus] = useState<TeamApplication["status"] | null>(null);
  const [applications, setApplications] = useState<TeamApplication[]>(mockApplications);
  const [isCurrentUserTeamLead] = useState(true); // In real app, this would be determined by auth
  
  // In a real implementation, we would fetch the idea data based on params.id
  const idea = { ...mockIdea, reactions };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mock notifications
  const notifications = [
    {
      id: "1",
      title: "New team member request",
      message: "John Doe wants to join your project team",
      time: "5m ago",
      read: false,
    },
    {
      id: "2",
      title: "Project update",
      message: "The project requirements have been updated",
      time: "1h ago",
      read: true,
    },
  ];

  const handleReaction = (messageId: string, reactionType: 'like' | 'heart' | 'laugh') => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        const currentReaction = msg.reactions[reactionType];
        const userReacted = currentReaction.users.includes('Current User');
        
        return {
          ...msg,
          reactions: {
            ...msg.reactions,
            [reactionType]: {
              ...currentReaction,
              count: userReacted ? currentReaction.count - 1 : currentReaction.count + 1,
              users: userReacted 
                ? currentReaction.users.filter(u => u !== 'Current User')
                : [...currentReaction.users, 'Current User']
            }
          }
        };
      }
      return msg;
    }));
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      user: "Current User",
      content: message,
      timestamp: new Date(),
      type: replyingTo ? (messages.find(m => m.id === replyingTo)?.type || 'general') : 'general',
      parentId: replyingTo,
      reactions: {
        like: { type: 'like', count: 0, users: [] },
        heart: { type: 'heart', count: 0, users: [] },
        laugh: { type: 'laugh', count: 0, users: [] }
      }
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    setReplyingTo(undefined);
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = `Check out this HackDay 2025 idea: ${idea.title}`;
    
    switch (platform) {
      case 'clipboard':
        await navigator.clipboard.writeText(url);
        // You might want to show a toast notification here
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
    }
  };

  const handleIdeaReaction = (type: 'hot' | 'interesting' | 'tellMeMore') => {
    setReactions(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
    setRecentReaction(type);
    
    // Auto-populate message based on reaction type
    const messages = {
      hot: "🔥 This idea is on fire! I especially love how it could revolutionize [specific aspect]. The potential impact on [area] is mind-blowing!",
      interesting: "💡 Fascinating approach! Have you considered integrating this with [related technology]? I can see some amazing possibilities there.",
      tellMeMore: "🤔 I&apos;m really intrigued by this concept! Could you elaborate more on how you plan to handle [specific challenge]? I&apos;d love to dive deeper into the technical details."
    };
    
    setMessage(messages[type]);
    textareaRef.current?.focus();
    
    // Reset the animation after 1 second
    setTimeout(() => setRecentReaction(null), 1000);
  };

  const handleEditMessage = (messageId: string) => {
    const message = messages.find(m => m.id === messageId);
    if (message) {
      setEditingMessage(messageId);
      setEditContent(message.content);
    }
  };

  const handleSaveEdit = (messageId: string) => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        return {
          ...msg,
          content: editContent,
          edited: true
        };
      }
      return msg;
    }));
    setEditingMessage(undefined);
    setEditContent("");
  };

  const handleSearchSelect = (result: SearchResult) => {
    if (result.type === "idea") {
      router.push(`/ideas/${result.id}`);
    }
    // Handle other result types...
  };

  // Helper function to render a message and its replies
  const renderMessage = (msg: Message, isReply = false) => (
    <div key={msg.id} className={`flex gap-3 ${isReply ? 'ml-12 mt-3' : 'mt-4'}`}>
      <Avatar className="h-10 w-10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-primary-foreground font-semibold">
          {msg.user[0]}
        </div>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold">{msg.user}</span>
            <span className="text-xs text-muted-foreground">
              {msg.timestamp.toLocaleTimeString()}
              {msg.edited && <span className="ml-1">(edited)</span>}
            </span>
          </div>
          {msg.user === "Current User" && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 button-hover">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-effect">
                <DropdownMenuItem onClick={() => handleEditMessage(msg.id)}>
                  <Pencil className="w-4 h-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        
        {editingMessage === msg.id ? (
          <div className="mt-2">
            <Textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="min-h-[100px] mb-2 input-focus"
              autoFocus
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditingMessage(undefined)}
                className="button-hover"
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={() => handleSaveEdit(msg.id)}
                disabled={!editContent.trim() || editContent === msg.content}
                className="button-hover"
              >
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <p className="text-sm mt-1 leading-relaxed">{msg.content}</p>
            <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-border"></div>
          </div>
        )}
        
        {/* Message Actions */}
        {editingMessage !== msg.id && (
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 px-2 button-hover ${
                  msg.reactions.like.users.includes('Current User') ? 'bg-primary/10' : ''
                }`}
                onClick={() => handleReaction(msg.id, 'like')}
              >
                <ThumbsUp className={`w-4 h-4 mr-1 ${
                  msg.reactions.like.users.includes('Current User') ? 'fill-current' : ''
                }`} />
                {msg.reactions.like.count > 0 && msg.reactions.like.count}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 px-2 button-hover ${
                  msg.reactions.heart.users.includes('Current User') ? 'bg-primary/10' : ''
                }`}
                onClick={() => handleReaction(msg.id, 'heart')}
              >
                <Heart className={`w-4 h-4 mr-1 ${
                  msg.reactions.heart.users.includes('Current User') ? 'fill-current' : ''
                }`} />
                {msg.reactions.heart.count > 0 && msg.reactions.heart.count}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 px-2 button-hover ${
                  msg.reactions.laugh.users.includes('Current User') ? 'bg-primary/10' : ''
                }`}
                onClick={() => handleReaction(msg.id, 'laugh')}
              >
                <Laugh className={`w-4 h-4 mr-1 ${
                  msg.reactions.laugh.users.includes('Current User') ? 'fill-current' : ''
                }`} />
                {msg.reactions.laugh.count > 0 && msg.reactions.laugh.count}
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 button-hover"
              onClick={() => setReplyingTo(msg.id)}
            >
              <Reply className="w-4 h-4 mr-1" />
              Reply
            </Button>
          </div>
        )}

        {/* Render Replies */}
        {messages
          .filter(reply => reply.parentId === msg.id)
          .map(reply => renderMessage(reply, true))}
      </div>
    </div>
  );

  // Add helper function for managing applications:
  const handleApplicationUpdate = (applicationId: string, newStatus: TeamApplication['status']) => {
    setApplications(prev => prev.map(app => 
      app.id === applicationId ? { ...app, status: newStatus } : app
    ));
    // In real app, this would make an API call
  };

  // Add textareaRef near the top of the component with other refs
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Skeleton loading for title */}
            <div className="space-y-4">
              <div className="skeleton w-2/3 h-10"></div>
              <div className="skeleton w-1/3 h-6"></div>
            </div>

            {/* Skeleton for description card */}
            <div className="skeleton-gradient p-6 rounded-lg space-y-4">
              <div className="skeleton w-1/4 h-8"></div>
              <div className="skeleton w-full h-24"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="skeleton h-16"></div>
                <div className="skeleton h-16"></div>
              </div>
            </div>

            {/* Skeleton for skills and impact areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="skeleton-gradient p-6 rounded-lg">
                <div className="skeleton w-1/3 h-8 mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="skeleton w-24 h-8"></div>
                  ))}
                </div>
              </div>
              <div className="skeleton-gradient p-6 rounded-lg">
                <div className="skeleton w-1/3 h-8 mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="skeleton w-24 h-8"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6" />
              <span className="font-bold">HackDay Platform</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/ideas">Browse Ideas</Link>
              </Button>
              <Button variant="ghost" size="sm">Submit Idea</Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/ideas" className="hover:text-foreground">Ideas</Link>
            <span>/</span>
            <span className="text-foreground">{idea.title}</span>
          </nav>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h1 className="text-4xl font-bold tracking-tight">{idea.title}</h1>
              <div className="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="default"
                        onClick={() => setIsApplicationModalOpen(true)}
                        className="button-hover"
                        disabled={applicationStatus === 'pending'}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        {applicationStatus === 'pending' ? 'Application Pending' : 'Join Team'}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {applicationStatus === 'pending' 
                        ? 'Your application is under review' 
                        : 'Apply to join this project team'}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="icon" className="button-hover">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="glass-effect">
                          <DropdownMenuItem onClick={() => handleShare('clipboard')}>
                            Copy Link
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleShare('twitter')}>
                            Share on Twitter
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleShare('linkedin')}>
                            Share on LinkedIn
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TooltipTrigger>
                    <TooltipContent>Share this idea</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <Button 
                  variant={isWatching ? "secondary" : "default"}
                  onClick={() => setIsWatching(!isWatching)}
                  className="w-[100px] button-hover"
                >
                  {isWatching ? "Watching" : "Watch"}
                  <span className="ml-1">({idea.watchCount})</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span>Submitted on {idea.submissionDate}</span>
              <span>•</span>
              <Badge variant="secondary" className="glass-effect">{idea.category}</Badge>
            </div>
          </div>

          <Card className="p-6 mb-8 card-hover">
            <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{idea.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Team Size</h3>
                <p className="text-muted-foreground">{idea.teamSize}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground">{idea.contactInfo}</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 card-hover">
              <h2 className="text-2xl font-semibold mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {idea.requiredSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="glass-effect px-3 py-1">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 card-hover">
              <h2 className="text-2xl font-semibold mb-4">Impact Areas</h2>
              <div className="flex flex-wrap gap-2">
                {idea.impactAreas.map((area) => (
                  <Badge key={area} variant="outline" className="glass-effect px-3 py-1">{area}</Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Related Ideas Section */}
          <Card className="p-6 mb-8 card-hover">
            <h2 className="text-2xl font-semibold mb-4">Related Ideas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedIdeas.map((relatedIdea) => (
                <Link href={`/ideas/${relatedIdea.id}`} key={relatedIdea.id}>
                  <Card className="p-4 glass-effect card-hover">
                    <h3 className="font-semibold mb-2">{relatedIdea.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {relatedIdea.description}
                    </p>
                    <Badge variant="secondary" className="text-xs glass-effect">
                      {relatedIdea.category}
                    </Badge>
                  </Card>
                </Link>
              ))}
            </div>
          </Card>

          {/* Team Overview Section */}
          <Card className="p-6 mb-8 card-hover">
            <h2 className="text-2xl font-semibold mb-4">Team Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Current Team ({idea.team.currentSize}/{idea.team.maxSize})</h3>
                <div className="space-y-3">
                  {idea.team.members.map((member) => (
                    <div key={member.id} className="flex items-center gap-3">
                      <Avatar>
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          {member.userId[0].toUpperCase()}
                        </div>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.userId}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Open Roles</h3>
                <div className="flex flex-wrap gap-2">
                  {idea.team.openRoles.map((role) => (
                    <Badge key={role} variant="outline" className="glass-effect">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Discussion Section */}
          <Card className="p-6 mb-8 card-hover">
            <h2 className="text-2xl font-semibold mb-4">Project Discussion</h2>
            <Tabs defaultValue="team" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-4">
                <TabsTrigger value="team" className="text-base py-3">
                  🤝 Join the Team
                </TabsTrigger>
                <TabsTrigger value="management" className="text-base py-3">
                  ⚙️ Team Management
                </TabsTrigger>
                <TabsTrigger value="help" className="text-base py-3">
                  🆘 Help Wanted
                </TabsTrigger>
                <TabsTrigger value="general" className="text-base py-3">
                  💭 General Discussion
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="team">
                <div className="bg-muted/30 p-4 rounded-lg mb-4 glass-effect">
                  <h3 className="font-semibold mb-2">Looking to Join the Team?</h3>
                  <p className="text-muted-foreground">
                    Share your relevant experience and how you&apos;d like to contribute to the project. 
                    The team is especially looking for skills in: {idea.requiredSkills.join(', ')}.
                  </p>
                </div>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  {messages
                    .filter(msg => msg.type === 'team' && !msg.parentId)
                    .map(msg => renderMessage(msg))}
                </div>
              </TabsContent>
              
              <TabsContent value="management">
                {isCurrentUserTeamLead ? (
                  <div className="space-y-6">
                    <div className="bg-muted/30 p-4 rounded-lg glass-effect">
                      <h3 className="font-semibold mb-2">Team Applications</h3>
                      <p className="text-muted-foreground">
                        Review and manage applications from potential team members.
                      </p>
                    </div>

                    {applications.length > 0 ? (
                      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                        {applications.map((app) => (
                          <Card key={app.id} className="p-4 glass-effect">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Avatar>
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                                      {app.userId[0].toUpperCase()}
                                    </div>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{app.userId}</p>
                                    <p className="text-sm text-muted-foreground">{app.role}</p>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <div>
                                    <p className="text-sm font-medium">Technical Skills</p>
                                    <p className="text-sm text-muted-foreground">{app.technicalSkills}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Experience</p>
                                    <p className="text-sm text-muted-foreground">{app.experience}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Message</p>
                                    <p className="text-sm text-muted-foreground">{app.message}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <Badge variant={
                                  app.status === 'accepted' ? 'default' :
                                  app.status === 'rejected' ? 'destructive' :
                                  'secondary'
                                }>
                                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                                </Badge>
                                {app.status === 'pending' && (
                                  <>
                                    <Button
                                      size="sm"
                                      className="w-full button-hover"
                                      onClick={() => handleApplicationUpdate(app.id, 'accepted')}
                                    >
                                      Accept
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      className="w-full button-hover"
                                      onClick={() => handleApplicationUpdate(app.id, 'rejected')}
                                    >
                                      Reject
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No pending applications
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    Only team leads can access the management dashboard
                  </div>
                )}
              </TabsContent>

              <TabsContent value="help">
                <div className="bg-muted/30 p-4 rounded-lg mb-4 glass-effect">
                  <h3 className="font-semibold mb-2">Technical Help & Resources</h3>
                  <p className="text-muted-foreground">
                    Post specific technical questions, request resources, or ask for guidance on project challenges.
                  </p>
                </div>
                {isCurrentUserTeamLead && (
                  <Card className="p-4 mb-4 glass-effect">
                    <h4 className="font-medium mb-2">Quick Actions</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <Button 
                        variant="outline" 
                        className="button-hover"
                        onClick={() => {
                          setMessage("🔍 Code Review Request:\nI need a review of [describe component/feature]. Key areas to focus on:\n- [specific aspect]\n- [specific aspect]\n\nGitHub link: [paste link]");
                          textareaRef.current?.focus();
                        }}
                      >
                        Request Code Review
                      </Button>
                      <Button 
                        variant="outline" 
                        className="button-hover"
                        onClick={() => {
                          setMessage("🤔 Technical Guidance Needed:\nI'm working on [feature/component] and need guidance on:\n- Current challenge: [describe issue]\n- What I've tried: [your attempts]\n- Specific questions: [your questions]");
                          textareaRef.current?.focus();
                        }}
                      >
                        Ask for Technical Guidance
                      </Button>
                      <Button 
                        variant="outline" 
                        className="button-hover"
                        onClick={() => {
                          setMessage("📚 Resource Share:\nI'd like to share some helpful resources for our project:\n\nResource: [name/link]\nHow it helps: [brief explanation]\nKey takeaways: [main points]");
                          textareaRef.current?.focus();
                        }}
                      >
                        Share Resources
                      </Button>
                      <Button 
                        variant="outline" 
                        className="button-hover"
                        onClick={() => {
                          setMessage("🤝 Team Support Request:\nLooking to schedule a support session for:\n\nTopic: [describe what needs to be discussed]\nPreferred time: [your availability]\nExpected duration: [estimated time]");
                          textareaRef.current?.focus();
                        }}
                      >
                        Schedule Team Support
                      </Button>
                    </div>
                  </Card>
                )}
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  {messages
                    .filter(msg => msg.type === 'help' && !msg.parentId)
                    .map(msg => renderMessage(msg))}
                </div>
              </TabsContent>

              <TabsContent value="general">
                <div className="bg-muted/30 p-4 rounded-lg mb-4 glass-effect">
                  <h3 className="font-semibold mb-2">Join the Discussion</h3>
                  <p className="text-muted-foreground">
                    Have questions or insights about the project? Share your thoughts and engage with others interested in this idea.
                  </p>
                </div>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  {messages
                    .filter(msg => msg.type === 'general' && !msg.parentId)
                    .map(msg => renderMessage(msg))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Message Input */}
            <div className="mt-4 pt-4 border-t">
              {/* Reaction Buttons - Moved here */}
              <div className="flex flex-wrap gap-2 mb-4 p-2 bg-muted/30 rounded-lg glass-effect">
                <motion.div className="flex flex-wrap gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleIdeaReaction('hot')}
                      className={`button-hover glass-effect ${recentReaction === 'hot' ? 'ring-2 ring-primary' : ''}`}
                    >
                      <motion.span
                        animate={recentReaction === 'hot' ? { scale: [1, 1.2, 1] } : {}}
                      >
                        🔥 Hot Idea! ({reactions.hot})
                      </motion.span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleIdeaReaction('interesting')}
                      className={`button-hover glass-effect ${recentReaction === 'interesting' ? 'ring-2 ring-primary' : ''}`}
                    >
                      <motion.span
                        animate={recentReaction === 'interesting' ? { scale: [1, 1.2, 1] } : {}}
                      >
                        💡 Interesting! ({reactions.interesting})
                      </motion.span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleIdeaReaction('tellMeMore')}
                      className={`button-hover glass-effect ${recentReaction === 'tellMeMore' ? 'ring-2 ring-primary' : ''}`}
                    >
                      <motion.span
                        animate={recentReaction === 'tellMeMore' ? { scale: [1, 1.2, 1] } : {}}
                      >
                        🤔 Tell me more! ({reactions.tellMeMore})
                      </motion.span>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {replyingTo && (
                <div className="flex items-center justify-between bg-muted/30 p-2 rounded-lg mb-2 glass-effect">
                  <span className="text-sm text-muted-foreground">
                    Replying to {messages.find(m => m.id === replyingTo)?.user}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setReplyingTo(undefined)}
                    className="button-hover"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
              <Textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={replyingTo ? "Write a reply..." : "Type your message..."}
                className="min-h-[100px] mb-2 input-focus"
              />
              <div className="flex justify-end">
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!message.trim()}
                  className="button-hover"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {replyingTo ? 'Send Reply' : 'Send Message'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions and Search */}
      <QuickActions
        notifications={notifications}
        onNotificationClick={(id) => console.log("Notification clicked:", id)}
        onSearchOpen={() => setIsSearchOpen(true)}
        onCreateNew={() => router.push("/ideas/new")}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelect={handleSearchSelect}
      />

      {/* Team Application Modal */}
      <Dialog open={isApplicationModalOpen} onOpenChange={setIsApplicationModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Join Project Team</DialogTitle>
            <DialogDescription>
              Submit your application to join the team. Please provide details about your experience and interest in the project.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
            const formData = new FormData(e.currentTarget);
            const application: Partial<TeamApplication> = {
              role: formData.get('role') as string,
              experience: formData.get('experience') as string,
              technicalSkills: formData.get('technicalSkills') as string,
              message: formData.get('message') as string,
              status: 'pending',
              submittedAt: new Date()
            };
            
            // In a real app, this would be an API call
            console.log('Submitting application:', application);
            setApplicationStatus('pending');
            setIsApplicationModalOpen(false);
          }}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="role">Preferred Role</Label>
                <Select name="role" value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {idea.team.openRoles.map((role) => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="technicalSkills">Technical Skills & Tools</Label>
                <Textarea
                  id="technicalSkills"
                  name="technicalSkills"
                  placeholder="List relevant technical skills, programming languages, frameworks, and tools you're proficient with..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="experience">Project Experience</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  placeholder="Describe your relevant project experience and past hackathon participation..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message to the Team</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Why do you want to join this project? What unique value can you bring to the team?"
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsApplicationModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={!selectedRole}>Submit Application</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
} 
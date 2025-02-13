"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, Bell, Menu, X } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface QuickActionsProps {
  notifications: Notification[];
  onNotificationClick: (id: string) => void;
  onSearchOpen: () => void;
  onCreateNew: () => void;
}

export function QuickActions({
  notifications,
  onNotificationClick,
  onSearchOpen,
  onCreateNew,
}: QuickActionsProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      {/* Search Overlay Trigger */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed right-20 bottom-4 rounded-full w-12 h-12 bg-accent hover:bg-accent/80 hover-lift"
        onClick={onSearchOpen}
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Notifications */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed right-36 bottom-4 rounded-full w-12 h-12 bg-accent hover:bg-accent/80 hover-lift"
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-80 mt-2 p-2 glass-effect"
        >
          <div className="flex items-center justify-between mb-2 px-2">
            <h3 className="font-semibold">Notifications</h3>
            <Button variant="ghost" size="sm" className="text-xs">
              Mark all as read
            </Button>
          </div>
          <div className="space-y-1">
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`p-3 cursor-pointer rounded-lg hover:bg-accent ${
                  !notification.read ? "bg-accent/50" : ""
                }`}
                onClick={() => onNotificationClick(notification.id)}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">{notification.title}</p>
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {notification.message}
                  </p>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Quick Actions Menu */}
      <div className="quick-actions">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute bottom-16 right-0 mb-2 space-y-2"
            >
              <Button
                variant="default"
                size="icon"
                className="quick-action-button hover-lift"
                onClick={onCreateNew}
              >
                <Plus className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          variant="default"
          size="icon"
          className="quick-action-button hover-lift"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>
    </>
  );
} 
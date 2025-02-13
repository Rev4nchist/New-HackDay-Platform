"use client";

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Temporary type for admin view of ideas
interface AdminIdea {
  id: string;
  title: string;
  category: string;
  submissionDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

// Temporary mock data
const mockAdminIdeas: AdminIdea[] = [
  {
    id: "1",
    title: "AI-Powered Code Review Assistant",
    category: "Sparks of AI",
    submissionDate: "2024-02-13",
    status: 'approved'
  },
  // Add more mock ideas here
];

export default function AdminPage() {
  const [ideas] = useState<AdminIdea[]>(mockAdminIdeas);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    // TODO: Implement CSV upload logic
    console.log('Uploading file:', selectedFile.name);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      {/* CSV Upload Section */}
      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Import Ideas</h2>
        <div className="flex items-center gap-4">
          <Input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="max-w-md"
          />
          <Button 
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Upload CSV
          </Button>
        </div>
      </Card>

      {/* Ideas Management Table */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Ideas</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Submission Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ideas.map((idea) => (
              <TableRow key={idea.id}>
                <TableCell>{idea.title}</TableCell>
                <TableCell>{idea.category}</TableCell>
                <TableCell>{idea.submissionDate}</TableCell>
                <TableCell>
                  <span className={`capitalize ${
                    idea.status === 'approved' ? 'text-green-600' :
                    idea.status === 'rejected' ? 'text-red-600' :
                    'text-yellow-600'
                  }`}>
                    {idea.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
} 
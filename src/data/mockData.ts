import { FileNode as OriginalFileNode, User } from '../types'; // Assuming types are defined elsewhere

// --- User Definitions ---

export const sambat: User = {
  name: 'Sambat',
  avatarUrl: '', // Not used directly in UI, but good practice
};

export const user: User = {
  name: 'You',
  avatarUrl: '',
};

// --- Message Definitions ---

export interface Message {
  id: number;
  text: string;
  author: User;
  timestamp: string;
}

export const mockMessages: Message[] = [
  {
    id: 1,
    text: 'Recreate the Vercel dashboard UI.',
    author: user,
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: 2,
    text: 'Understood. I will start by creating the main layout, sidebar, and header components.',
    author: sambat,
    timestamp: new Date(Date.now() - 1000 * 60 * 4).toISOString(),
  },
  {
    id: 3,
    text: 'First, here is the `Layout.tsx` component.',
    author: sambat,
    timestamp: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
  },
];


// --- File Tree Definitions ---

// Extend the original FileNode to ensure content is present for files
export interface FileNode {
  name: string;
  children?: FileNode[];
  content?: string; // Add content for files
}

const packageJsonContent = `{
  "name": "sambat-recreation",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.372.0",
    "framer-motion": "^11.0.28",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.2"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "typescript": "^5.2.2",
    "vite": "^5.2.0",
    "tailwindcss": "^3.4.3",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19"
  }
}
`;

const appTsxContent = `import React from 'react';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <h1>Welcome to Sambat</h1>
      <p>Select a file to begin.</p>
    </div>
  )
}
`;

export const mockFileTree: FileNode[] = [
  {
    name: 'src',
    children: [
      {
        name: 'components',
        children: [
          { name: 'Sidebar.tsx', content: '// Sidebar Component Code...' },
          { name: 'Header.tsx', content: '// Header Component Code...' },
          { name: 'ChatInterface.tsx', content: '// ChatInterface Component Code...' },
        ],
      },
      {
        name: 'App.tsx',
        content: appTsxContent,
      },
    ],
  },
  {
    name: 'package.json',
    content: packageJsonContent,
  },
];

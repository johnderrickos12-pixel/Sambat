
import { MessageCircle, User, Bot, Code, Terminal, GitBranch, FileText, Image, Folder } from 'lucide-react';

export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  avatar: React.ReactNode;
};

export type FileNode = {
  name: string;
  type: 'folder' | 'file';
  icon: React.ReactNode;
  children?: FileNode[];
};

export const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'user',
    content: 'Recreate the Vercel dashboard UI.',
    avatar: <User className="w-6 h-6" />,
  },
  {
    id: '2',
    role: 'assistant',
    content: 'Understood. I will start by creating the main layout, sidebar, and header components.',
    avatar: <Bot className="w-6 h-6" />,
  },
  {
    id: '3',
    role: 'assistant',
    content: '```tsx\n// src/components/Layout.tsx\nexport const Layout = () => {\n  return <div className="flex h-screen bg-black text-white">...</div>;\n}\n```',
    avatar: <Bot className="w-6 h-6" />,
  },
   {
    id: '4',
    role: 'user',
    content: 'Looks good. Now add the main content area.',
    avatar: <User className="w-6 h-6" />,
  },
];

export const MOCK_FILE_TREE: FileNode[] = [
  {
    name: 'src',
    type: 'folder',
    icon: <Folder className="w-4 h-4 text-sky-400" />,
    children: [
      {
        name: 'components',
        type: 'folder',
        icon: <Folder className="w-4 h-4 text-sky-400" />,
        children: [
          { name: 'Sidebar.tsx', type: 'file', icon: <Code className="w-4 h-4 text-blue-400" /> },
          { name: 'Header.tsx', type: 'file', icon: <Code className="w-4 h-4 text-blue-400" /> },
          { name: 'ChatInterface.tsx', type: 'file', icon: <Code className="w-4 h-4 text-blue-400" /> },
          { name: 'PreviewWindow.tsx', type: 'file', icon: <Code className="w-4 h-4 text-blue-400" /> },
        ],
      },
      {
        name: 'lib',
        type: 'folder',
        icon: <Folder className="w-4 h-4 text-sky-400" />,
        children: [{ name: 'utils.ts', type: 'file', icon: <Code className="w-4 h-4 text-yellow-400" /> }],
      },
      { name: 'App.tsx', type: 'file', icon: <Code className="w-4 h-4 text-blue-400" /> },
      { name: 'main.tsx', type: 'file', icon: <Code className="w-4 h-4 text-blue-400" /> },
      { name: 'index.css', type: 'file', icon: <FileText className="w-4 h-4 text-pink-400" /> },
    ],
  },
  { name: 'package.json', type: 'file', icon: <Terminal className="w-4 h-4 text-green-400" /> },
  { name: 'README.md', type: 'file', icon: <FileText className="w-4 h-4 text-gray-400" /> },
];

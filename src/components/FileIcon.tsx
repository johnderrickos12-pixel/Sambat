import { File, Folder, Image, FileJson, FileText, Code } from 'lucide-react';
import React from 'react';

interface FileIconProps {
  filename: string;
  isFolder?: boolean;
}

const fileExtensionMap: { [key: string]: React.ElementType } = {
  js: Code,
  ts: Code,
  tsx: Code,
  jsx: Code,
  json: FileJson,
  css: Code,
  html: Code,
  png: Image,
  jpg: Image,
  jpeg: Image,
  svg: Image,
  gif: Image,
  md: FileText,
  txt: FileText,
};

const FileIcon: React.FC<FileIconProps> = ({ filename, isFolder }) => {
  if (isFolder) {
    return <Folder className="w-4 h-4 text-gray-500" />;
  }

  const extension = filename.split('.').pop()?.toLowerCase() || '';
  const IconComponent = fileExtensionMap[extension] || File;

  return <IconComponent className="w-4 h-4 text-gray-500" />;
};

export default FileIcon;

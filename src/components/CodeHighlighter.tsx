import React from 'react';

interface CodeHighlighterProps {
  code: string;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ code }) => {
  const highlightSyntax = (str: string) => {
    // This is a simplified highlighter. A real app would use a library.
    return str
      .replace(/(\/\*[\s\S]*?\*\/|\/\/[^\r\n]*)/g, '<span class="text-gray-500">$&</span>') // Comments
      .replace(/\b(import|from|export|default|const|let|var|return|function|=>|if|else|switch|case|break)\b/g, '<span class="text-purple-400">$&</span>') // Keywords
      .replace(/\b(React|FC|useState|useEffect|props|interface|type)\b/g, '<span class="text-sky-400">$&</span>') // React/TS types
      .replace(/(\'|\"|\`)(.*?)\1/g, '<span class="text-amber-400">$&</span>') // Strings
      .replace(/(\{)(.*?)(\})/g, '<span class="text-gray-300">$1</span><span class="text-yellow-400">$2</span><span class="text-gray-300">$3</span>') // Braces content
      .replace(/(\()(.+?)(\))/g, '<span class="text-gray-300">$1</span><span class="text-teal-300">$2</span><span class="text-gray-300">$3</span>') // Parentheses content
      .replace(/(&lt;[A-Z][a-zA-Z0-9]*|&lt;\/[A-Z][a-zA-Z0-9]*&gt;|&lt;[a-z][a-zA-Z0-9]*.+?\/&gt;)/g, '<span class="text-red-400">$&</span>'); // JSX Tags
  };

  const highlightedCode = highlightSyntax(code);

  return (
    <pre className="text-sm text-gray-400 bg-black p-4 rounded-md overflow-auto">
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};

export default CodeHighlighter;

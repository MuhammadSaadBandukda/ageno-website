// components/MarkdownRenderer.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // GitHub-style markdown
import rehypeHighlight from "rehype-highlight"; // Syntax highlighting
import "highlight.js/styles/github.css"; // style for code blocks

type Props = {
  content: string;
};

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  return (
    <div className="prose max-w-none dark:prose-invert">
        
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
};

export default MarkdownRenderer;

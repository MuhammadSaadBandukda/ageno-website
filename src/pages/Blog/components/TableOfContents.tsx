type Heading = {
  level: number;
  text: string;
  id: string;
};

// Utility: Extract headings from markdown content
export function extractHeadings(markdown: string): Heading[] {
  const lines = markdown.split("\n");
  const filtered = lines.filter((line) => /^#{1,6}\s/.test(line));
  return filtered.map((raw) => {
    const level = raw.match(/^#{1,6}/)?.[0].length || 1;
    const text = raw.replace(/^#{1,6}\s*/, "").trim();
    const id = text.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, "-");
    return { level, text, id };
  });
}

interface Props {
  headings: Heading[];
};

// Helper: map heading level to Tailwind margin-left
const getIndentClass = (level: number) => {
  switch (level) {
    case 1: return "ml-0";
    case 2: return "ml-4";
    case 3: return "ml-6";
    case 4: return "ml-8";
    case 5: return "ml-10";
    case 6: return "ml-12";
    default: return "ml-0";
  }
};

const TableOfContents = ({ headings }:Props) => {
  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className="sticky top-24 max-w-xs p-4 border rounded bg-white dark:bg-gray-900"
    >
      <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
      <ul className="space-y-1 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={getIndentClass(heading.level)}>
            <a
              href={`#${heading.id}`}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;

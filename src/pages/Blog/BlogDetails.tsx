// pages/blogs/BlogDetails.tsx
import { useParams } from "react-router-dom";
import { sampleBlogs } from "./data/blogs";
import MarkdownRenderer from "./components/MarkdownRenderer";
import TableOfContents, { extractHeadings } from "./components/TableOfContents";

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = sampleBlogs.find((b) => b.slug === slug);
  if (!blog) return <div>Blog not found.</div>;
  const headings = extractHeadings(blog.content);

  return (
    <div className="grid lg:grid-cols-12 gap-8 p-8 max-w-screen-xl">
       <div className="hidden lg:block col-span-1">
        {/* filhal Empty ha */}
       </div>
       <div className="lg:col-span-8">
      <h1 className="text-4xl font-bold dark:text-stone-200">{blog.title}</h1>
      <p className="text-gray-600 mb-4 dark:text-gray-300 ">
        By {blog.author.name} • {new Date(blog.createdAt).toDateString()}
      </p>
      <img src={blog.coverImage} alt={blog.title} className="w-full mb-6 rounded" />
      <MarkdownRenderer content={blog.content} />
       </div>
       <aside className="col-span-3  hidden lg:block">
        <TableOfContents  headings={headings}/>
      </aside>
    </div>
  );
};

export default BlogDetails;

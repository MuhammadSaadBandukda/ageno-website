// pages/blogs/BlogDetails.tsx
import { useParams } from "react-router-dom";
import { sampleBlogs } from "./data/blogs";
import MarkdownRenderer from "./components/MarkdownRenderer";

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = sampleBlogs.find((b) => b.slug === slug);

  if (!blog) return <div>Blog not found.</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-600 mb-4">
        By {blog.author.name} • {new Date(blog.createdAt).toDateString()}
      </p>
      <img src={blog.coverImage} alt={blog.title} className="w-full mb-6 rounded" />
      <MarkdownRenderer content={blog.content} />
    </div>
  );
};

export default BlogDetails;

import { Link } from "react-router-dom";
import blogImage from "../../../../public/project1.png";
import { sampleBlogs } from "../data/blogs";
const latestBlogs = sampleBlogs
  .slice()
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  .slice(1, 4);

function BlogCard() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {latestBlogs.map((blog, index) => (
      <div key={index} className="relative flex flex-col sm:flex-row xl:flex-col items-start bg-gray-200 dark:bg-gray-900 p-4 rounded-lg">
        <div className="order-1 sm:ml-6 xl:ml-0">
          <h3 className="mb-1 text-slate-900 dark:text-slate-100 font-semibold">
        <span className="mb-1 block text-sm leading-6 text-indigo-500 dark:text-indigo-400">
          {blog.slug}
        </span>
          {blog.title}
          </h3>
          <div className="prose prose-slate prose-sm text-slate-600 dark:text-slate-400 dark:prose-invert">
        <p>
          {blog.content.slice(0, 80)}...
        </p>
          </div>
          <Link to={`/blogs/${blog.slug}`}>
          <button
        className="group inline-flex items-center h-9 cursor-pointer rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white dark:focus:ring-slate-400 mt-6"
          >
        Learn more
        <span className="sr-only">
          {blog.title} details
        </span>
        <svg
          className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
          width="3"
          height="6"
          viewBox="0 0 3 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0L3 3L0 6"></path>
        </svg>
          </button>
          </Link>
        </div>
        <img
          src={blogImage}
          alt=""
          className="mb-6 shadow-md rounded-lg bg-slate-50 dark:bg-slate-800 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
          width="1216"
          height="640"
        />
      </div>
          ))}
    </div>
  );
}

export default BlogCard;

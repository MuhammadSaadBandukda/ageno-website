
import { useState } from "react";
import { sampleBlogs } from "../data/blogs";



const AllBlogs = () => {
   const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // Calculate indexes
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sampleBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(sampleBlogs.length / blogsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  
    return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl font-extrabold uppercase dark:text-stone-200">
        All Blogs
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 ">
        {currentBlogs.map((blog, index) => (
        <div key={index} className="relative flex flex-col sm:flex-row xl:flex-col items-start bg-gray-200 dark:bg-gray-900 p-4 rounded-lg">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <div className="flex justify-between">
              <span className="font-semibold leading-6 text-indigo-500 dark:text-indigo-400">
                Headless UI
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {blog.createdAt.toLocaleDateString("en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
                }
              </span>
            </div>

            <h3 className="mb-1 text-slate-900 dark:text-slate-100 font-semibold">
              {blog.title}
            </h3>
            <p className="prose prose-slate prose-sm text-slate-600 dark:text-slate-400 dark:prose-invert"> 
              {blog.content.slice(0, 80)}...
            </p>

            <div className="flex  items-center mt-4 space-x-4">
              <img
                src={blog.author.photoUrl}
                alt=""
                width={40}
                height={40}
                className="rounded-full object-cover "
              />
              <div className="col-span-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Written by {blog.author.name}
                </p>
              </div>
            </div>
          </div>
          <img src={blog.coverImage}
          alt=""
          className="mb-6 shadow-md rounded-lg bg-slate-50 dark:bg-slate-800 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
          width="1216"
          height="640" />
        </div>
        ))}
        
      </div>

      
      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-indigo-700 text-white  rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-indigo-700 text-white  rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default AllBlogs;

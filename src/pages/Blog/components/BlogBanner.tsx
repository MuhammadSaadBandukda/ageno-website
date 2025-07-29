import { sampleBlogs } from "../data/blogs";

function BlogBanner() {
  // const latestBlog = sampleBlogs.findOne().sort({ createdAt: -1 });

  const latestBlog = sampleBlogs.reduce((latest, current) => {
    return new Date(current.createdAt) > new Date(latest.createdAt)
      ? current
      : latest;
  });

  return (
    <div className="">
        <h1 className="text-4xl font-extrabold uppercase dark:text-stone-200 text-center mb-8">
            Latest Blog
        </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-gray-900 shadow-md p-4 border border-gray-200 dark:border-gray-700">
      <img
        src={latestBlog.coverImage}
        className="object-cover rounded-2xl md:rounded-l-2xl md:rounded-r-none w-full h-48 md:h-auto"
        alt=""
      />
      <div className="flex flex-col justify-center md:p-4 md:space-y-5">
        <div className="flex justify-between">
          <span className="font-semibold leading-6 text-indigo-500 dark:text-indigo-400">
            Headless UI
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            {latestBlog.createdAt.toLocaleDateString("en-US", 
            {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
            }
          </span>
        </div>
        <div className="md:space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {latestBlog.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            {latestBlog.content + "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis fuga, sed rerum quod sit error quidem saepe veritatis laboriosam nulla earum natus iusto! Assumenda ratione, cum error vel, deserunt esse nam repellat, eos unde soluta repudiandae quos tempore recusandae maiores!".slice(0, 100)}...
          </p>
          <button className="mt-auto px-4 py-2 w-full sm:w-48 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BlogBanner;

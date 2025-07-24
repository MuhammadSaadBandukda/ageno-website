import { useState } from "react";

type TAgenticApplication = {
  title: string;
  description: string;
  image: string;
};

const datas: TAgenticApplication[] = [
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const AgenticApplication = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? datas : datas.slice(0, 6);

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl text-center font-extrabold uppercase dark:text-stone-200">
        Agentic Application Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleCards.map((data, index) => (
          <div
            key={index}
            className="relative w-full  isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm m-auto"
          >
            <img
              src={data.image}
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              {data.title}
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              {data.description}
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 px-6 py-2 rounded-md transition"
        >
          See More
        </button>
      )}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 px-6 py-2 rounded-md transition"
        >
          See Less
        </button>
      )}
    </div>
  );
};

export default AgenticApplication;

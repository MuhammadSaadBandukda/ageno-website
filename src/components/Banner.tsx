import React from "react";

interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const Banner = ({ title, subtitle, description, image }) => {
  return (
    <div className="px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 h-68 place-items-center bg-stone-200 dark:bg-indigo-950">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-stone-200">
        {title}
      </h1>
      <div className="grid grid-cols-2  ">
        <div className="">
          <span className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-300">
            Featured Work
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gray-800 dark:text-stone-200">
            {subtitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <div className="place-items-end">
          <img
            src={image}
            alt=""
            className="object-contain h-48 w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

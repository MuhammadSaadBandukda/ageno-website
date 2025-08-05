import { useState } from 'react'
import { assets } from '../../../assets/assets';

type JourneyData= {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
};

const JourneyDatas: JourneyData[] = [
     {
    "title": "The Idea Was Born",
    "description": "It all started with a spark — the vision of a world where AI and humans collaborate seamlessly. This was the beginning of Agenoverse.",
    "date": "2022-01-15T00:00:00.000Z",
    "imageUrl": assets.j0
  },
  {
    "title": "Prototype & Early Team",
    "description": "We built our first prototype and gathered a team of passionate developers, designers, and thinkers who believed in the dream.",
    "date": "2022-07-10T00:00:00.000Z",
    "imageUrl":assets.j1
  },
  {
    "title": "Public Launch",
    "description": "Agenoverse officially launched its platform, offering innovative agentic systems to solve real-world problems.",
    "date": "2023-03-25T00:00:00.000Z",
    "imageUrl":assets.j2
  },
  {
    "title": "Expanding the Ecosystem",
    "description": "We started expanding globally — building partnerships, hosting events, and helping learners explore the future of AI.",
    "date": "2024-01-05T00:00:00.000Z",
    "imageUrl": assets.j3
  },
  {
  "title": "Global Recognition in AI Conference",
  "description": "In 2024, our team was honored at an international AI conference for our contributions to responsible agentic systems. This recognition inspired us to collaborate with global researchers and expand our impact in AI ethics and innovation.",
  "date": "2024-11-18",
  "imageUrl": assets.j4
},
{
  "title": "Launch of GenAI Mentorship Program",
  "description": "2025 marked the beginning of our mentorship program aimed at training students and young developers in generative AI and autonomous systems. The program brought together mentors from industry and academia to shape future leaders in tech.",
  "date": "2025-03-05",
  "imageUrl": assets.j5
}
]

const Journey = () => {
    const [showAll, setShowAll] = useState(false);
    
      const showCards = showAll ? JourneyDatas : JourneyDatas.slice(0, 6);
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl text-center font-extrabold uppercase dark:text-stone-200">
        Our Journey
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {showCards.map((data, index) => (
          <div
            key={index}
            className="relative w-full h-98  isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm m-auto"
          >
            <img
              src={data.imageUrl}
              alt="University of Southern California"
              className="absolute inset-0 h-60 w-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-2xl font-bold text-white">
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
  )
}

export default Journey
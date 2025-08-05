import { useParams } from "react-router-dom";
import Events from './data/events';
import {  MapPin, Calendar } from 'lucide-react';
import HeroCarousel from './components/HeroCarousel';

const EventDetails = () => {
    const param = useParams()
    const URL = param.title
    const event = Events.find((b) => b.title === URL);
    if (!event) return <div>Event not found.</div>;
    const { category, title, description, location, date, image} = event;
    const dateTime = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

  return (
    <>
      <HeroCarousel slides={[{ url: image, title}]} />
      <div className="min-h-screen mx-auto bg-white dark:bg-zinc-700 py-10 px-7 md:px-12">
        <div className="flex flex-col pb-6 md:pb-10 items-center gap-8 text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase">
          <h1 className="text-3xl font-bold mt-4 text-gray-800 dark:text-stone-200">{title}</h1>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-950 dark:text-blue-200 rounded-md">{category}</span>
        </div>

        <div className='flex flex-col md:flex-row gap-12'>
          <p className="md:w-1/2 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{description}</p>
          <div className='md:w-1/2 grid grid-cols-1'>
            <p className='pb-6 text-xl flex items-center gap-2 text-gray-800 dark:text-blue-200'><MapPin /> {location}</p>
            <div className="p-6 pl-0 text-xl border-b-2 border-t-2 border-gray-300 dark:border-gray-600 flex items-center gap-2 text-gray-800 dark:text-blue-200"><Calendar />{dateTime}</div>
            <a className="p-6 pl-0 text-4xl font-bold text-amber-500 dark:text-amber-400" href='#'>
              Register Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails
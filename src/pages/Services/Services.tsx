import React from 'react'
import ServicePng from '../../../public/services.png'
import { CodeBracketIcon, LinkIcon } from '@heroicons/react/24/outline'
import {Bot } from 'lucide-react'
import WhyChooseUs from '../../components/WhyChooseUs'
import Banner from '../../components/Banner'
interface Service {
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'We build fast, responsive, and SEO-friendly websites using modern technologies like React, Next.js, and Tailwind CSS. Our team delivers scalable solutions tailored to your business needs.',
    image:
      'https://static.vecteezy.com/system/resources/previews/001/879/576/original/designing-program-web-apps-on-monitor-screen-or-desktop-teamwork-in-developing-programming-debugging-development-process-illustration-for-website-homepage-header-landing-web-page-template-free-vector.jpg',
  },
  {
    title: 'AI Agents',
    description:
      'Empower your business with intelligent AI agents. From chatbots to workflow automation, we build smart assistants that enhance productivity and user experience using advanced machine learning models.',
    image:
      'https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-1497617145-1.jpg',
  },
]

const headings = ['Smart Solutions, Powerful Results.']

const dividerData = [
  {
    icon: <CodeBracketIcon className="h-20 w-20 text-blue-600" />,
    title: 'Built for You',
    description: 'We tailor every solution to match your vision and business goals.',
  },
  {
    icon: <Bot className="h-20 w-20 text-blue-600" />,
    title: 'AI-Powered',
    description: 'Integrating modern AI tools to make your systems smarter.',
  },
  {
    icon: <LinkIcon className="h-20 w-20 text-blue-600" />,
    title: 'Performance First',
    description: 'Optimized, scalable code for blazing-fast user experience.',
  },
];

const Services = () => {
  return (
    <>
     <Banner
        title={"Our Services"}
        subtitle={" Our Work Speaks for Itself"}
        description={
          "From startups to enterprises, we've helped businesses transform ideas into reality. Explore our portfolio to see how we blend creativity, technology, and strategy to deliver results that matter."
        }
        image={ServicePng}
      />
    <div className="min-h-screen bg-white dark:bg-zinc-700 py-12 px-6 md:px-12">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-stone-200 mb-4">
            Build with Confidence, Scale with AI
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            From custom websites to smart AI agents — we create digital solutions that deliver.
          </p>
        </div>

      <div className="grid gap-10 md:grid-cols-1 max-w-6xl mx-auto mb-11">
        {services.map((service, index) => (
          <>
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 lg:flex my-6 border-4 border-t border-l rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col-reverse lg:flex-row ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-64 w-full object-fill lg:m-12 lg:object-contain"
            />
            <div className="p-20 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
          {index < services.length - 1 && (
            <>
            <div className='p-6 font-semibold text-4xl dark:text-stone-200'>{headings[index]}</div>
           <div className="max-w-6xl mx-auto md:mx-9 grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-7 lg:gap-12">
        {dividerData.map((item, index) => (
          <div
            key={index}
            className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md  hover:shadow-xl transition duration-300"
          >
            <div className="text-3xl mb-4 flex justify-center">{item.icon}</div>
            <h3 className=" text-xl font-semibold mb-2 dark:text-blue-400">{item.title}</h3>
            <p className=" text-sm dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
      </>
)}
          </>
        ))}
      </div>
      <WhyChooseUs/>
    </div>
    </>
  )
}

export default Services


const HeroSection = () => {
  return (
    <section className="w-full bg-cover bg-center bg-no-repeat bg-[url('../../../../public/aboutbanner.jpg')] h-90 relative">
      <div className=" bg-opacity-60 w-full h-full flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering the Future with AI Agents
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We are a passionate team of developers shaping the world with Python, MERN stack, and AI-driven solutions.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

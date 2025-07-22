import Banner from "../../components/Banner";
import ServicePng from "../../../public/services.png";
const Projects = () => {
  return (
    <>
      <Banner
        title={"Our Projects"}
        subtitle={" Our Work Speaks for Itself"}
        description={
          "From startups to enterprises, we've helped businesses transform ideas into reality. Explore our portfolio to see how we blend creativity, technology, and strategy to deliver results that matter."
        }
        image={ServicePng}
      />
      <div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pseudo JSX structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row">
              <img
                src="../../../public/project1.png"
                className="w-full md:w-1/2 object-cover"
              />
              <div className="p-4">
                <h3>Project Title</h3>
                <p>Brief description</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse">
              <img
                src="../../../public/project1.png"
                className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded"
              />
              <div className="p-4">
                <h3>Project Title</h3>
                <p>Brief description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

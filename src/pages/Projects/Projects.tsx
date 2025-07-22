import Banner from "../../components/Banner";
import ServicePng from "../../../public/services.png";
import WebApplicaion from "./components/WebApplicaion";
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
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <WebApplicaion/>
          {/* WEBAPPLICTAION  */}
          {/* MOBILE APPLICATIOON  */}
          {/* aGENTIC APPLICATIOON  */}
          {/* Chatbot application */}
        </div>
    </>
  );
};

export default Projects;

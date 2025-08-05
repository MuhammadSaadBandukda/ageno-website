import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { assets } from "../../../assets/assets"; // Update if needed

const Team = () => {
  const [showAll, setShowAll] = useState(false);

  const TeamData = [
    {
      name: "Subhan Ali",
      role: "MERN Stack Developer",
      bio: "Crafts clean UI and builds AI-enabled solutions. Loves making code talk smart!",
      photoUrl: assets.t1,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/subhan-ali-9308971b4/",
        github: "https://github.com/SubhanAlyVeerani",
        twitter: "https://x.com/home"
      }
    },
    {
      name: "Ghufran Shah",
      role: "UI/UX Designer",
      bio: "Turns ideas into beautiful user experiences. Obsessed with minimalism and motion.",
      photoUrl: assets.t1,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/subhan-ali-9308971b4/",
        github: "https://github.com/SubhanAlyVeerani",
        twitter: "https://x.com/home"
      }
    },
    {
      name: "Shazil Khan",
      role: "AI Agent Developer",
      bio: "Builds intelligent systems using modern AI. Bridging automation and creativity.",
      photoUrl: assets.t1,
      socialLinks: {
       linkedin: "https://www.linkedin.com/in/subhan-ali-9308971b4/",
        github: "https://github.com/SubhanAlyVeerani",
        twitter: "https://x.com/home"
      }
    },
    {
      name: "Muhammad Saad",
      role: "Python Programmer",
      bio: "Tells tech stories in human words. Aligns content with purpose.",
      photoUrl: assets.t1,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/subhan-ali-9308971b4/",
        github: "https://github.com/SubhanAlyVeerani",
        twitter: "https://x.com/home"
      }
    },
  ];

  const displayedTeam = showAll ? TeamData : TeamData.slice(0, 3);

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold text-center uppercase text-gray-800 dark:text-stone-100">
        Meet Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {displayedTeam.map((member, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl transition hover:scale-105 hover:shadow-2xl relative overflow-hidden"
          >
            {/* Image */}
            <img
              src={member.photoUrl}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-md transition-all group-hover:scale-105"
            />

            {/* Name + Role */}
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">{member.role}</p>
            </div>

            {/* Bio */}
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-3">
              {member.bio}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-5 text-gray-600 dark:text-gray-300">
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {TeamData.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 mt-4 transition"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default Team;

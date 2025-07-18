import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center relative z-50">
      {/* Mobile: Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Logo */}
      <div className="text-xl font-bold text-blue-600 mx-auto md:mx-0">Agenoverse</div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-6 items-center">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
        <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
        <li><Link to="/events" className="hover:text-blue-600">Events</Link></li>
        <li><Link to="/blogs" className="hover:text-blue-600">Blogs</Link></li>
        <li><Link to="/agenoversity" className="hover:text-blue-600">Agenoversity</Link></li>

        {/* About dropdown */}
        <li className="relative">
          <button
            onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            className="flex items-center gap-1 hover:text-blue-600 hover:cursor-pointer"
          >
            About <ChevronDown size={16}  className={`transition-transform duration-200 ${
            aboutDropdownOpen ? 'rotate-180' : ''
          }`}/>
          </button>
          {aboutDropdownOpen && (
            <ul className="absolute top-8 right-0 bg-white border rounded shadow-md w-40 py-2 z-10"
            onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <li><Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">About Us</Link></li>
              <li><Link to="/our-journey" className="block px-4 py-2 hover:bg-gray-100">Our Journey</Link></li>
              <li><Link to="/our-team" className="block px-4 py-2 hover:bg-gray-100">Our Team</Link></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setSidebarOpen(false)}>
          <div
            className="bg-white w-64 h-full p-5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-blue-600">Menu</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <ul className="space-y-4">
              <li><Link to="/" className="block hover:text-blue-600 border-b border-gray-400/50">Home</Link></li>
              <li><Link to="/services" className="block hover:text-blue-600 border-b border-gray-400/50">Services</Link></li>
              <li><Link to="/projects" className="block hover:text-blue-600 border-b border-gray-400/50">Projects</Link></li>
              <li><Link to="/events" className="block hover:text-blue-600 border-b border-gray-400/50">Events</Link></li>
              <li><Link to="/blogs" className="block hover:text-blue-600 border-b border-gray-400/50">Blogs</Link></li>
              <li><Link to="/agenoversity" className="block hover:text-blue-600 border-b border-gray-400/50">Agenoversity</Link></li>
              {/* About dropdown */}
              <li className="relative border-b border-gray-400/50">
               <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="flex items-center gap-1 hover:text-blue-600"
                >
                About <ChevronDown size={16}  className={`transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''
                }`}/>
               </button>
               {aboutDropdownOpen && (
                <ul className=" w-40 py-2 z-10">
                  <li><Link to="/about-us" className="flex items-center px-4 py-2 text-blue-600 hover:bg-gray-100"><ChevronRight size={16} />About Us</Link></li>
                  <li><Link to="/our-journey" className="flex items-center px-4 py-2 text-blue-600 hover:bg-gray-100"><ChevronRight size={16} />Our Journey</Link></li>
                  <li><Link to="/our-team" className="flex items-center px-4 py-2 text-blue-600 hover:bg-gray-100"><ChevronRight size={16} />Our Team</Link></li>
                </ul>
               )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


// import React from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import FaEnvelope instead of FaTwitter

// const Footer = () => {
//   return (
//     <footer className="bg-gray-700 transition-all text-white py-6">
//       <div className="mx-auto flex justify-between items-center">
//         {/* Social Media Icons */}
//         <div className="flex space-x-6">
//           <a
//             href="https://github.com/abhishekv18"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-2xl hover:text-teal-400 transition-all"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/abhishek-agrawal-59b749274/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-2xl hover:text-teal-400 transition-all"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="agrawalabhishek723@gmail.com" // Replace with your email
//           //  target="_blank"
//             rel="noopener noreferrer"
//             className="text-2xl hover:text-teal-400 transition-all"
//           >
//             <FaEnvelope /> {/* Use the FaEnvelope for the mail icon */}
//           </a>
//         </div>

//         {/* Copyright Section */}
//         <div className="text-sm">
//           <p>&copy; {new Date().getFullYear()} Abhishek ❤️. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-indigo-950 text-gray-300 py-12 relative">
      {/* Scroll to Top Button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button 
          onClick={scrollToTop}
          className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white shadow-lg transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Abhishek Agrawal</h3>
            <p className="text-gray-400 mb-4">
              Creating innovative web solutions with passion and precision. Let's bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/abhishekv18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-md transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-agrawal-59b749274/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-md transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:abhishekagrawal1604@gmail.com"
                className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-md transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-indigo-400" />
                <a 
                  href="mailto:agrawalabhishek723@gmail.com" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  abhishekagrawal1604@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaCode className="mr-3 text-indigo-400" />
                <span className="text-gray-400">Full Stack Developer</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 text-center">
          <p className="flex items-center justify-center text-sm">
            &copy; {new Date().getFullYear()} Abhishek Agrawal. All Rights Reserved. Made with 
            <FaHeart className="text-red-500 mx-1 animate-pulse" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
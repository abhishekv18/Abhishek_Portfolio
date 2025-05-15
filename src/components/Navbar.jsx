//  import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import user from '../assets/user.png';
// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
  
//     const links = [
//      //   { id: 0, link: 'hero' },
//       { id: 1, link: 'about' },
//       { id: 2, link: 'projects' },
//       { id: 3, link: 'skills' },
//       { id: 4, link: 'resume' },
//       { id: 5, link: 'contact' },
//     ];
  
//     return (
//       <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-md">
//         <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          
//           {/* Logo */}
//           <Link to="/" > <h1 className=" flex items-center gap-1 text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wide cursor-pointer">
//             <img src={user} alt="logo" className="w-6 h-6" />
//             Abhishek
//           </h1></Link>
         
  
//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-10 text-lg font-semibold text-gray-700 dark:text-gray-300">
//             {links.map(({ id, link }) => (
//               <li key={id} className="relative group cursor-pointer capitalize">
//                 <Link to={`/${link}`} className="transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//                   {link}
//                   {/* Underline effect */}
//                   <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
  
//           {/* Mobile Hamburger */}
//           <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer md:hidden text-3xl text-gray-700 dark:text-gray-300">
//             {menuOpen ? '✖️' : '☰'}
//           </div>
  
//           {/* Mobile Menu */}
//           {menuOpen && (
//             <ul className="absolute top-16 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md flex flex-col items-center py-6 space-y-6 md:hidden text-lg font-semibold text-gray-700 dark:text-gray-300">
//               {links.map(({ id, link }) => (
//                 <li key={id} className="capitalize hover:text-indigo-600 dark:hover:text-indigo-400 transition">
//                   <Link to={`/${link}`} onClick={() => setMenuOpen(false)}>
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </nav>
//     );
//   };
  
//   export default Navbar;
  

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  FileText, 
  Mail, 
  Moon, 
  Sun,
  Menu, 
  X 
} from 'lucide-react';
import user from '../assets/user.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle dark mode toggle
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [darkMode]);
  
  const links = [
  
    { id: 2, name: 'about', icon: <User size={18} /> },
    { id: 3, name: 'projects', icon: <Briefcase size={18} /> },
    { id: 4, name: 'skills', icon: <Code size={18} /> },
    { id: 5, name: 'resume', icon: <FileText size={18} /> },
    { id: 6, name: 'contact', icon: <Mail size={18} /> },
  ];
  
  return (
    <nav 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-lg' 
          : 'py-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2 transition-all duration-300">
          <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-r from-indigo-500 to-purple-600 rotate-0 group-hover:rotate-12 transition-all duration-300">
            <img 
              src={user} 
              alt="logo" 
              className="w-8 h-8 rounded-full object-cover bg-white dark:bg-gray-800" 
            />
          </div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent tracking-wide">
            Abhishek
          </h1>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-8 font-medium text-gray-700 dark:text-gray-300">
            {links.map(({ id, name, icon }) => (
              <li key={id} className="relative group">
                <Link 
                  to={`/${name}`} 
                  className="flex items-center gap-1.5 px-1 py-2 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {icon}
                  <span className="capitalize">{name}</span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Dark mode toggle */}
          {/* <button 
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
        </div>
        
        {/* Mobile Hamburger */}
        <div className="flex items-center md:hidden">
          {/* Dark mode toggle for mobile */}
          {/* <button 
            onClick={() => setDarkMode(!darkMode)}
            className="mr-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-4 animate-fadeIn">
          <ul className="flex flex-col space-y-2 px-6">
            {links.map(({ id, name, icon }) => (
              <li key={id}>
                <Link
                  to={`/${name}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="bg-indigo-100 dark:bg-gray-800 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
                    {icon}
                  </div>
                  <span className="font-medium capitalize">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
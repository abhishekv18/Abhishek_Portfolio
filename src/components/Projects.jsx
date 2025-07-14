// // import React, { useEffect } from "react";
// // import { motion } from "framer-motion";
// // import locomotiveScroll from "locomotive-scroll";
// // import chat from "../assets/chat.png";
// // import ecommerce from "../assets/ecommerce.png";
// // import job from "../assets/job.png";
// // import school from "../assets/edustruct.jpeg";
// // import xcrypto from "../assets/crypto.png";
// // import blog from "../assets/blog.png";
// // // Adding Locomotive Scroll Styles
// // import "locomotive-scroll/dist/locomotive-scroll.css";


// // const Projects = () => {


// //   const projectList = [
// //     {
// //       image: job,
// //       description:
// //         "Portal connecting recruiters and students. Features include job posts, resume uploads, saved jobs, and JWT-based access.",
// //       link: "https://job-portal-kit7.onrender.com/",
// //       tags: ["React", "Node.js", "MongoDB", "JWT"],
// //     },
// //     {
// //       image: school,
// //       description:
// //         "Helps classify schools as furnished or odd, track improvements, and generate reports. Integrates maps and improvement tracking.",
// //       link: "#",
// //       tags: ["React", "Node.js", "MongoDB", "Google Maps"],
// //     },
// //     {
// //       image: xcrypto,
// //       description:
// //         "Helps classify schools as furnished or odd, track improvements, and generate reports. Integrates maps and improvement tracking.",
// //       link: "#",
// //       tags: ["React", "Tailwind Css"],
// //     },
// //     {
// //       image: chat,
// //       description:
// //         "A sleek chat platform with real-time messaging, media sharing, and themed UI. Built using Socket.io, Express, MongoDB, and JWT.",
// //       link: "https://chat-app-4-mz00.onrender.com/login",
// //       tags: ["React", "Node.js", "MongoDB", "Socket.io"],
// //     },
// //     {
// //       image: ecommerce,
// //       description:
// //         "A full-featured online store with admin and user panels, product reviews, cart, and PayPal payments. Built using MERN stack.",
// //       link: "https://ecommerce-cmso.onrender.com/auth/login",
// //       tags: ["React", "Node.js", "MongoDB", "MERN"],
// //     },
// //     {
// //       image: blog,
// //       description:
// //         "Interactive blog system with user login, likes/dislikes, comments, and admin moderation. Node.js backend with Cloudinary integration.",
// //       link:"https://abhisheks-blog.onrender.com/",
// //       tags: ["React", "Node.js", "MongoDB", "Express"],
// //     },
  
// //   ];

// //   return (
// //     <section
// //       id="projects"
// //       className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-gray-950 transition-all"
// //       data-scroll-container
// //     >
// //       <div className="max-w-7xl mx-auto">
// //         <h2 className="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
// //           Projects
// //         </h2>

// //         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
// //           {projectList.map((project, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: index * 0.2 }}
// //               viewport={{ once: true }}
// //               className="relative group bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 shadow-2xl rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
// //               data-scroll
// //               data-scroll-speed="1"
// //             >
// //               {/* Placeholder Image Area */}
// //               <div className="h-64 w-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
// //                 <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
// //               </div>

// //               {/* Text content */}
// //               <div className="p-6">
               

// //                 <p className="text-gray-600 dark:text-gray-300 line-clamp-2 group-hover:line-clamp-none transition-all duration-500 h-16 overflow-hidden">
// //                   {project.description}
// //                 </p>

// //                 {/* Tags */}
// //                 <div className="mt-4 flex flex-wrap gap-3">
// //                   {project.tags.map((tag, index) => (
// //                     <span
// //                       key={index}
// //                       className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-500 text-white"
// //                     >
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>

// //                 <a
// //                   href={project.link} 
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="cursor-pointer inline-block mt-6 px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
// //                 >
// //                   View Project
// //                 </a>
// //               </div>

// //               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;




import React, { useState, useEffect } from "react";
import { 
  ExternalLink, 
  Code, 
  Globe,
  Database,
  Server,
  MessageSquare,
  ShoppingBag,
  FileText,
  Briefcase,
  School,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Github
} from "lucide-react";
import chat from "../assets/chat.png";
import ecommerce from "../assets/ecommerce.png";
import job from "../assets/job.png";
import school from "../assets/edustruct.jpeg";
import xcrypto from "../assets/crypto.png";
import blog from "../assets/blog.png";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    observer.observe(document.getElementById('projects-section'));
    
    return () => observer.disconnect();
  }, []);

  const categories = ["All", "Web App", "Frontend", "Full Stack"];

  const getProjectIcon = (title) => {
    if (title?.includes("job") || title?.includes("portal")) return <Briefcase size={24} />;
    if (title?.includes("school") || title?.includes("edu")) return <School size={24} />;
    if (title?.includes("crypto")) return <TrendingUp size={24} />;
    if (title?.includes("chat")) return <MessageSquare size={24} />;
    if (title?.includes("ecommerce") || title?.includes("store")) return <ShoppingBag size={24} />;
    if (title?.includes("blog")) return <FileText size={24} />;
    return <Code size={24} />;
  };

  const projectList = [
    {
      title: "Job Portal Platform",
      image: job,
      description:
        "Portal connecting recruiters and students. Features include job posts, resume uploads, saved jobs, and JWT-based access.",
      link: "https://job-portal-kit7.onrender.com/",
      github: "https://github.com/abhishekv18/Job-Portal",
      category: "Full Stack",
      tags: ["React", "Node.js", "MongoDB", "JWT"],
      icon: <Briefcase size={24} />
    },
    {
      title: "School Management System",
      image: school,
      description:
        "Helps classify schools as furnished or odd, track improvements, and generate reports. Integrates maps and improvement tracking.",
      link: "#",
      github: "https://github.com/abhishekv18/EduStruct",
      category: "Full Stack",
      tags: ["React", "Node.js", "MongoDB", "Google Maps"],
      icon: <School size={24} />
    },
    {
      title: "Crypto Tracker App",
      image: xcrypto,
      description:
        "Real-time cryptocurrency tracking application with price charts, market data, and customizable watchlists.",
      link: "https://crypto-app-six-theta.vercel.app/",
      github: "https://github.com/abhishekv18/Xcrypto",
      category: "Frontend",
      tags: ["React", "Tailwind CSS", "API Integration"],
      icon: <TrendingUp size={24} />
    },
    {
      title: "Real-time Chat Application",
      image: chat,
      description:
        "A sleek chat platform with real-time messaging, media sharing, and themed UI. Built using Socket.io, Express, MongoDB, and JWT.",
      link: "https://chat-app-4-mz00.onrender.com/login",
      github: "https://github.com/abhishekv18/chat-app",
      category: "Full Stack",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      icon: <MessageSquare size={24} />
    },
    {
      title: "E-commerce Platform",
      image: ecommerce,
      description:
        "A full-featured online store with admin and user panels, product reviews, cart, and PayPal payments. Built using MERN stack.",
      link: "https://ecommerce-cmso.onrender.com/auth/login",
      github: "https://github.com/abhishekv18/Ecommerce",
      category: "Full Stack",
      tags: ["React", "Node.js", "MongoDB", "MERN"],
      icon: <ShoppingBag size={24} />
    },
    {
      title: "Interactive Blog System",
      image: blog,
      description:
        "Interactive blog system with user login, likes/dislikes, comments, and admin moderation. Node.js backend with Cloudinary integration.",
      link: "https://abhisheks-blog.onrender.com/",
      github: "https://github.com/abhishekv18/mern-blog",
      category: "Web App",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      icon: <FileText size={24} />
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projectList 
    : projectList.filter(project => project.category === activeCategory);

  const getTechIcon = (tag) => {
    switch(tag) {
      case "React":
        return <Code size={14} />;
      case "Node.js":
        return <Server size={14} />;
      case "MongoDB":
        return <Database size={14} />;
      default:
        return <Globe size={14} />;
    }
  };

  return (
    <section
      id="projects-section"
      className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6TTI0IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6TTEyIDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6TTAgMzR2NmgxMnYtNkgwem0wIDZ2NmgxMnYtNkgwem0wIDZ2NmgxMnYtNkgwem0xMiAwdjZoMTJ2LTZIMTJtMTIgMHY2aDEydi02SDI0bTEyIDB2NmgxMnYtNkgzNm0xMiAwdjZoMTJ2LTZINDgiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-[0.015] dark:opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 font-medium rounded-full text-sm mb-4">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore a collection of my latest work showcasing my skills in web development, 
            from responsive frontends to complex full-stack applications.
          </p>
        </div>

        {/* Category Filter */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 50}ms` 
              }}
            >
              {/* Project image */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-indigo-900/40 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Project icon floating on top */}
                <div className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full z-20 shadow-lg">
                  <div className="text-indigo-600 dark:text-indigo-400">
                    {project.icon}
                  </div>
                </div>
                
                {/* Project category */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm h-20 overflow-hidden">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-medium"
                    >
                      {getTechIcon(tag)}
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Globe size={16} />
                    Live Demo
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  
                  {/* <button
                    onClick={() => setSelectedProject(project)}
                    className="ml-auto flex items-center justify-center w-9 h-9 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
                    aria-label="View details"
                  >
                    <ExternalLink size={16} />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state if no projects match the filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div 
            className="relative bg-white dark:bg-gray-800 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full text-white z-20"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            
            {/* Project image */}
            <div className="relative h-64 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/50 to-transparent z-10"></div>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Project title overlay */}
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white">
                    {selectedProject.icon}
                  </div>
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>
            
            {/* Project details */}
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              
              {/* Technologies used */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium"
                    >
                      {getTechIcon(tag)}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Globe size={18} />
                  Visit Live Site
                </a>
                
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-colors"
                >
                  <Github size={18} />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;



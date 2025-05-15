// import React from 'react';
// import profileImage from '../assets/image2.jpeg'; // 👉 Replace with your own image path

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex flex-col justify-center items-center py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-all"
//     >
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side: Image */}
//         <div className="flex justify-center">
//           <img
//             src={profileImage}
//             alt="Profile"
//             className="rounded-3xl shadow-2xl w-72 h-72 object-cover hover:scale-105 transition-transform duration-500"
//           />
//         </div>

//         {/* Right Side: Content */}
//         <div className="text-center md:text-left">
//           <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
//             About Me
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
//             I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">[Abhishek Agrawal]</span>, a passionate web developer specializing in building exceptional digital experiences.
//             I love turning ideas into beautiful, functional products.
//             From designing slick user interfaces to developing powerful backend systems, I enjoy every step of the process.
//           </p>
//           <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
//             With hands on experience in the <strong className="text-indigo-600 dark:text-indigo-400">MERN stack</strong>, 
//             I aim to deliver fast, accessible, and responsive web applications.
//             Let's collaborate and build something amazing together!
//           </p>

//           {/* Quick Info badges */}
//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             <span className="px-5 py-2 bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-white font-semibold rounded-full">
//               MERN Stack Developer
//             </span>
//             <span className="px-5 py-2 bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-white font-semibold rounded-full">
//               Open for Work!
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React, { useEffect, useState } from 'react';
import { 
  Code,
  Server, 
  Layout, 
  Database, 
  Globe, 
  CheckCircle,
  BookOpen,
  Award,
  Coffee
} from 'lucide-react';
import profileImage from '../assets/image2.jpeg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    observer.observe(document.getElementById('about-section'));
    
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Frontend Development', icon: <Layout size={20} /> },
    { name: 'Backend Development', icon: <Server size={20} /> },
    { name: 'Database Management', icon: <Database size={20} /> },
    { name: 'Responsive Design', icon: <Globe size={20} /> },
  ];

  return (
    <section
      id="about-section"
      className="relative py-24 px-6 bg-slate-50 dark:bg-slate-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/30 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-12 -left-24 w-80 h-80 bg-purple-200 dark:bg-purple-900/30 rounded-full opacity-20 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6TTI0IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6TTEyIDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6TTAgMzR2NmgxMnYtNkgwem0wIDZ2NmgxMnYtNkgwem0wIDZ2NmgxMnYtNkgwem0xMiAwdjZoMTJ2LTZIMTJtMTIgMHY2aDEydi02SDI0bTEyIDB2NmgxMnYtNkgzNm0xMiAwdjZoMTJ2LTZINDgiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-[0.015] dark:opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 font-medium rounded-full text-sm mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Passionate about <span className="text-indigo-600 dark:text-indigo-400">building</span> for the web
          </h2>
        </div>

        <div 
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Left Side: Profile Image with Frame */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-xl bg-indigo-600 dark:bg-indigo-500"></div>
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded border-2 border-purple-500 dark:border-purple-400"></div>
              <div className="absolute -bottom-3 left-12 w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400"></div>
              
              {/* Main image with border */}
              <div className="relative p-1 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden z-10 w-72 lg:w-96">
                <img
                  src={profileImage}
                  alt="Abhishek Agrawal"
                  className="rounded-lg w-full h-auto object-cover aspect-[4/5]"
                />
                
                {/* Overlay with stats */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-indigo-900/80 to-transparent backdrop-blur-sm">
                  {/* <div className="flex justify-between text-white">
                    <div className="flex items-center gap-2">
                      <Coffee size={16} />
                      <span>1000+ cups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code size={16} />
                      <span>50+ projects</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-300 font-medium text-sm border border-indigo-500/20">
              <CheckCircle size={16} />
              <span>Available for freelance work</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Abhishek Agrawal</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with expertise in creating exceptional digital experiences. 
              My journey in web development has equipped me with a comprehensive skill set to transform ideas into 
              elegant, functional, and user-centric applications.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Specializing in the <strong className="text-indigo-600 dark:text-indigo-400">MERN stack</strong>, 
              I combine creative problem-solving with technical expertise to deliver intuitive applications that 
              prioritize performance, accessibility, and responsiveness. I'm driven by the challenge of turning 
              complex problems into simple, beautiful solutions.
            </p>
            
            {/* Skills */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Core Expertise
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <div className="p-2 rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick facts */}
            <div className="flex flex-wrap gap-4 pt-4 mt-2.5">
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg border border-indigo-100 dark:border-indigo-700/30">
                <BookOpen size={18} />
                <span>B.Tech in Computer Science</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium rounded-lg border border-purple-100 dark:border-purple-700/30">
                <Award size={18} />
                <span>Hands on Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
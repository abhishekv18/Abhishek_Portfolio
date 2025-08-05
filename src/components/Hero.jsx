
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Code, 
  Monitor, 
  Database, 
  ArrowRight, 
  FileDown, 
  ChevronDown 
} from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with modern mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6TTI0IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6TTEyIDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6TTAgMzR2NmgxMnYtNkgwem0wIDZ2NmgxMnYtNkgwem0wIDZ2NmgxMnYtNkgwem0xMiAwdjZoMTJ2LTZIMTJtMTIgMHY2aDEydi02SDI0bTEyIDB2NmgxMnYtNkgzNm0xMiAwdjZoMTJ2LTZINDgiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 z-10 mt-0.5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content - Text */}
          <div className={`w-full lg:w-3/5 text-white space-y-8 transition-all duration-1000 mt-24 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block px-3 py-1 bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full text-sm font-medium text-indigo-200 mb-2">
              Full-Stack Developer
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Transforming Ideas into</span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Exceptional Digital Experiences
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-gray-300">
              Hello, I'm <span className="text-indigo-300 font-semibold">Abhishek Agrawal</span> — A passionate developer 
              focused on building innovative, user-centric applications.
            </h2>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl">
              I specialize in creating modern, responsive web solutions with a focus on performance and accessibility. 
              With expertise in React, Node.js, and cloud technologies, I help businesses achieve their digital goals through 
              clean code and intuitive interfaces.
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-full text-indigo-300">
                <Code size={16} />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-300">
                <Monitor size={16} />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-300">
                <Database size={16} />
                <span>Node.js</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/projects"
                className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="/resume.pdf"
              
                 download="Abhishek_Agrawal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                Download CV
                <FileDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-4 mb-2">
              <a
                  href="https://github.com/abhishekv18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
               href="https://www.linkedin.com/in/abhishek-agrawal-59b749274/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/AgrawalAg11228"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Right content - Floating 3D object or illustration */}
          <div className={`w-full lg:w-2/5 relative transition-all duration-1000 mb-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Code sphere visualization - this is a stylized representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Outer ring */}
                  <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-full animate-spin-slow"></div>
                  
                  {/* Middle ring */}
                  <div className="absolute inset-8 border-4 border-purple-500/30 rounded-full animate-spin-slow-reverse"></div>
                  
                  {/* Inner ring */}
                  <div className="absolute inset-16 border-4 border-pink-500/30 rounded-full animate-spin-slow"></div>
                  
                  {/* Central element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:h-24 md:w-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl rotate-45 shadow-xl shadow-indigo-500/20 flex items-center justify-center">
                      <Code size={40} className="text-white -rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={24} />
      </div>
      
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 30px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 15s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin 15s linear infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default Hero;
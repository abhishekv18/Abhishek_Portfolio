
import React from 'react';
import { 
  FaGraduationCap, 
  FaTrophy, 
  FaCode, 
  FaDownload, 
  FaLaptopCode,
  FaServer,
  FaTools,
  FaTerminal,
  FaBriefcase,
  FaUserTie,
  FaHandshake
} from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-indigo-950 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 text-white relative inline-block">
            Resume
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-indigo-500"></span>
          </h2>
          <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">
            A comprehensive overview of my education, experience, skills, and achievements.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {/* Education Section */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
            <div className="h-2 bg-indigo-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gray-900 rounded-lg mr-4 border border-indigo-500">
                  <FaGraduationCap className="text-2xl text-indigo-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-2 border-gray-700 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-xl text-white">B.Tech in Computer Science</h4>
                  <p className="text-gray-300 mt-1">KIET Group of Institutions</p>
                  <p className="text-gray-500 text-sm mt-1">Abdul Kalam Technical University | 2023 - 2027</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Specializing in Full Stack Development with coursework in Data Structures, Algorithms, and Web Technologies.
                  </p>
                </div>
                
                <div className="border-l-2 border-gray-700 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-xl text-white">Intermediate</h4>
                  <p className="text-gray-300 mt-1">S.D Pandey Memorial Inter College</p>
                  <p className="text-gray-500 text-sm mt-1">2019 - 2021 | 92.4%</p>
                </div>

                <div className="border-l-2 border-gray-700 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-xl text-white">High School</h4>
                  <p className="text-gray-300 mt-1">Ryan International School</p>
                  <p className="text-gray-500 text-sm mt-1">2017 - 2019 | 90.2%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
            <div className="h-2 bg-indigo-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gray-900 rounded-lg mr-4 border border-indigo-500">
                  <FaBriefcase className="text-2xl text-indigo-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Experience</h3>
              </div>
              
              <div className="space-y-8">
                {/* Internships */}
                <div>
                  <div className="flex items-center mb-4">
                    <FaUserTie className="text-indigo-400 mr-2" />
                    <h4 className="font-bold text-lg text-white">Internships</h4>
                  </div>
                  
                  <div className="space-y-6 pl-8">
                    <div className="border-l-2 border-gray-700 pl-5 relative">
                      <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                      <h4 className="font-bold text-lg text-white">Web Developer Intern</h4>
                      <p className="text-gray-400">Adiyogi Foundation</p>
                     
                      <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
                        <li>Developed and maintained the organization's website with 10K+ monthly visitors</li>
                        <li>Implemented donation tracking system increasing contributions by 25%</li>
                        <li>Optimized site performance reducing load time by 40%</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-gray-700 pl-5 relative">
                      <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                      <h4 className="font-bold text-lg text-white">Frontend Developer Intern</h4>
                      <p className="text-gray-400">Ashwamedh Foundation</p>
                   
                      <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
                        <li>Built responsive interfaces for volunteer management system</li>
                        <li>Integrated payment gateway for donations processing</li>
                        <li>Collaborated with designers to implement UI/UX improvements</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Freelance */}
                <div>
                  <div className="flex items-center mb-4">
                    <FaHandshake className="text-indigo-400 mr-2" />
                    <h4 className="font-bold text-lg text-white">Freelance Projects</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 pl-8">
                    <div className="border-l-2 border-gray-700 pl-5 relative">
                      <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                      <h4 className="font-bold text-lg text-white">Pindi Chap Junction</h4>
                      <p className="text-gray-400">Food Delivery Platform</p>
                    
                      <p className="text-gray-400 text-sm mt-2">
                        Developed full-stack food ordering system with real-time tracking and payment integration.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-gray-700 pl-5 relative">
                      <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                      <h4 className="font-bold text-lg text-white">International Laity Association</h4>
                      <p className="text-gray-400">Spiritual Organization</p>
                  
                      <p className="text-gray-400 text-sm mt-2">
                        Created multilingual website with event management and membership system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
            <div className="h-2 bg-indigo-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gray-900 rounded-lg mr-4 border border-indigo-500">
                  <FaCode className="text-2xl text-indigo-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Skills</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-3">
                    <FaLaptopCode className="text-indigo-400 mr-3" />
                    <h4 className="font-bold text-lg text-white">Frontend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'TypeScript', 'Next.js'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-300 hover:bg-indigo-900/30 hover:border-indigo-500 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <FaServer className="text-indigo-400 mr-3" />
                    <h4 className="font-bold text-lg text-white">Backend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs', 'JWT Auth'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-300 hover:bg-indigo-900/30 hover:border-indigo-500 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <FaTools className="text-indigo-400 mr-3" />
                    <h4 className="font-bold text-lg text-white">Tools & Other</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Git', 'GitHub', 'Socket.io', 'Stripe', 'PayPal', 'Cloudinary', 'Postman'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-300 hover:bg-indigo-900/30 hover:border-indigo-500 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mt-12 bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
          <div className="h-2 bg-indigo-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gray-900 rounded-lg mr-4 border border-indigo-500">
                <FaTrophy className="text-2xl text-indigo-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Activities & Achievements</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-2 border-gray-700 pl-5 relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                <h4 className="font-bold text-lg text-white">Nature First Hackathon</h4>
                <p className="text-gray-400 text-sm">GL Bajaj Institute | 2024</p>
                <p className="text-gray-500 text-sm mt-2">
                  Developed an environmental sustainability solution that ranked among Top 12 teams out of 150+ participants.
                </p>
              </div>
              
              <div className="border-l-2 border-gray-700 pl-5 relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                <h4 className="font-bold text-lg text-white">TechSpirit Hackathon</h4>
                <p className="text-gray-400 text-sm">Graphic Era University | 2025</p>
                <p className="text-gray-500 text-sm mt-2">
                  Built an AI-powered education platform in 24 hours that won special mention from judges.
                </p>
              </div>

              <div className="border-l-2 border-gray-700 pl-5 relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                <h4 className="font-bold text-lg text-white">Hackspire 2024</h4>
                <p className="text-gray-400 text-sm">Indraprastha Engineering College | 2024</p>
                <p className="text-gray-500 text-sm mt-2">
                  Created a water footprint calculator that qualified for final round among 200+ teams.
                </p>
              </div>
              
              <div className="border-l-2 border-gray-700 pl-5 relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                <h4 className="font-bold text-lg text-white">Google O'Clock Hackathon</h4>
                <p className="text-gray-400 text-sm">IILM College | 2025</p>
                <p className="text-gray-500 text-sm mt-2">
                  Implemented cloud-based analytics dashboard that processed real-time data streams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-16 text-center">
          <a
            href="./src/assets/resume.pdf"
            download
            className="group inline-flex items-center px-8 py-3 bg-gray-900 text-white font-medium rounded-md border border-indigo-500 hover:bg-indigo-900 transition-colors duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <FaDownload className="mr-3 opacity-80 group-hover:animate-bounce" />
            Download Full Resume
            <span className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity">(PDF, 1.2MB)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
import React from 'react';
import { 
  FaGraduationCap, 
  FaTrophy, 
  FaCode, 
  FaDownload, 
  FaLaptopCode,
  FaServer,
  FaTools,
  FaTerminal
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
            A snapshot of my journey, skills, and achievements. Let's build something amazing together!
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
                </div>
                
                <div className="border-l-2 border-gray-700 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-xl text-white">Intermediate</h4>
                  <p className="text-gray-300 mt-1">S.D Pandey Memorial Inter College</p>
                  <p className="text-gray-500 text-sm mt-1">2019 - 2021</p>
                </div>

                <div className="border-l-2 border-gray-700 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-xl text-white">High School</h4>
                  <p className="text-gray-300 mt-1">Ryan International School</p>
                  <p className="text-gray-500 text-sm mt-1">2017 - 2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activities Section */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
            <div className="h-2 bg-indigo-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gray-900 rounded-lg mr-4 border border-indigo-500">
                  <FaTrophy className="text-2xl text-indigo-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Activities</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-gray-700 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-lg text-white">Nature First Hackathon</h4>
                  <p className="text-gray-400 text-sm">GL Bajaj Institute | 2024</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Ranked among the Top 12 teams with an innovative environmental sustainability solution.
                  </p>
                </div>
                
                <div className="border-l-2 border-gray-700 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-lg text-white">TechSpirit Hackathon</h4>
                  <p className="text-gray-400 text-sm">Graphic Era University | 2025</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Collaborated in a 24-hour hackathon developing innovative solutions for real-world challenges.
                  </p>
                </div>

                <div className="border-l-2 border-gray-700 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-lg text-white">Hackspire 2024</h4>
                  <p className="text-gray-400 text-sm">Indraprastha Engineering College | 2024</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Qualified for Round 2 in a 30-hour hackathon, developing a water footprint calculator.
                  </p>
                </div>
                
                <div className="border-l-2 border-gray-700 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-lg text-white">Google O'Clock Hackathon</h4>
                  <p className="text-gray-400 text-sm">IILM College | 2025</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Built a smart application leveraging cloud APIs and real-time data analysis.
                  </p>
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
                    {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-300">
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
                    {['Node.js', 'Express', 'MongoDB'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <FaTools className="text-indigo-400 mr-3" />
                    <h4 className="font-bold text-lg text-white">Other Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Git', 'Socket.io', 'EmailJS', 'C++'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-16 text-center">
          <a
            href="./src/assets/resume.pdf"
            download
            className="group inline-flex items-center px-8 py-3 bg-gray-900 text-white font-medium rounded-md border border-indigo-500 hover:bg-indigo-900 transition-colors duration-300"
          >
            <FaDownload className="mr-3 opacity-80" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
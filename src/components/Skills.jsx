
import React from 'react';
import { useState } from 'react';
import { 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Hexagon, 
  FileJson, 
  ShieldCheck, 
  Server, 
  Paintbrush, 
  Terminal, 
  Bot, 
  Github, 
  Mail, 
  LayoutGrid,
  Code,
  MessageCircle,
  BlocksIcon
} from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-gradient-to-br from-pink-500 to-orange-400",
      hoverColor: "hover:from-pink-600 hover:to-orange-500",
      icon: <Globe size={28} />,
      skills: [
        { name: "HTML5", icon: <Code2 size={32} />, proficiency: 95 },
        { name: "CSS3", icon: <Paintbrush size={32} />, proficiency: 90 },
        { name: "JavaScript", icon: <FileJson size={32} />, proficiency: 92 },
        { name: "TypeScript", icon: <Hexagon size={32} />, proficiency: 88 },
        { name: "React", icon: <LayoutGrid size={32} />, proficiency: 90 },
        { name: "Tailwind", icon: <Cpu size={32} />, proficiency: 85 }
      ]
    },
    {
      title: "Backend",
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
      hoverColor: "hover:from-cyan-600 hover:to-blue-600",
      icon: <Server size={28} />,
      skills: [
        { name: "Node.js", icon: <Terminal size={32} />, proficiency: 85 },
        { name: "Express", icon: <Bot size={32} />, proficiency: 82 },
        { name: "MongoDB", icon: <Database size={32} />, proficiency: 80 }
      ]
    },
    {
      title: "Other Skills",
      color: "bg-gradient-to-br from-violet-500 to-purple-500",
      hoverColor: "hover:from-violet-600 hover:to-purple-600",
      icon: <ShieldCheck size={28} />,
      skills: [
        { name: "Git", icon: <Github size={32} />, proficiency: 88 },
        { name: "APIs", icon: <Terminal size={32} />, proficiency: 85 },
        { name: "C++", icon: <Cpu size={32} />, proficiency: 75 },
        { name: "DSA", icon: <Code size={32} />, proficiency: 90 },
        { name: "Communication", icon: <MessageCircle size={32} />, proficiency: 90 },
        { name: "BlockChain", icon: <BlocksIcon size={32} />, proficiency: 30 },
       
      ]
    }
  ];
  
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my technical abilities and proficiency in various technologies
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid gap-12 md:grid-cols-3 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`relative rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${category.color} shadow-xl`}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                <div className="text-purple-700">{category.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mt-4 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex flex-col items-center group"
                    onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm mb-2 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                      {skill.icon}
                    </div>
                    <span className="text-white text-sm font-medium opacity-80 group-hover:opacity-100">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Proficiency Bars */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          
          <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-12">
            {skillCategories.flatMap(category => 
              category.skills.map((skill, idx) => (
                <div key={`${category.title}-${idx}`} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white flex items-center gap-2">
                      <span className="text-sm opacity-70">{skill.icon}</span> 
                      {skill.name}
                    </span>
                    <span className="text-white font-mono">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        hoveredSkill === `${category.title}-${skill.name}` 
                          ? "bg-white" 
                          : category.color.replace("bg-", "bg-")
                      } transition-all duration-500 ease-out`}
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React, { useState } from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import Footer from "./Foooter";

const Projects = () => {

  const allProjects = [
    {
      title: "AI Chatbot",
      desc: "Advanced NLP chatbot with context memory and real-time responses.",
      tech: ["React", "Node", "AI"],
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    {
      title: "Weather App",
      desc: "Live weather tracking with API integration and location detection.",
      tech: ["API", "JS", "UI"],
      img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b"
    },
    {
      title: "Portfolio",
      desc: "Modern developer portfolio with animations and responsive design.",
      tech: ["React", "Tailwind"],
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "E-Commerce",
      desc: "Full-stack shopping platform with cart & payment integration.",
      tech: ["MongoDB", "Express"],
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
    },
    {
      title: "Code Editor",
      desc: "Online coding IDE with syntax highlighting and live preview.",
      tech: ["JS", "Editor"],
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
    },
    {
      title: "AI Image Gen",
      desc: "Generate high-quality images using AI models.",
      tech: ["AI", "API"],
      img: "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? allProjects
    : allProjects.slice(0, 3);

  return (
    <>
      <Nav />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-[#020617] text-white py-20 px-6 overflow-hidden min-h-screen"
      >

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/20 blur-[140px] rounded-full animate-pulse"></div>

        {/* Grid Glow */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 relative z-10"
        >

          <motion.h1
            animate={{
              textShadow: [
                "0px 0px 10px #06b6d4",
                "0px 0px 20px #3b82f6",
                "0px 0px 10px #06b6d4"
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: 3
            }}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent"
          >
            Our Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg"
          >
            Explore futuristic applications built using modern technologies 🚀
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto relative z-10">

          {visibleProjects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.03
              }}
              className="w-[320px] sm:w-[350px] bg-[#0f172a]/70 backdrop-blur-2xl rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-500 group"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <motion.img
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  src={project.img}
                  alt=""
                  className="w-full h-56 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-500">

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 bg-cyan-500 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Live Demo
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Source Code
                  </motion.button>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>

              </div>

              {/* Content */}
              <div className="p-6">

                <motion.h2
                  whileHover={{ x: 5 }}
                  className="text-2xl font-bold text-cyan-400"
                >
                  {project.title}
                </motion.h2>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((t, i) => (

                    <motion.span
                      whileHover={{
                        scale: 1.08,
                        y: -2
                      }}
                      key={i}
                      className="text-xs bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full text-cyan-300 cursor-pointer"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 10 }}
                  className="mt-6 text-sm text-cyan-400 hover:text-white cursor-pointer"
                >
                  View Details →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 relative z-10"
        >

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 40px rgb(6,182,212)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 px-10 py-4 rounded-full font-bold text-lg transition-all duration-500"
          >
            {showAll ? "Show Less" : "Explore More Projects"}
          </motion.button>
        </motion.div>

      </motion.section>
      <Footer/>
    </>
  );
};

export default Projects
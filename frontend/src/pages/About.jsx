import React from "react";
import aboutImage from "../assets/aboutSection.png";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import Footer from "./Foooter";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate()

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 80
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <>
      <Nav />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-[#020617] text-white py-20 px-6 overflow-hidden min-h-screen"
      >

        {/* Animated Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full animate-pulse"></div>

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
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

              className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent"
            >
              About Our Code Sphere
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}

              className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base"
            >
              We are a futuristic community of passionate developers,
              designers, and tech enthusiasts who love to build,
              innovate, and grow together. From beginners to advanced
              coders, everyone is welcome to explore, learn, and create
              amazing projects.
            </motion.p>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-5 mb-8">

              {[
                { title: "🚀 Projects", desc: "Build real-world apps" },
                { title: "👨‍💻 Coding", desc: "Improve problem solving" },
                { title: "🤝 Community", desc: "Learn with others" },
                { title: "🏆 Hackathons", desc: "Compete & win" },
              ].map((item, i) => (

                <motion.div
                  key={i}

                  variants={fadeUp}

                  initial="hidden"

                  whileInView="visible"

                  viewport={{ once: true }}

                  whileHover={{
                    y: -10,
                    scale: 1.03
                  }}

                  className="bg-[#0f172a]/70 backdrop-blur-xl p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500"
                >

                  <h3 className="text-cyan-400 font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">
                    {item.desc}
                  </p>

                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.button

              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 30px rgb(6,182,212)"
              }}

              whileTap={{
                scale: 0.95
              }}

             onClick={()=>
             {
              navigate("/signup")
             }
             } className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 cursor-pointer "
            >
              Join Our Club
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div

            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}

            className="relative w-full"
          >

            <motion.img

              animate={{
                y: [0, -20, 0]
              }}

              transition={{
                repeat: Infinity,
                duration: 4
              }}

              src={aboutImage}

              alt="coding"

              className="w-full h-[300px] sm:h-[420px] md:h-[500px] object-fill rounded-3xl shadow-[0_0_40px_rgba(6,182,212,0.3)] border border-cyan-500/20"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-3xl"></div>

          </motion.div>

        </div>

        {/* STATS */}
        <div className="max-w-7xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">

          {[
            { num: "100+", text: "Active Members" },
            { num: "50+", text: "Projects Built" },
            { num: "20+", text: "Hackathons" },
            { num: "10+", text: "Mentors" },
          ].map((stat, i) => (

            <motion.div
              key={i}

              initial={{ opacity: 0, y: 60 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.7,
                delay: i * 0.15
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -10,
                scale: 1.05
              }}

              className="bg-[#0f172a]/70 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all duration-500"
            >

              <motion.h2

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

                className="text-3xl sm:text-4xl font-black text-cyan-400"
              >
                {stat.num}
              </motion.h2>

              <p className="text-gray-400 text-sm mt-3">
                {stat.text}
              </p>

            </motion.div>
          ))}
        </div>

      </motion.section>
      <Footer/>
    </>
  );
};

export default About
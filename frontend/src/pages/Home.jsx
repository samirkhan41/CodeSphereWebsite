import React from 'react';
import heroImage from "../assets/HeroImage.png";
import { useNavigate } from 'react-router-dom';
import aboutCodeSphere from "../assets/momentsImage1.jpg";
import testimonialImg from "../assets/testimonial.jpeg";
import moment1 from "../assets/momentsImage1.jpg";
import moment2 from "../assets/momentsImage2.jpg";
import moment3 from "../assets/momentsImage3.jpg";
import Nav from '../components/Nav';
import { motion } from 'framer-motion';
import Footer from './Foooter';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <Nav />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[#020617] text-white min-h-screen font-sans px-4 sm:px-6 md:px-10 py-6 overflow-hidden relative"
      >

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-3xl border border-slate-800 py-12 sm:py-16 px-6 md:px-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-10 backdrop-blur-xl bg-white/5"
        >

          {/* Left */}
          <div className="flex-1 text-center md:text-left z-10">

            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              Code is not just <br />
              instructions — it’s the <br />
              art of turning <br />
              imagination into reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-lg mb-8"
            >
              Code. Create. Repeat.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              {/* Explore Projects */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_40px_rgba(6,182,212,0.6)] text-black px-6 py-3 rounded-xl font-semibold cursor-pointer"
              >
                Explore Projects
              </motion.button>

              {/* Join Us */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 px-6 py-3 rounded-xl font-semibold cursor-pointer"
              >
                Join Us
              </motion.button>

            </div>
          </div>

          {/* Right Image */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="flex-1 flex justify-center md:justify-end relative"
          >

            <img
              src={heroImage}
              alt="AI"
              className="w-[300px] sm:w-[500px] md:w-[700px] object-contain"
            />

            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20"></div>

          </motion.div>
        </motion.section>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">

          {/* About */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex-1 bg-[#0f172a] border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-500"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 border-b border-slate-700 pb-2">
                About CodeSphere
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We are a community of passionate developers, innovators and problem solvers.
              </p>

              <button
                onClick={() => navigate("/about")}
                className="text-cyan-400 font-semibold hover:underline cursor-pointer"
              >
                Know More →
              </button>
            </div>

            <img
              src={aboutCodeSphere}
              alt="About"
              className="w-full md:w-48 h-32 object-cover rounded-xl hover:scale-105 transition-all duration-500"
            />
          </motion.div>

          {/* Projects */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex-[1.5] bg-[#0f172a] border border-slate-800 p-6 sm:p-8 rounded-2xl hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-500"
          >

            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: "🤖", title: "AI Chatbot", tech: "Html,Css,Js" },
                { icon: "💻", title: "Portfolio Hub", tech: "React" },
                { icon: "📝", title: "Code Editor", tech: "React" }
              ].map((proj, i) => (

                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  key={i}
                  className="flex-1 min-w-[140px] bg-slate-900/50 border border-slate-800 p-4 sm:p-6 rounded-xl text-center"
                >

                  <div className="text-3xl mb-2">{proj.icon}</div>

                  <h3 className="font-bold">{proj.title}</h3>

                  <p className="text-xs text-slate-500">{proj.tech}</p>

                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-cyan-600 p-6 sm:p-10 rounded-3xl mb-16 flex flex-col md:flex-row gap-6 items-center justify-between text-black text-center md:text-left shadow-[0_0_60px_rgba(6,182,212,0.4)]"
        >

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl text-white animate-bounce">
              🚀
            </div>

            <div>
              <h2 className="text-2xl font-black">
                Ready to Build Something Amazing?
              </h2>

              <p className="text-base opacity-80">
                Join CodeSphere and be a part of the future.
              </p>
            </div>
          </div>

         <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}

  style={{ cursor: "pointer" }}
  className="relative z-50 bg-black text-white px-10 py-4 rounded-xl font-bold"
>
  Join the Club →
</motion.button>

        </motion.section>

      </motion.div>

      <Footer />
    </>
  );
};

export default Home;
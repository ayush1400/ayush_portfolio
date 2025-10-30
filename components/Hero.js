'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm <span className="text-purple-400">Ayush Kumar Yadav</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Full Stack Developer | UI/UX Enthusiast
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          I create beautiful, responsive web applications with modern technologies.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" className="text-gray-300 hover:text-purple-400">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com" className="text-gray-300 hover:text-purple-400">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:your@email.com" className="text-gray-300 hover:text-purple-400">
            <FaEnvelope size={32} />
          </a>
        </div>

        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full"
        >
          Get In Touch
        </button>
      </motion.div>
    </section>
  );
}
'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Here are some of my recent works
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length === 0 ? (
              <div className="col-span-full text-center text-gray-400">
                No projects yet. Add some from the Django admin panel!
              </div>
            ) : (
              projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  {project.image && (
                    <img
                      src={`http://localhost:8000${project.image}`}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.error('Failed to load image:', project.image);
                      }}
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.split(',').map((tech, i) => (
                        <span
                          key={i}
                          className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.github_link && (
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                      {project.live_link && (
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                          <FaExternalLinkAlt size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
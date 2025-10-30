'use client';
import { motion } from 'framer-motion';

export default function Experience({ experiences }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-center mb-12">
            My professional journey
          </p>

          {experiences.length === 0 ? (
            <div className="text-center text-gray-400">
              No experience yet. Add some from the Django admin panel!
            </div>
          ) : (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <p className="text-purple-400 text-lg">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 mt-2 md:mt-0">
                      {formatDate(exp.start_date)} - {exp.current ? 'Present' : formatDate(exp.end_date)}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
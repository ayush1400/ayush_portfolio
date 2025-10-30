'use client';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import axios from 'axios';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const API_URL = 'http://localhost:8000/api';
      
      const [projectsRes, skillsRes, experiencesRes] = await Promise.all([
        axios.get(`${API_URL}/projects/`),
        axios.get(`${API_URL}/skills/`),
        axios.get(`${API_URL}/experiences/`)
      ]);

      setProjects(projectsRes.data);
      setSkills(skillsRes.data);
      setExperiences(experiencesRes.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navbar />
      <Hero />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Contact />
    </main>
  );
}
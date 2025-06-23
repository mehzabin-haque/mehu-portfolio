'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProfessionalPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['about', 'experience', 'education', 'projects', 'publications', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Profile data
  const profile = {
    name: "Mehzabin Haque",
    title: "Lecturer in Software Engineering",
    email: "bsse1233@iit.du.ac.bd",
    phone: "+880 1894636853",
    location: "Dhaka, Bangladesh",
    linkedin: "https://www.linkedin.com/in/mehzabin-haque/",
    github: "https://github.com/mehzabin-haque",
    about: "A passionate software engineer and researcher with experience in cutting-edge technologies and academic research. Committed to fostering knowledge and skills in software engineering, blockchain, and AI. Adept at engaging students through innovative teaching and research methodologies.",
    skills: [
      { category: "Programming Languages", items: ["TypeScript", "Java", "Python", "C", "C++"] },
      { category: "Frameworks & Libraries", items: ["Next.js", "React.js", "Prisma", "Flutter", "Tailwind CSS"] },
      { category: "Database", items: ["Firebase", "MongoDB"] },
      { category: "UI/UX Design Tools", items: ["Figma", "Adobe XD", "Canva"] },
      { category: "Tools", items: ["GitHub", "Postman", "Jira", "Asana"] },
      { category: "Add-ons", items: ["Design Pattern", "Refactoring", "REST API", "JUnit Testing"] }
    ]
  };

  // Experience data
  const experiences = [
    {
      position: "Lecturer, Software Engineering",
      organization: "Daffodil International University",
      duration: "May 2025 – Present",
      description: [
        "Conducted lectures and labs on Computer Fundamentals, ML-Driven Data Analysis II, and Communication & Statistical Analysis."
      ]
    },
    {
      position: "Research Assistant (Microsoft Funded)",
      organization: "Supervised by Dr. Ishtiaque Ahmed, University of Toronto",
      duration: "Jul 2024 – Present",
      description: [
        "Led analysis of Bangladesh’s AI readiness, focusing on infrastructure, skills, data, and policy gaps.",
        "Developed REAPS, an AI policy recommendation tool using national indicators and global best practices.",
        "Researched Responsible AI (RAI) frameworks and global policies to identify localization strategies for the Global South.",
        "Contributed to Matra initiative, addressing sociotechnical challenges in inclusive AI policy design.",
        "Engaged in publication work, including literature review, data analysis, and writing for journals and conferences."
      ]
    },
    {
      position: "Software Engineer Intern",
      organization: "a2i – Aspire to Innovate",
      duration: "Jan 2024 – Jun 2024",
      description: [
        "Interned at ekShop Network, contributing to innovative projects and solutions"
      ]
    },
    {
      position: "Summer Research Intern",
      organization: "University of Illinois Urbana-Champaign (UIUC)",
      duration: "Jun 2023 – Jan 2024",
      description: [
        "Participated in a global, collaborative research program under the guidance of renowned faculty Prof. Darko Marinov at UIUC.",
        "Conducted experimental research in software engineering, exploring new ideas and innovative approaches to cross-language interoperability.",
        "Engaged in hands-on coding, empirical analysis, and tool evaluation to validate research hypotheses.",
        "Contributed to the peer-reviewed paper “GlueTest: Testing Code Translation via Language Interoperability”, later accepted at IEEE ICSME 2024.",
        "Collaborated with a diverse, international team of researchers, which enriched my ability to think critically, generate original ideas, and communicate effectively in a global academic environment."
      ]
    }
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Institute of Information Technology (IIT), DU",
      duration: "Jan 2020 – Jan 2025",
      details: "CGPA: 3.84/4.00",
      achievements: [
        "Published research paper at ICSME 2024 conference",
        "Multiple hackathon winner in blockchain and UI/UX categories"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka City College (DCC)",
      duration: "2019",
      details: "GPA: 5.00/5.00",
      achievements: [
        "Received High School Academic Award for exceptional scholastic accomplishments"
      ]
    },
    {
      degree: "Secondary School Certificate (HSC)",
      institution: "Udayan Uchcha Madhyamik Bidyalaya (UB)",
      duration: "2017",
      details: "GPA: 5.00/5.00",
      achievements: [
        "Received many prizes in various academic and extracurricular activities"
      ]
    }
  ];

  // Projects data
  const projects = [
    {
      title: "DigiBox Cloud",
      year: "2024",
      description: "Smart locker system for secure package pick-up with SMS/email alerts",
      technologies: ["React", "Laravel"],
      category: "Professional"
    },
    {
      title: "Recommendation Engine for AI Policy",
      year: "2024",
      description: "AI-driven system for adaptive AI policy recommendations",
      technologies: ["Next.js", "Python"],
      category: "Research"
    },
    {
      title: "Proof of Democracy (EtherCast)",
      year: "2023",
      description: "ZKP-secured blockchain-based e-voting system",
      technologies: ["Next.js", "Solidity", "MongoDB"],
      category: "Academic"
    },
    {
      title: "BUS Koi",
      year: "2023",
      description: "Dhaka University mobile app for real-time bus tracking",
      technologies: ["Flutter", "Firebase"],
      category: "Academic"
    }
  ];

  // Awards data
  const awards = [
    {
      title: "Champion, ITVerse 2.0 Hackathon (Blockchain)",
      date: "Nov 2023"
    },
    {
      title: "Champion, ITVerse 2.0 UI/UX Explorer Contest",
      date: "Nov 2023"
    },
    {
      title: "1st Runner-up, ITVerse 2.0 TechTales Contest",
      date: "Nov 2023"
    },
    {
      title: "Finalist, BCOLBD 2023",
      date: "Jul 2023"
    }
  ];

  // Publications data
  const publications = [
    {
      title: "GlueTest: Testing Code Translation via Language Interoperability",
      conference: "International Conference on Software Maintenance and Evolution (ICSME)",
      year: "2024",
      role: "Co-author",
      link: "https://conf.researchr.org/details/icsme-2024/icsme-2024-new-ideas-and-emerging-results-track/10/GlueTest-Testing-Code-Translation-via-Language-Interoperability" 
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3 backdrop-blur-sm bg-opacity-90' : 'bg-transparent py-5'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Name with animation */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                Mehzabin Haque
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {['about', 'experience', 'education', 'projects', 'publications', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-all relative ${activeSection === item
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-500'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeSection === item && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      layoutId="underline"
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-xl rounded-xl mt-4 p-4 absolute left-4 right-4 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col space-y-3">
              {['about', 'experience', 'education', 'projects', 'publications', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-left py-3 px-4 rounded-xl font-medium transition-all ${activeSection === item
                    ? 'bg-blue-50 text-blue-600 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Main Content */}
      <main className="pt-24 relative z-10">
        {/* Hero Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <motion.div
                  className="md:w-1/2 mb-10 md:mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="block">Mehzabin Haque</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                      Lecturer & Researcher
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-gray-700 mb-8 leading-relaxed max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {profile.about}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </motion.a>

                    <motion.a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </motion.a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="md:w-1/2 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-700 w-72 h-72 md:w-80 md:h-80 rounded-2xl shadow-xl overflow-hidden">
                      {/* Placeholder for profile image */}
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                      <Image
                        src="/profile.png"
                        alt="Mehzabin Haque"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                      />
                    </div>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 bg-yellow-400 w-16 h-16 rounded-full"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 bg-blue-400 w-12 h-12 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 pb-2 border-b-4 border-blue-600 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Professional Experience
              </motion.h2>

              <motion.div
                className="mt-12 space-y-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-blue-600 before:rounded-full before:ring-4 before:ring-blue-100"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                          <h4 className="text-lg text-blue-600 mt-1">{exp.organization}</h4>
                        </div>
                        <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {exp.duration}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 pb-2 border-b-4 border-blue-600 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Education
              </motion.h2>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                          <h4 className="text-lg text-blue-600 mt-1">{edu.institution}</h4>
                        </div>
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {edu.details}
                        </div>
                      </div>
                      <div className="mt-4 text-gray-600">{edu.duration}</div>

                      <div className="mt-6">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <span className="mr-2 bg-blue-100 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">✓</span>
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 pb-2 border-b-4 border-blue-600 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Projects
              </motion.h2>

              <motion.div
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${project.category === 'Professional' ? 'bg-blue-100 text-blue-800' :
                            project.category === 'Research' ? 'bg-purple-100 text-purple-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                            {project.category}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        </div>
                        <span className="text-gray-500 text-sm">{project.year}</span>
                      </div>
                      <p className="text-gray-700 mt-3">{project.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Publications & Awards Section */}
        <section id="publications" className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Publications */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 pb-2 border-b-4 border-blue-600 inline-block">
                    Publications
                  </h2>

                  <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg">
                    {publications.map((pub, index) => (
                      <motion.div
                        key={index}
                        className="mb-6 last:mb-0 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-bold text-gray-900 hover:underline"
                        >
                          {pub.title}
                        </a>
                        <p className="text-blue-600 mt-2">{pub.conference}</p>
                        <div className="flex justify-between text-gray-600 mt-3">
                          <span>{pub.year}</span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{pub.role}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Awards */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 pb-2 border-b-4 border-blue-600 inline-block">
                    Awards & Honors
                  </h2>

                  <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg">
                    <ul className="space-y-4">
                      {awards.map((award, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all"
                          whileHover={{ x: 5 }}
                        >
                          <div className="bg-yellow-100 text-yellow-800 rounded-full p-2 mr-4 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{award.title}</h3>
                            <p className="text-gray-600">{award.date}</p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 pb-2 border-b-4 border-blue-600 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Technical Skills
              </motion.h2>

              <motion.div
                className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {profile.skills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 pb-2 border-b-4 border-blue-600 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Contact Me
              </motion.h2>

              <motion.div
                className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>
                    <p className="mb-8 opacity-90">
                      I'm open to collaborations, research opportunities, and academic positions.
                      Feel free to reach out to discuss how we can work together.
                    </p>

                    <div className="space-y-5">
                      <div className="flex items-start">
                        <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold">Email</h4>
                          <a href={`mailto:${profile.email}`} className="opacity-90 hover:opacity-100 transition">{profile.email}</a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold">Phone</h4>
                          <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="opacity-90 hover:opacity-100 transition">{profile.phone}</a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold">Location</h4>
                          <p className="opacity-90">{profile.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex space-x-4">
                      <motion.a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">References</h3>
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4 py-1">
                        <h4 className="font-bold text-gray-900">Dr. B M Mainul Hossain</h4>
                        <p className="text-gray-700">Professor, Institute of Information Technology, University of Dhaka</p>
                        <a href="mailto:mainul@iit.du.ac.bd" className="text-blue-600 hover:underline">mainul@iit.du.ac.bd</a>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4 py-1">
                        <h4 className="font-bold text-gray-900">Dr. Naushin Nower</h4>
                        <p className="text-gray-700">Professor, Institute of Information Technology, University of Dhaka</p>
                        <a href="mailto:naushin@iit.du.ac.bd" className="text-blue-600 hover:underline">naushin@iit.du.ac.bd</a>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4 py-1">
                        <h4 className="font-bold text-gray-900">Dr. Ahmedul Kabir</h4>
                        <p className="text-gray-700">Associate Professor, Institute of Information Technology, University of Dhaka</p>
                        <a href="mailto:kabir@iit.du.ac.bd" className="text-blue-600 hover:underline">kabir@iit.du.ac.bd</a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Mehzabin Haque. All rights reserved.</p>
          {/* <p className="mt-2 text-blue-200">Designed for BRAC University Lecturer Position</p> */}
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalPortfolio;
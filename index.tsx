import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- Placeholder Data ---
// Replace this with your actual data
const portfolioData = {
  name: "Alex Doe",
  title: "Full-Stack Developer & AI Enthusiast",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    drive: "https://drive.google.com"
  },
  skills: [
    { name: "JavaScript (ES6+)", description: "Expert in modern JavaScript, including asynchronous patterns." },
    { name: "React & Next.js", description: "Building scalable and performant web applications." },
    { name: "Node.js & Express", description: "Creating robust and secure server-side applications." },
    { name: "UI/UX Design", description: "Focus on user-centric design principles and wireframing." },
    { name: "Gemini API", description: "Integrating cutting-edge AI models into applications." },
    { name: "Cloud & DevOps", description: "Experience with AWS, Docker, and CI/CD pipelines." },
  ],
  certifications: [
    "Google Certified Professional Cloud Architect",
    "AWS Certified Solutions Architect - Associate",
    "Certified Kubernetes Application Developer (CKAD)"
  ],
  projects: [
    {
      title: "AI-Powered Content Summarizer",
      description: "A web application that uses the Gemini API to summarize long articles and documents, providing quick insights.",
      tags: ["React", "Node.js", "Gemini API", "Material UI"],
      liveUrl: "#",
      sourceUrl: "#",
      driveUrl: "#"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce website with product management, user authentication, and a Stripe payment integration.",
      tags: ["Next.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      liveUrl: "#",
      sourceUrl: "#",
      driveUrl: "#"
    },
    {
      title: "Real-time Collaborative Whiteboard",
      description: "An interactive whiteboard application allowing multiple users to draw and brainstorm together in real-time using WebSockets.",
      tags: ["React", "Express", "Socket.IO", "Canvas API"],
      liveUrl: "#",
      sourceUrl: "#",
      driveUrl: "#"
    }
  ],
  jobHistory: [
    {
      company: "Tech Solutions Inc.",
      title: "Senior Frontend Engineer",
      date: "Jan 2021 - Present",
      description: "Leading the development of a new client-facing dashboard. Mentoring junior developers and improving code quality across the team."
    },
    {
      company: "Innovate Co.",
      title: "Software Developer",
      date: "Jun 2018 - Dec 2020",
      description: "Developed and maintained features for a large-scale SaaS application. Collaborated with product managers to define project requirements."
    }
  ],
  accomplishments: [
    "Speaker at DevConf 2023 on 'The Future of AI in Web Dev'.",
    "Winner of the 2022 Internal Company Hackathon.",
    "Contributed to several open-source projects."
  ],
  contactEmail: "alex.doe@email.com"
};

// --- Components ---

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["home", "skills", "projects", "resume", "accomplishments", "contact"];
  
  return (
    <header className="app-header">
      <div className="nav-container">
        <a href="#home" className="logo">{portfolioData.name}</a>
        <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            {navLinks.map(link => (
              <li key={link}><a href={`#${link}`} onClick={() => setMenuOpen(false)}>{link.charAt(0).toUpperCase() + link.slice(1)}</a></li>
            ))}
          </ul>
        </nav>
        <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="hero">
    <h1>{portfolioData.name}</h1>
    <p className="subtitle">{portfolioData.title}</p>
    <div className="social-links">
      <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
      <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
      <a href={portfolioData.socials.drive} target="_blank" rel="noopener noreferrer" aria-label="Google Drive"><i className="fab fa-google-drive"></i></a>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="container">
    <h2>Skills & Certifications</h2>
    <div className="grid skills-grid">
      {portfolioData.skills.map(skill => (
        <div className="card" key={skill.name}>
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
    <h3 style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '1.5rem' }}>Certifications</h3>
    <div className="grid skills-grid">
        {portfolioData.certifications.map(cert => (
            <div className="card" key={cert}>
                <p>{cert}</p>
            </div>
        ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="container">
    <h2>Projects</h2>
    <div className="grid projects-grid">
      {portfolioData.projects.map(project => (
        <div className="card project-card" key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
          </div>
          <div className="project-links">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
            <a href={project.driveUrl} target="_blank" rel="noopener noreferrer">Google Drive</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Resume = () => (
    <section id="resume" className="container">
        <h2>Job History</h2>
        <div className="timeline">
            {portfolioData.jobHistory.map((job, index) => (
                <div className="timeline-item" key={job.company}>
                    <div className="timeline-content">
                        <h3>{job.title}</h3>
                        <h4>{job.company}</h4>
                        <span className="date">{job.date}</span>
                        <p>{job.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const Accomplishments = () => (
    <section id="accomplishments" className="container">
        <h2>Accomplishments</h2>
        <div className="card">
            <ul>
                {portfolioData.accomplishments.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    </section>
);


const Contact = () => (
  <section id="contact" className="container">
    <div className="contact-content">
      <h2>Get In Touch</h2>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.</p>
      <a href={`mailto:${portfolioData.contactEmail}`}>{portfolioData.contactEmail}</a>
    </div>
  </section>
);

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        </div>
    </footer>
);


const App = () => {
    // A simple effect to add font awesome script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://kit.fontawesome.com/6e1f268156.js";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Accomplishments />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

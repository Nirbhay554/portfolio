import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Job Aggregator Platform',
    desc: 'Engineered a full-stack job aggregator consolidating listings from multiple sources with advanced filtering and seamless search capabilities.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://job-aggregator-eight.vercel.app',
  },
  {
    title: 'AI Mock Interview Platform',
    desc: 'Designed and built an AI-powered mock interview platform that conducts voice/text-based interviews, evaluates responses, and provides comprehensive feedback reports using Gemini AI.',
    tags: ['React.js', 'Tailwind CSS', 'Gemini AI', 'Node.js'],
    link: 'https://ai-mock-interview-liard-six.vercel.app/',
  },
  {
    title: 'School Website Development',
    desc: 'Designed and developed responsive, SEO-optimized websites for multiple regional schools with dynamic CMS features.',
    tags: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Node.js'],
    link: '#',
  }
];

const Projects = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Selected Works</h2>
      <div style={styles.grid}>
        {projects.map((proj, idx) => (
          <motion.a 
            href={proj.link} 
            target={proj.link !== '#' ? '_blank' : '_self'}
            rel="noreferrer"
            key={idx} 
            style={styles.card}
            whileHover={{ scale: 1.05, borderColor: 'var(--accent-color)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 style={styles.cardTitle}>{proj.title}</h3>
            <p style={styles.cardDesc}>{proj.desc}</p>
            <div style={styles.tags}>
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx} style={styles.tag}>{tag}</span>
              ))}
            </div>
            {proj.link !== '#' && (
              <div style={styles.linkButton}>View Live Project →</div>
            )}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 10%',
    backgroundColor: 'var(--secondary-bg)',
  },
  heading: {
    fontSize: '4rem',
    color: 'var(--accent-color)',
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    display: 'block',
    padding: '2rem',
    backgroundColor: '#0a0a0a',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    textDecoration: 'none',
    color: 'inherit',
    pointerEvents: 'auto', // Because of cursor none on body
    cursor: 'none',
  },
  cardTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  cardDesc: {
    fontSize: '1rem',
    color: '#888',
    lineHeight: 1.5,
    marginBottom: '1.5rem',
  },
  tags: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  tag: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#222',
    borderRadius: '20px',
    fontSize: '0.8rem',
    color: '#fff',
  },
  linkButton: {
    marginTop: '2rem',
    display: 'inline-block',
    padding: '0.5rem 1rem',
    border: '1px solid var(--accent-color)',
    color: 'var(--accent-color)',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '0.9rem',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  }
};

export default Projects;

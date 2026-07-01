import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={styles.container}>
      <motion.div 
        style={styles.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 style={styles.heading}>Let's Connect</h2>
        <p style={styles.text}>
          Have a project in mind, or just want to say hi? I'm always open to discussing new opportunities,
          creative ideas, or simply chatting about tech.
        </p>
        
        <div style={styles.socials}>
          <a href="https://wa.me/917526005523" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <FaWhatsapp size={32} />
          </a>
          <a href="https://github.com/Nirbhay554" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/nirbhay-singh-79b60132a" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <FaLinkedin size={32} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 10%',
    backgroundColor: 'var(--bg-color)',
    textAlign: 'center',
  },
  content: {
    maxWidth: '600px',
  },
  heading: {
    fontSize: '5rem',
    color: 'var(--text-color)',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    color: '#888',
    marginBottom: '3rem',
    lineHeight: 1.6,
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  iconLink: {
    color: 'var(--accent-color)',
    transition: 'transform 0.3s ease, color 0.3s ease',
    pointerEvents: 'auto', // Because of custom cursor
  }
};

export default Contact;

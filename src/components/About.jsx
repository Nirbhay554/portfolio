import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={styles.container}>
      <motion.div 
        style={styles.content}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.heading}>Who I Am</h2>
        <p style={styles.text}>
          I'm Nirbhay Singh, a B.Tech Electronics & Communication Engineering student at IIIT Dharwad (2024–2028),
          and a highly motivated Full Stack Web Developer.
        </p>
        <p style={styles.text}>
          I specialize in building scalable, responsive web applications using modern JavaScript frameworks and RESTful APIs. 
          With a strong foundation in Data Structures & Algorithms (125+ LeetCode solutions), I excel at delivering end-to-end 
          solutions—from UI/UX design to robust backend architecture.
        </p>
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
    padding: '0 10%',
    backgroundColor: 'var(--secondary-bg)',
  },
  content: {
    maxWidth: '800px',
  },
  heading: {
    fontSize: '4rem',
    color: 'var(--accent-color)',
    marginBottom: '2rem',
  },
  text: {
    fontSize: '1.5rem',
    lineHeight: 1.6,
    color: '#ccc',
    marginBottom: '1.5rem',
  }
};

export default About;

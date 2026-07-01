import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  // Row 1 (6 columns)
  { name: 'HTML', color: '#E34F26', dark: '#b03d1e' },
  { name: 'CSS', color: '#1572B6', dark: '#0f5485' },
  { name: 'JS', color: '#F7DF1E', dark: '#c2af15', textColor: '#000' },
  { name: 'REACT', color: '#61DAFB', dark: '#3eaecf', textColor: '#000' },
  { name: 'NEXT', color: '#ffffff', dark: '#b3b3b3', textColor: '#000' },
  { name: 'NODE', color: '#339933', dark: '#246b24' },

  // Row 2 (6 columns)
  { name: 'EXPRESS', color: '#aaaaaa', dark: '#777777', textColor: '#000' },
  { name: 'API', color: '#FF6C37', dark: '#b34922' },
  { name: 'JWT', color: '#D63AFF', dark: '#9c26bd' },
  { name: 'TAILWIND', color: '#38B2AC', dark: '#28807b' },
  { name: 'MONGO', color: '#47A248', dark: '#337534' },
  { name: 'MYSQL', color: '#4479A1', dark: '#2d536e' },

  // Row 3 (6 columns)
  { name: 'FIREBASE', color: '#FFCA28', dark: '#b38d1c', textColor: '#000' },
  { name: 'REDUX', color: '#764ABC', dark: '#503280' },
  { name: 'LINUX', color: '#FCC624', dark: '#b38d18', textColor: '#000' },
  { name: 'GIT', color: '#F05032', dark: '#ad3924' },
  { name: 'GITHUB', color: '#181717', dark: '#000000' },
  { name: 'POSTMAN', color: '#FF6C37', dark: '#b34922' },

  // Row 4 (5 keys, 1 is a double-width spacebar)
  { name: 'VERCEL', color: '#000000', dark: '#000000' },
  { name: 'WEBPACK', color: '#8DD6F9', dark: '#5fa1bf', textColor: '#000' },
  { name: 'PYTHON', color: '#3776AB', dark: '#255075', span: 2 }, // Spacebar
  { name: 'C++', color: '#00599C', dark: '#003a66' },
  { name: 'DSA', color: '#FF9800', dark: '#b36a00' },
];

const getBoardShadow = () => {
  let shadow = '';
  const depth = 25; // Good thick base, not overpowering
  for (let i = 1; i <= depth; i++) {
    shadow += `-${i * 0.4}px ${i}px 0 #050505, `;
  }
  shadow += `-${depth * 0.4}px ${depth + 10}px 30px rgba(0,0,0,0.9)`;
  return shadow;
};

const getKeyShadow = (darkColor, depth) => {
  // Heavy inset shadow makes the keys look like domed/rounded marshmallow keycaps
  let shadow = `inset 4px 4px 8px rgba(255,255,255,0.4), inset -4px -4px 8px rgba(0,0,0,0.3), `;
  if (depth > 0) {
    for (let i = 1; i <= depth; i++) {
      shadow += `-${i * 0.4}px ${i}px 0 ${darkColor}, `;
    }
    shadow += `-${depth * 0.4}px ${depth + 5}px 8px rgba(0,0,0,0.6)`;
  } else {
    shadow += `0 0 0 rgba(0,0,0,0)`;
  }
  return shadow;
};

const Skills = () => {
  return (
    <div style={styles.container}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tech Arsenal
      </motion.h2>

      <div style={styles.perspectiveContainer}>
        <motion.div
          style={styles.keyboard}
          initial={{ rotateX: 60, rotateZ: -25, rotateY: 5, y: 150, opacity: 0, scale: 0.8 }}
          whileInView={{ rotateX: 50, rotateZ: -20, rotateY: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              style={{
                ...styles.key,
                backgroundColor: skill.color,
                color: skill.textColor || '#fff',
                boxShadow: getKeyShadow(skill.dark, 12), // 12px keycap height
                gridColumn: skill.span ? `span ${skill.span}` : 'span 1', // Allows spacebar
                aspectRatio: skill.span ? 'auto' : '1 / 1', // Perfect squares for regular keys
                transform: 'translateY(0px) translateX(0px)',
              }}
              whileHover={{
                transform: 'translateY(6px) translateX(-2.4px)',
                boxShadow: getKeyShadow(skill.dark, 6),
                filter: 'brightness(1.1)'
              }}
              whileTap={{
                transform: 'translateY(12px) translateX(-4.8px)',
                boxShadow: getKeyShadow(skill.dark, 0)
              }}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
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
    alignItems: 'center',
    padding: '0 5%',
    backgroundColor: '#050505',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '3.5rem',
    color: 'var(--text-color)',
    marginBottom: '4rem',
    zIndex: 10,
  },
  perspectiveContainer: {
    perspective: '2000px',
    width: '100%',
    maxWidth: '750px', // Much smaller on screen, perfectly sized
    display: 'flex',
    justifyContent: 'center',
  },
  keyboard: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)', // 6 columns makes it a wide rectangle
    gap: '12px',
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: getBoardShadow(),
    borderTop: '2px solid #2a2a2a',
    borderLeft: '2px solid #2a2a2a',
    transformStyle: 'preserve-3d',
    width: '100%',
  },
  key: {
    borderRadius: '12px', // Domed rounded keys
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.85rem',
    fontWeight: '900',
    cursor: 'none',
    fontFamily: 'Outfit, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'all 0.1s ease',
    textAlign: 'center',
    padding: '5px',
    userSelect: 'none',
  }
};

export default Skills;

import React from 'react';

const Nav = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>N.</div>
      <div style={styles.links}>
        <a href="#hero" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '2rem 10%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    pointerEvents: 'none', // So it doesn't block cursor
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 900,
    fontFamily: 'Outfit, sans-serif',
    color: 'var(--accent-color)',
    pointerEvents: 'auto',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    pointerEvents: 'auto',
  },
  link: {
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    transition: 'color 0.3s ease',
  }
};

export default Nav;

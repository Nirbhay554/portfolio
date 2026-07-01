import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  const photo1 = "https://i.ibb.co/4g7MWYLH/Whats-App-Image-2026-06-23-at-12-19-30-AM-1.jpg"; // Night shot (Bottom)
  const photo2 = "https://i.ibb.co/RGHWyffj/Whats-App-Image-2026-06-23-at-12-19-30-AM.jpg"; // Mirror selfie (Top)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const strokes = [];
    
    // Resize canvas
    const resize = () => {
      const container = containerRef.current;
      if (!container) return;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = photo2;
    image.onload = () => {
      resize();
    };

    const renderLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (image.width) {
        const scale = Math.max(canvas.width / image.width, canvas.height / image.height);
        const x = (canvas.width / 2) - (image.width / 2) * scale;
        const y = (canvas.height / 2) - (image.height / 2) * scale;
        
        // Draw the top image freshly every frame
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1.0;
        ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
        
        // Punch out the holes
        ctx.globalCompositeOperation = 'destination-out';
        
        for (let i = strokes.length - 1; i >= 0; i--) {
          const stroke = strokes[i];
          
          const gradient = ctx.createRadialGradient(stroke.x, stroke.y, 0, stroke.x, stroke.y, stroke.radius);
          gradient.addColorStop(0, `rgba(0,0,0,${stroke.opacity})`);
          gradient.addColorStop(0.5, `rgba(0,0,0,${stroke.opacity * 0.8})`);
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(stroke.x, stroke.y, stroke.radius, 0, Math.PI * 2);
          ctx.fill();
          
          // Fade the stroke so it heals over ~1 second (1 / 60 ≈ 0.016)
          stroke.opacity -= 0.016;
          
          if (stroke.opacity <= 0) {
            strokes.splice(i, 1);
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('resize', resize);
    
    // Start render loop
    renderLoop();

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Add a stroke to the array when the mouse moves
      strokes.push({ x, y, radius: 100, opacity: 1.0 });
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      handlePointerMove(e.touches[0]);
    }, { passive: false });

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={styles.heroContainer}>
      <div style={styles.textContent}>
        <motion.h1 
          className="lightning-text"
          style={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          NIRBHAY
        </motion.h1>
        <motion.p 
          style={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ECE Student. Web Developer. Problem Solver.
        </motion.p>
      </div>

      <div ref={containerRef} style={styles.imageContainer}>
        {/* Bottom layer image */}
        <div style={{...styles.bottomImage, backgroundImage: `url(${photo1})`}}></div>
        {/* Top mask canvas */}
        <canvas ref={canvasRef} style={styles.canvas} />
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    padding: '0 10%',
    position: 'relative',
  },
  textContent: {
    flex: 1,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: '6rem',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    color: 'var(--text-color)',
    lineHeight: 1,
    textShadow: '0 0 20px var(--accent-glow)',
    WebkitTextStroke: '2px #0088ff',
  },
  tagline: {
    fontSize: '1.5rem',
    marginTop: '1rem',
    color: '#aaa',
  },
  imageContainer: {
    flex: 1,
    height: '70vh',
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
  },
  bottomImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'none', // Handled by global custom cursor
  }
};

export default Hero;

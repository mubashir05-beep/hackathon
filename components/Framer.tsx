import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Framer({ children }: any) {
  const ref = useRef<HTMLDivElement>(null); // Specify the type for the ref
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e:any) => {
    if (ref.current) { // Check if ref.current is not null before using getBoundingClientRect
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
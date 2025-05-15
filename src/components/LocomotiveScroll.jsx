// src/components/LocomotiveScroll.jsx
import { useEffect } from 'react';
import locomotiveScroll from 'locomotive-scroll';

const LocomotiveScrollWrapper = ({ children }) => {
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true, // Enable smooth scrolling
      multiplier: 1, // Scroll speed
      class: 'is-inview', // Class added when element comes into view
    });

    return () => scroll.destroy(); // Cleanup when the component unmounts
  }, []);

  return (
    <div data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveScrollWrapper;

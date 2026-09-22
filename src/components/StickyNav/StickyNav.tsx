import React, { useEffect, useState } from 'react';
import styles from './StickyNav.module.css';

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('photos');

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past hero gallery (~600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Very rudimentary scroll spy
      const scrollPos = window.scrollY + 100; // offset
      if (scrollPos > 3000) {
        setActiveSection('location');
      } else if (scrollPos > 2200) {
        setActiveSection('reviews');
      } else if (scrollPos > 1200) {
        setActiveSection('amenities');
      } else {
        setActiveSection('photos');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.stickyNavContainer}>
      <div className={`container ${styles.stickyNavInner}`}>
        <nav className={styles.navLinks}>
          <a href="#photos" className={activeSection === 'photos' ? styles.active : ''}>Photos</a>
          <a href="#amenities" className={activeSection === 'amenities' ? styles.active : ''}>Amenities</a>
          <a href="#reviews" className={activeSection === 'reviews' ? styles.active : ''}>Reviews</a>
          <a href="#location" className={activeSection === 'location' ? styles.active : ''}>Location</a>
        </nav>
        <div className={styles.bookingSummary}>
          <div className={styles.priceInfo}>
            <div className={styles.priceRow}>
              <span className={styles.price}>₹28,499</span>
              <span className={styles.night}>for 5 nights</span>
            </div>
            <div className={styles.rating}><span style={{fontSize: 10}}>★</span> 4.95 · 19 reviews</div>
          </div>
          <button className={styles.reserveButton}>Reserve</button>
        </div>
      </div>
    </div>
  );
}

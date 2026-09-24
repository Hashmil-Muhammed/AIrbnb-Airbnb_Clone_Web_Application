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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['photos', 'amenities', 'reviews', 'location'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScrollForPhotos = () => {
      if (window.scrollY < 800) {
        setActiveSection('photos');
      }
    };
    window.addEventListener('scroll', handleScrollForPhotos);

    return () => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScrollForPhotos);
    };
  }, []);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isVisible) return null;

  const handleReserveClick = () => {
    setToastMessage("You won't be charged yet");
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <>
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
            <div className={styles.rating}><span style={{fontSize: 10}}><b>★</b></span> 4.95 · 19 reviews</div>
          </div>
          <button className={styles.reserveButton} onClick={handleReserveClick}>Reserve</button>
        </div>
        </div>
      </div>
      {toastMessage && (
        <div className={styles.toast}>
          {toastMessage}
        </div>
      )}
    </>
  );
}

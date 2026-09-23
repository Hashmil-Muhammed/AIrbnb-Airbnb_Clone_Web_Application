import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Lightbox.module.css';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '20px', width: '20px', fill: 'currentColor'}}>
    <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path>
  </svg>
);

const ArrowIcon = ({ left = false }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 4, overflow: 'visible', transform: left ? 'rotate(180deg)' : 'none'}}>
    <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
  </svg>
);

export interface LightboxImage {
  url: string;
  alt: string;
  title?: string;
}

interface LightboxProps {
  activeIndex: number | null;
  images: LightboxImage[];
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({ activeIndex, images, onClose, onNavigate }: LightboxProps) {
  const isOpen = activeIndex !== null;
  const total = images.length;

  const handlePrev = useCallback(() => {
    if (activeIndex !== null && activeIndex > 0) {
      onNavigate(activeIndex - 1);
    }
  }, [activeIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (activeIndex !== null && activeIndex < total - 1) {
      onNavigate(activeIndex + 1);
    }
  }, [activeIndex, total, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen) return null;

  const currentImage = images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery"
      >
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Show all photos">
            <svg viewBox="0 0 16 16" fill="currentColor" style={{ display: 'block', height: '16px', width: '16px' }}>
              <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path>
            </svg>
          </button>
          
          {currentImage?.title && (
            <div className={styles.title}>
              {currentImage.title}
            </div>
          )}

          <div className={styles.rightHeader}>
            <div className={styles.counter}>
              {activeIndex + 1} of {total}
            </div>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous image"
          >
            <ArrowIcon left />
          </button>

          <div className={styles.imageContainer}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={styles.imageWrapper}
            >
              <Image
                src={currentImage?.url}
                alt={currentImage?.alt || 'Gallery image'}
                fill
                sizes="100vw"
                className={styles.image}
                priority
              />
            </motion.div>
          </div>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={handleNext}
            disabled={activeIndex === total - 1}
            aria-label="Next image"
          >
            <ArrowIcon />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Lightbox.module.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { listing } from '@/data/listing';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({ activeIndex, onClose, onNavigate }: LightboxProps) {
  const isOpen = activeIndex !== null;
  const total = listing.images.length;

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
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen) return null;

  const currentImage = listing.images[activeIndex];

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
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
          <div className={styles.counter}>
            {activeIndex + 1} / {total}
          </div>
        </div>

        <div className={styles.content}>
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
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
                src={currentImage.url}
                alt={currentImage.alt}
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
            <ChevronRight size={24} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

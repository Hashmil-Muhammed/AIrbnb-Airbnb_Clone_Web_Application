import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './PhotoTour.module.css';
import { ChevronLeft } from 'lucide-react';
import { listing } from '@/data/listing';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoTourProps {
  isOpen: boolean;
  onClose: () => void;
  onImageClick: (index: number) => void;
}

export default function PhotoTour({ isOpen, onClose, onImageClick }: PhotoTourProps) {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => { 
      document.body.style.overflow = ''; 
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        role="dialog"
        aria-modal="true"
        aria-label="Photo tour"
      >
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={onClose} aria-label="Close photo tour">
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className={styles.content}>
          <div className={styles.grid}>
            {listing.images.map((img, idx) => (
              <div 
                key={idx} 
                className={`${styles.imageWrapper} ${idx % 3 === 0 ? styles.largeImage : styles.smallImage}`}
                onClick={() => onImageClick(idx)}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="100vw"
                  className={styles.image}
                />
                <div className={styles.hoverOverlay}></div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

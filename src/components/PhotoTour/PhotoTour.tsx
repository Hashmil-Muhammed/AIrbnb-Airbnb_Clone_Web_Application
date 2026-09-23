import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './PhotoTour.module.css';
import { ChevronLeft, Share, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { photoTourSections, flattenedTourImages, TourImage } from '@/data/photoTour';

interface PhotoTourProps {
  isOpen: boolean;
  onClose: () => void;
  onImageClick: (index: number, images?: TourImage[]) => void;
  isLightboxOpen?: boolean;
}

export default function PhotoTour({ isOpen, onClose, onImageClick, isLightboxOpen }: PhotoTourProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const container = containerRef.current;

    if (element && container) {
      // Offset for the sticky header + category nav (approx 160px)
      const headerOffset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const containerPosition = container.getBoundingClientRect().top;

      container.scrollTo({
        top: container.scrollTop + (elementPosition - containerPosition) - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  if (!isOpen) return null;

  let globalImageIndex = 0;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.outerContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        role="dialog"
        aria-modal="true"
        aria-label="Photo tour"
      >
        <br />
        <div className={styles.stickyTop}>
          <header className={styles.header}>
            <button className={styles.backBtn} onClick={onClose} aria-label="Close photo tour">
              <ChevronLeft size={24} />
            </button>
            <div className={styles.headerTitle}>Photo tour</div>
            <div className={styles.headerActions}>
              <button className={styles.actionBtn} aria-label="Share">
                <Share size={16} />
              </button>
              <button className={styles.actionBtn} aria-label="Save">
                <Heart size={16} />
              </button>
            </div>
          </header>
        </div>

        <div
          ref={containerRef}
          className={styles.container}
          style={{ overflowY: isLightboxOpen ? 'hidden' : 'auto' }}
        >

        <nav className={styles.categoryNav}>
          {photoTourSections.map(section => (
            <button
              key={section.id}
              className={styles.categoryBtn}
              onClick={() => handleScrollToSection(section.id)}
            >
              <div className={styles.categoryThumbnail}>
                <Image
                  src={section.images[0].url}
                  alt={section.title}
                  fill
                  className={styles.thumbnailImage}
                  sizes="120px"
                />
              </div>
              <span>{section.title}</span>
            </button>
          ))}
        </nav>

        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            {photoTourSections.map(section => {
              const sectionStartIndex = globalImageIndex;
              globalImageIndex += section.images.length;

              // Normalize id for css class (camelCase equivalent if needed, but we'll use exact id strings)
              const sectionClass = styles[section.id] || styles.defaultGallery;

              return (
                <section key={section.id} id={section.id} className={styles.section}>
                  <div className={styles.sectionInfo}>
                    <h3>{section.title}</h3>
                    {section.description && <p>{section.description}</p>}
                  </div>

                  <div className={`${styles.gallery} ${sectionClass}`}>
                    {section.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={styles.imageWrapper}
                        onClick={() => onImageClick(sectionStartIndex + idx, flattenedTourImages)}
                      >
                        <Image
                          src={img.url}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 1200px) 100vw, 800px"
                          className={styles.image}
                        />
                        <div className={styles.hoverOverlay}></div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

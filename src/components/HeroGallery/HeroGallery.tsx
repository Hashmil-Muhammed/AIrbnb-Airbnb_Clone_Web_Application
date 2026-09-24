import React from 'react';
import Image from 'next/image';
import { Grid } from 'lucide-react';
import styles from './HeroGallery.module.css';
import { listing } from '@/data/listing';

interface HeroGalleryProps {
  onShowAllPhotos: () => void;
  onImageClick: (index: number) => void;
}

export default function HeroGallery({ onShowAllPhotos, onImageClick }: HeroGalleryProps) {
  const mainImage = listing.images[0];
  const smallImages = listing.images.slice(1, 5);

  return (
    <section id="photos" className={styles.gallery}>
      <div className={styles.mainImageWrapper} onClick={() => onImageClick(0)}>
        <Image
          src={mainImage.url}
          alt={mainImage.alt}
          fill
          priority
          sizes="(max-width: 744px) 100vw, 50vw"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.gridImages}>
        {smallImages.map((img, index) => (
          <div 
            key={index} 
            className={styles.smallImageWrapper}
            onClick={() => onImageClick(index + 1)}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              sizes="(max-width: 744px) 50vw, 25vw"
              className={styles.image}
            />
            <div className={styles.overlay}></div>
          </div>
        ))}
      </div>

      <button className={styles.showAllBtn} onClick={onShowAllPhotos}>
        <svg viewBox="0 0 16 16" fill="currentColor" style={{ display: 'block', height: '14px', width: '14px' }}>
          <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path>
        </svg>
        <span>Show all photos</span>
      </button>
    </section>
  );
}

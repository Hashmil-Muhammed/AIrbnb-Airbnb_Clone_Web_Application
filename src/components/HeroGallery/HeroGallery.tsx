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
    <section className={styles.gallery}>
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
        <Grid size={16} />
        <span>Show all photos</span>
      </button>
    </section>
  );
}

import React from 'react';
import styles from './ListingHeader.module.css';
import { Share, Heart } from 'lucide-react';
import { listing } from '@/data/listing';

export default function ListingHeader() {
  return (
    <div className={styles.header}>
      <br />
      <h1 className={styles.title}>{listing.title}</h1>
      
      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <Share size={16} />
          <span>Share</span>
        </button>
        <button className={styles.actionButton}>
          <Heart size={16} />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
}

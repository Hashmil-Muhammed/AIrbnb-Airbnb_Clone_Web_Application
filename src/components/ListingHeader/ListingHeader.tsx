'use client';

import React, { useState } from 'react';
import styles from './ListingHeader.module.css';
import { Share, Heart } from 'lucide-react';
import { listing } from '@/data/listing';

export default function ListingHeader() {
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleShareClick = () => {
    showToast('Share Options');
  };

  const handleSaveClick = () => {
    if (isSaved) {
      setIsSaved(false);
      showToast('Removed from wishlist');
    } else {
      setIsSaved(true);
      showToast('Saved to wishlist');
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{listing.title}</h1>
      
      <div className={styles.actions}>
        <button className={styles.actionButton} onClick={handleShareClick}>
          <Share size={16} />
          <span>Share</span>
        </button>
        <button className={styles.actionButton} onClick={handleSaveClick}>
          <Heart size={16} fill={isSaved ? '#ff385c' : 'none'} color={isSaved ? '#ff385c' : 'currentColor'} />
          <span style={{ textDecoration: isSaved ? 'underline' : 'none' }}>{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {toastMessage && (
        <div className={styles.toast}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}

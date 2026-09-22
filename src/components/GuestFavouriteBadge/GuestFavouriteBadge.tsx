import React from 'react';
import Image from 'next/image';
import styles from './GuestFavouriteBadge.module.css';

export default function GuestFavouriteBadge() {
  return (
    <div className={styles.container}>
      <div className={styles.badgeWrapper}>
        <div className={styles.leftWreath}>
          <Image src="/assets/images/ui/left-wreath.png" alt="Left Wreath" width={64} height={96} />
        </div>
        <div className={styles.ratingText}>4.95</div>
        <div className={styles.rightWreath}>
          <Image src="/assets/images/ui/right-wreath.png" alt="Right Wreath" width={64} height={96} />
        </div>
      </div>
      <div className={styles.title}>Guest favourite</div>
      <div className={styles.subtitle}>This home is a guest favourite based on ratings, reviews and<br/>reliability</div>
      <button className={styles.link}>How reviews work</button>
    </div>
  );
}

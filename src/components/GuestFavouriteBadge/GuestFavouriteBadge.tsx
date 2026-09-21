import React from 'react';
import styles from './GuestFavouriteBadge.module.css';

export default function GuestFavouriteBadge() {
  return (
    <div className={styles.container}>
      <div className={styles.badgeWrapper}>
        <div className={styles.leftWreath}>
          <svg viewBox="0 0 32 32" style={{height: 60, width: 60, fill: 'currentcolor'}}><path d="M10.8 4C14.22 8 16 12 16 16s-1.78 8-5.2 12c-2.07-2.67-4.14-5.33-4.8-8-1-4 1.3-8.8 4.8-12z"></path></svg>
        </div>
        <div className={styles.ratingText}>4.95</div>
        <div className={styles.rightWreath}>
          <svg viewBox="0 0 32 32" style={{height: 60, width: 60, fill: 'currentcolor'}}><path d="M21.2 4c-3.42 4-5.2 8-5.2 12s1.78 8 5.2 12c2.07-2.67 4.14-5.33 4.8-8 1-4-1.3-8.8-4.8-12z"></path></svg>
        </div>
      </div>
      <div className={styles.title}>Guest favourite</div>
      <div className={styles.subtitle}>This home is a guest favourite based on ratings, reviews and<br/>reliability</div>
      <button className={styles.link}>How reviews work</button>
    </div>
  );
}

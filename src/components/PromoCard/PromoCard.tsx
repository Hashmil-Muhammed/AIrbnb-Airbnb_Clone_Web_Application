import React from 'react';
import styles from './PromoCard.module.css';

export default function PromoCard() {
  return (
    <div className={styles.card}>
      <div className={styles.contentLeft}>
        <div className={styles.iconContainer}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '28px', width: '28px', fill: '#008a05' }}>
            <path d="M12 2a2 2 0 0 0-2 2v6.6a2 2 0 0 0 .6 1.4l11.3 11.4a2.7 2.7 0 0 0 3.8 0l4.9-5a2.7 2.7 0 0 0 0-3.8l-11.4-11.4a2 2 0 0 0-1.4-.6H12zm2 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
          </svg>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.title}>Get 10% off your next stay.</p>
          <p className={styles.terms}>Terms apply</p>
        </div>
      </div>
      <button className={styles.claimButton}>Claim</button>
    </div>
  );
}

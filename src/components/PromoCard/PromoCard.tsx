import React from 'react';
import styles from './PromoCard.module.css';
import discountTag from '../../../public/discount-tag.png';

export default function PromoCard() {
  return (
    <div className={styles.card}>
      <div className={styles.contentLeft}>
        <div className={styles.iconContainer}>
          <img src={discountTag.src} alt="Discount" style={{ display: 'block', height: '28px', width: '28px' }} />
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

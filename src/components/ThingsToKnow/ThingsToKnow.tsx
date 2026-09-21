import React from 'react';
import styles from './ThingsToKnow.module.css';

export default function ThingsToKnow() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Things to know</h2>
      <div className={styles.columns}>
        
        {/* House rules */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>House rules</h3>
          <ul className={styles.list}>
            <li>Check-in: 14:00 - 22:00</li>
            <li>Checkout before 11:00</li>
            <li>3 guests maximum</li>
          </ul>
          <button className={styles.showMoreBtn}>Show more &gt;</button>
        </div>

        {/* Safety & property */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Safety &amp; property</h3>
          <ul className={styles.list}>
            <li>Security camera/recording device</li>
            <li>No carbon monoxide alarm</li>
            <li>Smoke alarm</li>
          </ul>
          <button className={styles.showMoreBtn}>Show more &gt;</button>
        </div>

        {/* Cancellation policy */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Cancellation policy</h3>
          <p className={styles.policyText}>
            Add your trip dates to get the cancellation details for this stay.
          </p>
          <button className={styles.showMoreBtn}>Add dates &gt;</button>
        </div>
        
      </div>
    </div>
  );
}

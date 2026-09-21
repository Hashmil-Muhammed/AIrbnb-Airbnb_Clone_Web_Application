import React from 'react';
import styles from './BookingCard.module.css';
import { listing } from '@/data/listing';
import { Star } from 'lucide-react';

export default function BookingCard() {
  const cleaningFee = 500;
  const serviceFee = 700;
  const total = listing.price.perNight * 5 + cleaningFee + serviceFee;

  return (
    <div className={styles.stickyWrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.price}>
            <span className={styles.currency}>{listing.price.currency}</span>
            <span className={styles.amount}>{listing.price.perNight}</span>
          </div>
        </div>

        <div className={styles.inputs}>
          <div className={styles.dates}>
            <button className={styles.checkin} aria-label="Select check-in date">
              <span className={styles.label}>CHECK-IN</span>
              <span className={styles.value}>10/18/2026</span>
            </button>
            <button className={styles.checkout} aria-label="Select check-out date">
              <span className={styles.label}>CHECKOUT</span>
              <span className={styles.value}>10/23/2026</span>
            </button>
          </div>
          <button className={styles.guests} aria-label="Select number of guests">
            <span className={styles.label}>GUESTS</span>
            <span className={styles.value}>1 guest</span>
          </button>
        </div>

        <button className={styles.reserveBtn}>Reserve</button>
        <p className={styles.disclaimer}>You won't be charged yet</p>

        <div className={styles.feeBreakdown}>
          <div className={styles.feeRow} style={{textDecoration: 'underline'}}>
            <span className={styles.feeName}>{listing.price.currency}{listing.price.perNight} x 5 nights</span>
            <span className={styles.feeAmount}>{listing.price.currency}{listing.price.perNight}</span>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.totalRow}>
          <span>Total before taxes</span>
          <span>{listing.price.currency}{listing.price.perNight}</span>
        </div>
      </div>
    </div>
  );
}

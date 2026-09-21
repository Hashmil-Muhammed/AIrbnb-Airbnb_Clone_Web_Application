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
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <span className={styles.value}>2 guests</span>
              <svg viewBox="0 0 32 32" style={{height: 16, width: 16, fill: 'currentcolor'}}><path d="M28 9v5L16 26 4 14V9l12 12z"></path></svg>
            </div>
          </button>
        </div>

        <div className={styles.cancellationNotice}>
          Free cancellation before <strong>17 October</strong>
        </div>

        <button className={styles.reserveBtn}>Reserve</button>
        <p className={styles.disclaimer}>You won't be charged yet</p>

        <div className={styles.reportListing}>
          <svg viewBox="0 0 32 32" style={{height: 16, width: 16, fill: 'currentcolor', marginRight: 8}}><path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l1.15-8L28 6zm-11 2v8H5V4h10v4h11l-.85 6H17z"></path></svg>
          <span style={{textDecoration: 'underline'}}>Report this listing</span>
        </div>
      </div>
    </div>
  );
}

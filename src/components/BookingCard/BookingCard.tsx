import React from 'react';
import styles from './BookingCard.module.css';
import { listing } from '@/data/listing';
import { Star, ChevronDown } from 'lucide-react';

export default function BookingCard() {
  const cleaningFee = 500;
  const serviceFee = 700;
  const total = listing.price.perNight * 5 + cleaningFee + serviceFee;

  return (
    <div className={styles.stickyWrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>
              {listing.price.currency}{listing.price.perNight.toLocaleString('en-IN')}
            </span>
            <span className={styles.nightText}>for 5 nights</span>
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
              <ChevronDown size={18} color="#222222" strokeWidth={2} />
            </div>
          </button>
        </div>

        <div className={styles.cancellationNotice}>
          <span style={{color: '#717171'}}>Free cancellation before</span> <strong style={{color: '#222222'}}>17 October</strong>
        </div>

        <button className={styles.reserveBtn}>Reserve</button>
        <p className={styles.disclaimer}>You won't be charged yet</p>
      </div>

      <div className={styles.reportListing}>
        <svg viewBox="0 0 32 32" style={{height: 16, width: 16, fill: '#717171', marginRight: 8}}><path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l1.15-8L28 6z"></path></svg>
        <span style={{textDecoration: 'underline', color: '#717171'}}>Report this listing</span>
      </div>
    </div>
  );
}

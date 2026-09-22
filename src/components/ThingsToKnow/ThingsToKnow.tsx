import React from 'react';
import styles from './ThingsToKnow.module.css';
import { CalendarX, Key, Shield } from 'lucide-react';

export default function ThingsToKnow() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Things to know</h2>
      <div className={styles.columns}>
        
        {/* Cancellation policy */}
        <div className={styles.column}>
          <div className={styles.iconWrapper}><CalendarX strokeWidth={1.5} size={24} /></div>
          <h3 className={styles.columnTitle}>Cancellation policy</h3>
          <p className={styles.textItem}>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
          <p className={styles.textItem}>Review this host's full policy for details.</p>
          <a href="#" className={styles.learnMoreLink}>Learn more</a>
        </div>

        {/* House rules */}
        <div className={styles.column}>
          <div className={styles.iconWrapper}><Key strokeWidth={1.5} size={24} /></div>
          <h3 className={styles.columnTitle}>House rules</h3>
          <p className={styles.textItem}>Check-in after 2:00 pm</p>
          <p className={styles.textItem}>Checkout before 11:00 am</p>
          <p className={styles.textItem}>3 guests maximum</p>
          <a href="#" className={styles.learnMoreLink}>Learn more</a>
        </div>

        {/* Safety & property */}
        <div className={styles.column}>
          <div className={styles.iconWrapper}><Shield strokeWidth={1.5} size={24} /></div>
          <h3 className={styles.columnTitle}>Safety &amp; property</h3>
          <p className={styles.textItem}>Carbon monoxide alarm not reported</p>
          <p className={styles.textItem}>Smoke alarm not reported</p>
          <p className={styles.textItem}>Exterior security cameras on property</p>
          <a href="#" className={styles.learnMoreLink}>Learn more</a>
        </div>
        
      </div>
    </div>
  );
}

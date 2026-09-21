import React from 'react';
import styles from './ReviewsSection.module.css';

const REVIEWS = [
  {
    name: 'Amit',
    joined: '2 months on Airbnb',
    date: '1 week ago',
    rating: 5,
    text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
    avatar: 'A'
  },
  {
    name: 'Aheesh',
    joined: '3 years on Airbnb',
    date: '2 weeks ago',
    rating: 5,
    text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
    avatarImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Samiksha',
    joined: '8 months on Airbnb',
    date: 'May 2026',
    rating: 5,
    text: 'the host nitish was really great help',
    avatarImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Vedant',
    joined: '4 years on Airbnb',
    date: 'May 2026',
    rating: 5,
    text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
    avatar: 'V'
  },
  {
    name: 'Vaibhav S',
    joined: '3 years on Airbnb',
    date: 'May 2026',
    rating: 5,
    text: 'Great great experience living out there , can\'t expect more , will always look for it in the future and will recommend my friends too.',
    avatarImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Mohd',
    joined: '5 years on Airbnb',
    date: 'May 2026',
    rating: 5,
    text: 'Great place. Exactly as described in the listing.',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export default function ReviewsSection() {
  return (
    <div id="reviews" className={styles.container}>
      
      {/* Metrics Row */}
      <div className={styles.metricsGrid}>
        <div className={styles.metricOverall}>
          <div className={styles.metricTitle}>Overall rating</div>
          <div className={styles.bars}>
            <div className={styles.barRow}><span>5</span><div className={styles.bar}><div className={styles.barFill} style={{width: '95%'}}></div></div></div>
            <div className={styles.barRow}><span>4</span><div className={styles.bar}><div className={styles.barFill} style={{width: '5%'}}></div></div></div>
            <div className={styles.barRow}><span>3</span><div className={styles.bar}></div></div>
            <div className={styles.barRow}><span>2</span><div className={styles.bar}></div></div>
            <div className={styles.barRow}><span>1</span><div className={styles.bar}></div></div>
          </div>
        </div>

        <div className={styles.metricCard}>
          <span className={styles.metricName}>Cleanliness</span>
          <span className={styles.metricValue}>5.0</span>
          <svg viewBox="0 0 32 32" style={{height: 32, width: 32, fill: 'currentcolor'}}><path d="M26 18c0-4.42-3.58-8-8-8s-8 3.58-8 8H2l9 12h14l9-12h-8zm-8-6c3.31 0 6 2.69 6 6h-12c0-3.31 2.69-6 6-6zM11.66 28L4.16 18h4.08c.84 5.05 5.24 9 10.76 9h-7.34zm8.68 0h-6.68c4.6-1 8.24-4.5 9.42-9h4.76l-7.5 9z"></path></svg>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Accuracy</span>
          <span className={styles.metricValue}>5.0</span>
          <svg viewBox="0 0 32 32" style={{height: 32, width: 32, fill: 'currentcolor'}}><path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm7.71-16.3L13.41 22l-5.12-5.12 1.42-1.42 3.7 3.7 8.88-8.88z"></path></svg>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Check-in</span>
          <span className={styles.metricValue}>5.0</span>
          <svg viewBox="0 0 32 32" style={{height: 32, width: 32, fill: 'currentcolor'}}><path d="M22 14v-4a6 6 0 1 0-12 0v4H6v16h20V14zm-10-4a4 4 0 1 1 8 0v4h-8zM8 28V16h16v12z"></path></svg>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Communication</span>
          <span className={styles.metricValue}>5.0</span>
          <svg viewBox="0 0 32 32" style={{height: 32, width: 32, fill: 'currentcolor'}}><path d="M2 4v18h6v6l6-6h16V4zm28 16H13.17l-3.59 3.59V20H4V6h26z"></path></svg>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Location</span>
          <span className={styles.metricValue}>4.8</span>
          <svg viewBox="0 0 32 32" style={{height: 32, width: 32, fill: 'currentcolor'}}><path d="M16 2C9.92 2 5 6.92 5 13c0 7.85 11 17 11 17s11-9.15 11-17c0-6.08-4.92-11-11-11zm0 26.23C13.23 24.38 7 16.54 7 13c0-4.97 4.03-9 9-9s9 4.03 9 9c0 3.54-6.23 11.38-9 15.23zm0-20.23a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"></path></svg>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Value</span>
          <span className={styles.metricValue}>4.8</span>
          <svg viewBox="0 0 32 32" style={{height: 32, width: 32, fill: 'currentcolor'}}><path d="M28.41 12.41l-10.83-10.82A2 2 0 0 0 16.17 1H4a2 2 0 0 0-2 2v12.17a2 2 0 0 0 .59 1.41l10.82 10.83a2 2 0 0 0 2.82 0l13.18-13.18a2 2 0 0 0 0-2.82zM16.17 26L4 13.83V3h10.83L27 13.83zM8 10a2 2 0 1 0-2-2 2 2 0 0 0 2 2z"></path></svg>
        </div>
      </div>

      {/* Review Pills */}
      <div className={styles.pillsList}>
        <div className={styles.pill}>🛋️ Comfort 6</div>
        <div className={styles.pill}>✔️ Accuracy 5</div>
        <div className={styles.pill}>🛁 Hot tub 5</div>
        <div className={styles.pill}>✨ Condition 4</div>
        <div className={styles.pill}>🤝 Hospitality 8</div>
        <div className={styles.pill}>🧼 Cleanliness 4</div>
        <div className={styles.pill}>🔌 Amenities 2</div>
      </div>

      {/* Reviews Grid */}
      <div className={styles.reviewsGrid}>
        {REVIEWS.map((review, i) => (
          <div key={i} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              {review.avatarImage ? (
                <img src={review.avatarImage} alt={review.name} className={styles.avatar} />
              ) : (
                <div className={styles.avatarInitials}>{review.avatar}</div>
              )}
              <div>
                <div className={styles.reviewerName}>{review.name}</div>
                <div className={styles.reviewerJoined}>{review.joined}</div>
              </div>
            </div>
            <div className={styles.reviewMeta}>
              <span className={styles.stars}>★★★★★</span>
              <span className={styles.dot}>·</span>
              <span>{review.date}</span>
            </div>
            <p className={styles.reviewText}>{review.text}</p>
            {review.text.length > 100 && (
              <button className={styles.showMoreBtn}>Show more</button>
            )}
          </div>
        ))}
      </div>

      <button className={styles.showAllBtn}>Show all 19 reviews</button>
    </div>
  );
}

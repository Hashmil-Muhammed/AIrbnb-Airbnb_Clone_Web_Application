import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ReviewsSection.module.css';

const REVIEWS = [
  {
    name: 'Amit',
    joined: '2 months on Airbnb',
    date: '1 week ago',
    rating: 5,
    text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
    avatar: 'A',
    avatarBg: 'rgb(247, 237, 226)',
    avatarColor: 'rgb(193, 133, 42)'
  },
  {
    name: 'Aheesh',
    joined: '3 years on Airbnb',
    date: '2 weeks ago',
    rating: 5,
    text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
    avatarImage: '/assets/images/avatars/aheesh.png',
    hasMore: true
  },
  {
    name: 'Samiksha',
    joined: '8 months on Airbnb',
    date: 'May 2026',
    rating: 5,
    text: 'the host nitish was really great help',
    avatarImage: '/assets/images/avatars/samiksha.png'
  },
  {
    name: 'Vedant',
    joined: '4 years on Airbnb',
    date: 'May 2026',
    rating: 5,
    text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.The highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.The property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!',
    avatar: 'V',
    avatarBg: 'rgb(239, 234, 247)',
    avatarColor: 'rgb(139, 111, 196)',
    hasMore: true
  },
  {
    name: 'Vaibhav S',
    joined: '3 years on Airbnb',
    date: 'May 2026',
    rating: 5,
    text: 'Great great experience living out there , can\'t expect more , will always look for it in the future and will recommend my friends too.',
    avatarImage: '/assets/images/avatars/vaibhav.png'
  },
  {
    name: 'Mohd',
    joined: '5 years on Airbnb',
    date: 'May 2026',
    rating: 5,
    text: 'Great place. Exactly as described in the listing.',
    avatarImage: '/assets/images/avatars/mohd.png'
  }
];

import { SprayCan, CheckCircle, Key, MessageCircle, Map, Tag, Sofa, CheckCircle2, Droplets, Sparkles, Heart, Grid } from 'lucide-react';

const ReviewCard = ({ review }: { review: typeof REVIEWS[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        {review.avatarImage ? (
          <img src={review.avatarImage} alt={review.name} className={styles.avatar} />
        ) : (
          <div 
            className={styles.avatarInitials}
            style={review.avatarBg ? { backgroundColor: review.avatarBg, color: review.avatarColor } : undefined}
          >
            {review.avatar}
          </div>
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
      <p className={`${styles.reviewText} ${isExpanded ? styles.expanded : ''}`}>{review.text}</p>
      {review.hasMore && (
        <button 
          className={styles.showMoreBtn} 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
};

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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}><path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z"></path></svg>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Accuracy</span>
          <span className={styles.metricValue}>5.0</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}><path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z"></path></svg>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Check-in</span>
          <span className={styles.metricValue}>5.0</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}><path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z"></path></svg>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Communication</span>
          <span className={styles.metricValue}>5.0</span>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}><path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z" fill="none"></path></svg>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Location</span>
          <span className={styles.metricValue}>4.8</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}><path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z"></path></svg>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Value</span>
          <span className={styles.metricValue}>4.8</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}><path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
        </div>
      </div>

      {/* Review Pills */}
      <div className={styles.pillsList}>
        <div className={styles.pill}><Image src="/assets/images/ui/comfort.png" alt="Comfort" width={24} height={24} className={styles.pillIcon} /> Comfort 6</div>
        <div className={styles.pill}><Image src="/assets/images/ui/accuracy.png" alt="Accuracy" width={24} height={24} className={styles.pillIcon} /> Accuracy 5</div>
        <div className={styles.pill}><Image src="/assets/images/ui/hottub.png" alt="Hot tub" width={24} height={24} className={styles.pillIcon} /> Hot tub 5</div>
        <div className={styles.pill}><Image src="/assets/images/ui/condition.png" alt="Condition" width={24} height={24} className={styles.pillIcon} /> Condition 4</div>
        <div className={styles.pill}><Image src="/assets/images/ui/hospitality.png" alt="Hospitality" width={24} height={24} className={styles.pillIcon} /> Hospitality 8</div>
        <div className={styles.pill}><Image src="/assets/images/ui/cleanliness.png" alt="Cleanliness" width={24} height={24} className={styles.pillIcon} /> Cleanliness 4</div>
        <div className={styles.pill}><Image src="/assets/images/ui/amenities.png" alt="Amenities" width={24} height={24} className={styles.pillIcon} /> Amenities 2</div>
        <div className={styles.pill}><Image src="/assets/images/ui/decor.png" alt="Decor" width={24} height={24} className={styles.pillIcon} /> Decor 2</div>
        <div className={styles.pill}><Image src="/assets/images/ui/indoor-spaces.png" alt="Indoor spaces" width={24} height={24} className={styles.pillIcon} /> Indoor spaces 2</div>
        <div className={styles.pill}><Image src="/assets/images/ui/location.png" alt="Location" width={24} height={24} className={styles.pillIcon} /> Location 2</div>
      </div>

      {/* Reviews Grid */}
      <div className={styles.reviewsGrid}>
        {REVIEWS.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>

      <button className={styles.showAllBtn}>Show all 19 reviews</button>
    </div>
  );
}

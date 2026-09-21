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

import { SprayCan, CheckCircle, Key, MessageCircle, Map, Tag, Sofa, CheckCircle2, Droplets, Sparkles, Heart, Grid } from 'lucide-react';

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
          <SprayCan size={32} strokeWidth={1} />
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Accuracy</span>
          <span className={styles.metricValue}>5.0</span>
          <CheckCircle size={32} strokeWidth={1} />
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Check-in</span>
          <span className={styles.metricValue}>5.0</span>
          <Key size={32} strokeWidth={1} />
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Communication</span>
          <span className={styles.metricValue}>5.0</span>
          <MessageCircle size={32} strokeWidth={1} />
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Location</span>
          <span className={styles.metricValue}>4.8</span>
          <Map size={32} strokeWidth={1} />
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricName}>Value</span>
          <span className={styles.metricValue}>4.8</span>
          <Tag size={32} strokeWidth={1} />
        </div>
      </div>

      {/* Review Pills */}
      <div className={styles.pillsList}>
        <div className={styles.pill}><Sofa size={16} className={styles.pillIcon} /> Comfort 6</div>
        <div className={styles.pill}><CheckCircle2 size={16} className={styles.pillIcon} /> Accuracy 5</div>
        <div className={styles.pill}><Droplets size={16} className={styles.pillIcon} /> Hot tub 5</div>
        <div className={styles.pill}><Sparkles size={16} className={styles.pillIcon} /> Condition 4</div>
        <div className={styles.pill}><Heart size={16} className={styles.pillIcon} /> Hospitality 8</div>
        <div className={styles.pill}><SprayCan size={16} className={styles.pillIcon} /> Cleanliness 4</div>
        <div className={styles.pill}><Grid size={16} className={styles.pillIcon} /> Amenities 2</div>
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

import React from 'react';
import styles from './Amenities.module.css';
import { Wifi, Tv, Car, Wind, Waves, Coffee } from 'lucide-react';

const AMENITIES_LIST = [
  { icon: <Wifi size={24} />, name: 'Fast wifi' },
  { icon: <Wind size={24} />, name: 'Air conditioning' },
  { icon: <Tv size={24} />, name: 'TV with standard cable' },
  { icon: <Car size={24} />, name: 'Free parking on premises' },
  { icon: <Waves size={24} />, name: 'Private hot tub' },
  { icon: <Coffee size={24} />, name: 'Kitchen' }
];

export default function Amenities() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {AMENITIES_LIST.map((item, index) => (
          <div key={index} className={styles.amenityItem}>
            <div className={styles.icon}>{item.icon}</div>
            <span className={styles.name}>{item.name}</span>
          </div>
        ))}
      </div>
      <button className={styles.showAllBtn}>Show all 50 amenities</button>
    </div>
  );
}

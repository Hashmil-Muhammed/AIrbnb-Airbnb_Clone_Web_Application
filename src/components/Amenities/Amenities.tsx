'use client';
import React, { useState, useEffect } from 'react';
import styles from './Amenities.module.css';
import { 
  Wifi, Tv, Car, Wind, Waves, Coffee, 
  Utensils, Monitor, PawPrint, BellOff, Bath, Camera, X,
  Check, Bath as BathIcon, Home, Zap, Shield, Key
} from 'lucide-react';

const HIGHLIGHTED_AMENITIES = [
  { icon: <Utensils size={24} strokeWidth={1.5} />, name: 'Kitchen', missing: false },
  { icon: <Wifi size={24} strokeWidth={1.5} />, name: 'Wifi', missing: false },
  { icon: <Monitor size={24} strokeWidth={1.5} />, name: 'Dedicated workspace', missing: false },
  { icon: <Car size={24} strokeWidth={1.5} />, name: 'Free parking on premises', missing: false },
  { icon: <Waves size={24} strokeWidth={1.5} />, name: 'Pool', missing: false },
  { icon: <Bath size={24} strokeWidth={1.5} />, name: 'Hot tub', missing: false },
  { icon: <PawPrint size={24} strokeWidth={1.5} />, name: 'Pets allowed', missing: false },
  { icon: <Camera size={24} strokeWidth={1.5} />, name: 'Exterior security cameras on property', missing: false },
  { icon: <BellOff size={24} strokeWidth={1.5} />, name: 'Carbon monoxide alarm', missing: true },
  { icon: <BellOff size={24} strokeWidth={1.5} />, name: 'Smoke alarm', missing: true }
];

const ALL_AMENITIES = [
  {
    category: 'Bathroom',
    items: ['Hairdryer', 'Cleaning products', 'Shampoo', 'Hot water', 'Shower gel']
  },
  {
    category: 'Bedroom and laundry',
    items: ['Washing machine', 'Hangers', 'Bed linen', 'Room-darkening blinds', 'Iron', 'Clothes storage', 'Cot']
  },
  {
    category: 'Entertainment',
    items: ['TV']
  },
  {
    category: 'Family',
    items: ['Cot']
  },
  {
    category: 'Heating and cooling',
    items: ['Air conditioning', 'Ceiling fan']
  },
  {
    category: 'Home safety',
    items: ['Exterior security cameras on property', 'Carbon monoxide alarm', 'Smoke alarm']
  },
  {
    category: 'Internet and office',
    items: ['Wifi', 'Dedicated workspace']
  },
  {
    category: 'Kitchen and dining',
    items: ['Kitchen', 'Fridge', 'Freezer', 'Microwave', 'Cooking basics', 'Crockery and cutlery', 'Kettle', 'Coffee', 'Wine glasses', 'Toaster', 'Blender', 'Cooker']
  },
  {
    category: 'Location features',
    items: ['Private entrance']
  },
  {
    category: 'Outdoor',
    items: ['Patio or balcony', 'Outdoor dining area']
  },
  {
    category: 'Parking and facilities',
    items: ['Free parking on premises', 'Pool', 'Hot tub', 'Gym']
  },
  {
    category: 'Services',
    items: ['Pets allowed', 'Cleaning available during stay', 'Long-term stays allowed', 'Self check-in']
  }
];

const getIconForCategory = (category: string) => {
  switch(category) {
    case 'Bathroom': return <BathIcon size={24} strokeWidth={1.5} />;
    case 'Bedroom and laundry': return <Home size={24} strokeWidth={1.5} />;
    case 'Entertainment': return <Tv size={24} strokeWidth={1.5} />;
    case 'Heating and cooling': return <Wind size={24} strokeWidth={1.5} />;
    case 'Home safety': return <Shield size={24} strokeWidth={1.5} />;
    case 'Internet and office': return <Wifi size={24} strokeWidth={1.5} />;
    case 'Kitchen and dining': return <Utensils size={24} strokeWidth={1.5} />;
    case 'Parking and facilities': return <Car size={24} strokeWidth={1.5} />;
    case 'Services': return <Key size={24} strokeWidth={1.5} />;
    default: return <Check size={24} strokeWidth={1.5} />;
  }
};

export default function Amenities() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          {HIGHLIGHTED_AMENITIES.map((item, index) => (
            <div key={index} className={`${styles.amenityItem} ${item.missing ? styles.missingItem : ''}`}>
              <div className={styles.icon}>{item.icon}</div>
              <span className={styles.name}>{item.name}</span>
            </div>
          ))}
        </div>
        <button className={styles.showAllBtn} onClick={() => setIsModalOpen(true)}>
          Show all 50 amenities
        </button>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)} aria-label="Close">
                <X size={20} strokeWidth={2} />
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>What this place offers</h2>
              
              {ALL_AMENITIES.map((categoryGroup, index) => (
                <div key={index} className={styles.categoryGroup}>
                  <h3 className={styles.categoryTitle}>{categoryGroup.category}</h3>
                  <div className={styles.categoryList}>
                    {categoryGroup.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={styles.categoryItem}>
                        <div className={styles.icon}>{getIconForCategory(categoryGroup.category)}</div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

'use client';
import React, { useState, useEffect } from 'react';
import styles from './Amenities.module.css';
import { 
  Wifi, Tv, Car, Wind, Waves, Coffee, 
  Utensils, Monitor, PawPrint, BellOff, Bath, Camera, X,
  Check, Home, Shield, Key, Droplet, Thermometer,
  Shirt, Bed, Archive, Baby, Snowflake, Fan, Laptop,
  Flame, DoorOpen, Sun, Tent, Dumbbell, Sparkles, Calendar,
  Wine, Droplets, UtensilsCrossed, SprayCan, Video, CarFront, ShieldOff, ShieldAlert
} from 'lucide-react';

const HIGHLIGHTED_AMENITIES = [
  { icon: <UtensilsCrossed size={24} strokeWidth={1.5} />, name: 'Kitchen', missing: false },
  { icon: <Wifi size={24} strokeWidth={1.5} />, name: 'Wifi', missing: false },
  { icon: <Monitor size={24} strokeWidth={1.5} />, name: 'Dedicated workspace', missing: false },
  { icon: <CarFront size={24} strokeWidth={1.5} />, name: 'Free parking on premises', missing: false },
  { icon: <Waves size={24} strokeWidth={1.5} />, name: 'Pool', missing: false },
  { icon: <Bath size={24} strokeWidth={1.5} />, name: 'Hot tub', missing: false },
  { icon: <PawPrint size={24} strokeWidth={1.5} />, name: 'Pets allowed', missing: false },
  { icon: <Video size={24} strokeWidth={1.5} />, name: 'Exterior security cameras on property', missing: false },
  { icon: <ShieldOff size={24} strokeWidth={1.5} />, name: 'Carbon monoxide alarm', missing: true },
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

const getIconForItem = (itemName: string) => {
  const name = itemName.toLowerCase();
  
  if (name.includes('hairdryer')) return <Wind size={24} strokeWidth={1.5} />;
  if (name.includes('cleaning products')) return <SprayCan size={24} strokeWidth={1.5} />;
  if (name.includes('shampoo')) return <Droplet size={24} strokeWidth={1.5} />;
  if (name.includes('hot water')) return <Thermometer size={24} strokeWidth={1.5} />;
  if (name.includes('shower gel')) return <Droplets size={24} strokeWidth={1.5} />;
  
  if (name.includes('washing machine')) return <Archive size={24} strokeWidth={1.5} />;
  if (name.includes('hanger')) return <Shirt size={24} strokeWidth={1.5} />;
  if (name.includes('linen')) return <Bed size={24} strokeWidth={1.5} />;
  if (name.includes('blinds')) return <Home size={24} strokeWidth={1.5} />;
  if (name.includes('iron')) return <Shirt size={24} strokeWidth={1.5} />;
  if (name.includes('storage')) return <Archive size={24} strokeWidth={1.5} />;
  if (name.includes('cot')) return <Baby size={24} strokeWidth={1.5} />;
  
  if (name.includes('tv')) return <Tv size={24} strokeWidth={1.5} />;
  
  if (name.includes('air conditioning')) return <Snowflake size={24} strokeWidth={1.5} />;
  if (name.includes('fan')) return <Fan size={24} strokeWidth={1.5} />;
  
  if (name.includes('camera')) return <Video size={24} strokeWidth={1.5} />;
  if (name.includes('carbon monoxide')) return <ShieldAlert size={24} strokeWidth={1.5} />;
  if (name.includes('smoke alarm')) return <BellOff size={24} strokeWidth={1.5} />;
  
  if (name.includes('wifi')) return <Wifi size={24} strokeWidth={1.5} />;
  if (name.includes('workspace')) return <Laptop size={24} strokeWidth={1.5} />;
  
  if (name.includes('kitchen')) return <Utensils size={24} strokeWidth={1.5} />;
  if (name.includes('fridge') || name.includes('freezer')) return <Snowflake size={24} strokeWidth={1.5} />;
  if (name.includes('microwave') || name.includes('toaster') || name.includes('cooker')) return <Utensils size={24} strokeWidth={1.5} />;
  if (name.includes('cooking basics') || name.includes('cutlery')) return <UtensilsCrossed size={24} strokeWidth={1.5} />;
  if (name.includes('kettle') || name.includes('coffee') || name.includes('blender')) return <Coffee size={24} strokeWidth={1.5} />;
  if (name.includes('wine')) return <Wine size={24} strokeWidth={1.5} />;
  
  if (name.includes('entrance')) return <DoorOpen size={24} strokeWidth={1.5} />;
  
  if (name.includes('patio') || name.includes('outdoor')) return <Sun size={24} strokeWidth={1.5} />;
  if (name.includes('dining area')) return <Tent size={24} strokeWidth={1.5} />;
  
  if (name.includes('parking')) return <CarFront size={24} strokeWidth={1.5} />;
  if (name.includes('pool')) return <Waves size={24} strokeWidth={1.5} />;
  if (name.includes('hot tub')) return <Bath size={24} strokeWidth={1.5} />;
  if (name.includes('gym')) return <Dumbbell size={24} strokeWidth={1.5} />;
  
  if (name.includes('pet')) return <PawPrint size={24} strokeWidth={1.5} />;
  if (name.includes('cleaning available')) return <Sparkles size={24} strokeWidth={1.5} />;
  if (name.includes('long-term')) return <Calendar size={24} strokeWidth={1.5} />;
  if (name.includes('check-in')) return <Key size={24} strokeWidth={1.5} />;

  return <Check size={24} strokeWidth={1.5} />;
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
                        <div className={styles.icon}>{getIconForItem(item)}</div>
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

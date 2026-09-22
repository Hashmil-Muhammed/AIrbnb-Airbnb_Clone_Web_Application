import React, { useRef, useState } from 'react';
import styles from './MoreStaysNearby.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stays = [
  {
    id: 1,
    title: 'Beautiful Studio with a view to die for',
    price: '₹23,600',
    rating: '4.91',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    title: 'NAQAB - 1bhk with private pool',
    price: '₹42,218',
    rating: '4.95',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1de2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: '₹44,506',
    rating: '4.94',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    title: 'The Tropical Studio | 5 mins to Beach',
    price: '₹22,824',
    rating: '4.96',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    price: '₹39,942',
    rating: '4.95',
    image: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
    price: '₹45,648',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 7,
    title: 'Luxury Apt | Private Pool | 6 Mins from Beach',
    price: '₹48,786',
    rating: '4.93',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 8,
    title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.',
    price: '₹22,824',
    rating: '4.92',
    image: 'https://images.unsplash.com/photo-1522771731478-44eb10e5c80c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

export default function MoreStaysNearby() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Approximating 2 pages for 8 items showing 5 at a time

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
      setCurrentPage(1);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
      setCurrentPage(2);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>More stays nearby</h2>
        <div className={styles.controls}>
          <span className={styles.pageCount}>{currentPage} / {totalPages}</span>
          <div className={styles.arrows}>
            <button className={styles.arrowBtn} onClick={scrollLeft} aria-label="Previous">
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button className={styles.arrowBtn} onClick={scrollRight} aria-label="Next">
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carousel} ref={carouselRef}>
          {stays.map(stay => (
            <div key={stay.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={stay.image} alt={stay.title} className={styles.cardImage} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.cardTitle}>{stay.title}</h3>
                <div className={styles.priceRating}>
                  <span className={styles.price}>{stay.price}</span>
                  <span className={styles.rating}><span style={{fontSize: 10}}>★</span> {stay.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

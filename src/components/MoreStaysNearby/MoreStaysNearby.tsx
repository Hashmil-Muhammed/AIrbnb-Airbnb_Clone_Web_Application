import React, { useRef, useState } from 'react';
import styles from './MoreStaysNearby.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stays = [
  {
    id: 1,
    title: 'Beautiful Studio with a view to die for',
    price: '₹23,600',
    rating: '4.91',
    image: '/assets/images/more_stays/1.png'
  },
  {
    id: 2,
    title: 'NAQAB - 1bhk with private pool',
    price: '₹42,218',
    rating: '4.95',
    image: '/assets/images/more_stays/2.png'
  },
  {
    id: 3,
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: '₹44,506',
    rating: '4.94',
    image: '/assets/images/more_stays/3.png'
  },
  {
    id: 4,
    title: 'The Tropical Studio | 5 mins to Beach',
    price: '₹22,824',
    rating: '4.96',
    image: '/assets/images/more_stays/4.png'
  },
  {
    id: 5,
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    price: '₹39,942',
    rating: '4.95',
    image: '/assets/images/more_stays/5.png'
  },
  {
    id: 6,
    title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
    price: '₹45,648',
    rating: '5.0',
    image: '/assets/images/more_stays/6.png'
  },
  {
    id: 7,
    title: 'Luxury Apt | Private Pool | 6 Mins from Beach',
    price: '₹48,786',
    rating: '4.93',
    image: '/assets/images/more_stays/7.png'
  },
  {
    id: 8,
    title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.',
    price: '₹22,824',
    rating: '4.92',
    image: '/assets/images/more_stays/8.png'
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
            <button 
              className={`${styles.arrowBtn} ${currentPage === 1 ? styles.arrowBtnDisabled : ''}`} 
              onClick={scrollLeft} 
              aria-label="Previous"
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button 
              className={`${styles.arrowBtn} ${currentPage === totalPages ? styles.arrowBtnDisabled : ''}`} 
              onClick={scrollRight} 
              aria-label="Next"
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={16} strokeWidth={1.5} />
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

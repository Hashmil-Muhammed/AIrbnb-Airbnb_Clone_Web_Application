import React from 'react';
import Image from 'next/image';
import styles from './ListingDetails.module.css';
import { listing } from '@/data/listing';
import Amenities from '../Amenities/Amenities';

export default function ListingDetails() {
  return (
    <div className={styles.container}>
      {/* Guest Favourite Banner */}
      <section className={styles.guestFavouriteBanner}>
        <div className={styles.gfLeft}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '28px', width: '28px', fill: 'currentcolor'}}><path d="M26 2a1 1 0 0 1 .92.62L30.5 12h-2.14l-3-7.5H6.64l-3 7.5H1.5L5.08 2.62A1 1 0 0 1 6 2zm-7.5 12h5.78l-3.2 2.33 1.22 3.76L19 17.68l-3.3 2.41 1.22-3.76-3.2-2.33h5.78L21 10.5z"></path></svg>
          <div className={styles.gfText}>
            <span className={styles.gfTitle}>Guest favourite</span>
            <span className={styles.gfDesc}>One of the most loved homes on Airbnb, according to guests</span>
          </div>
        </div>
        <div className={styles.gfRight}>
          <div className={styles.gfStat}>
            <span className={styles.gfStatValue}>4.97</span>
            <span className={styles.gfStatLabel}>★★★★★</span>
          </div>
          <div className={styles.gfDivider}></div>
          <div className={styles.gfStat}>
            <span className={styles.gfStatValue}>33</span>
            <span className={styles.gfStatLabel}>Reviews</span>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Host and Property Meta */}
      <section className={styles.section}>
        <div className={styles.hostHeader}>
          <div>
            <h2 className={styles.title}>Entire serviced apartment hosted by {listing.host.name}</h2>
            <ol className={styles.metaList}>
              <li>{listing.guests} guests</li>
              <li className={styles.dot}>·</li>
              <li>{listing.bedrooms} bedroom</li>
              <li className={styles.dot}>·</li>
              <li>{listing.beds} bed</li>
              <li className={styles.dot}>·</li>
              <li>{listing.baths} bath</li>
            </ol>
          </div>
          <div className={styles.hostAvatar}>
            <Image 
              src={listing.host.image} 
              alt={listing.host.name} 
              width={56} 
              height={56} 
              className={styles.avatarImage} 
            />
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Description */}
      <section className={styles.section}>
        <div className={styles.description}>
          <p>Discover a romantic getaway at our 1BHK apartment in Candolim. Featuring a private modern Jacuzzi, spacious living areas, and a fully equipped kitchen, this is your perfect retreat in Goa.</p>
          <p>Enjoy the serene ambiance and luxurious amenities that make every moment special.</p>
          <button className={styles.showMoreBtn}>Show more &gt;</button>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Sleeping arrangements */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Where you'll sleep</h2>
        <div className={styles.sleepingCard}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="M24 16h6v8h-2v-4H4v4H2v-8h6v-2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v2zm-2 0v-2H10v2h12zM8 6H6v7h2V6zm20 0H10v7h18V6z"></path></svg>
          <h3 className={styles.bedTitle}>Bedroom</h3>
          <p className={styles.bedDesc}>1 king bed</p>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Amenities */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What this place offers</h2>
        <Amenities />
      </section>
      
    </div>
  );
}

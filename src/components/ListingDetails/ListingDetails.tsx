import React from 'react';
import Image from 'next/image';
import styles from './ListingDetails.module.css';
import { listing } from '@/data/listing';
import Amenities from '../Amenities/Amenities';

export default function ListingDetails() {
  return (
    <div className={styles.container}>
      
      {/* Property Summary */}
      <section className={styles.summarySection}>
        <h2 className={styles.title}>Entire serviced apartment in Candolim, India</h2>
        <p className={styles.metaText}>3 guests · 1 bedroom · 1 bed · 1 bathroom</p>
      </section>

      {/* Guest Favourite Banner */}
      <section className={styles.guestFavouriteBanner}>
        <div className={styles.gfLeft}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '28px', width: '28px', fill: 'currentcolor'}}><path d="M26 2a1 1 0 0 1 .92.62L30.5 12h-2.14l-3-7.5H6.64l-3 7.5H1.5L5.08 2.62A1 1 0 0 1 6 2zm-7.5 12h5.78l-3.2 2.33 1.22 3.76L19 17.68l-3.3 2.41 1.22-3.76-3.2-2.33h5.78L21 10.5z"></path></svg>
          <div className={styles.gfText}>
            <span className={styles.gfTitle}>Guest favourite</span>
            <span className={styles.gfDesc}>One of the most loved homes on Airbnb,<br/>according to guests</span>
          </div>
        </div>
        <div className={styles.gfRight}>
          <div className={styles.gfStat}>
            <span className={styles.gfStatValue}>4.95</span>
            <span className={styles.gfStatLabel}>★★★★★</span>
          </div>
          <div className={styles.gfDivider}></div>
          <div className={styles.gfStat}>
            <span className={styles.gfStatValue}>19</span>
            <span className={styles.gfStatLabel}>Reviews</span>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Host Section */}
      <section className={styles.hostSection}>
        <div className={styles.hostHeader}>
          <Image 
            src={listing.host.image} 
            alt={listing.host.name} 
            width={40} 
            height={40} 
            className={styles.avatarImage} 
          />
          <div>
            <h2 className={styles.hostTitle}>Hosted by Mirashya Homes</h2>
            <p className={styles.hostMeta}>2 years hosting</p>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Highlights */}
      <section className={styles.highlightsSection}>
        <div className={styles.highlightItem}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="M26.5 2a2.5 2.5 0 0 1 2.48 2.17l.02.33v4.18L32 12v3l-3 3.5V26a4 4 0 0 1-3.8 3.99l-.2.01h-3a4 4 0 0 1-3.99-3.8L18 26v-5.2l-3.4 3.79-2.22-1.98L17.55 17h-2.1l-5.16 5.67-2.22-1.98L11.55 17h-7.1v-2h7.94l-5.63-6.23 2.22-1.98L13.88 12h2.2l3.4-3.76-2.22-1.98 5.16-5.67L24.64 2.57z"></path></svg>
          <div>
            <h3 className={styles.highlightTitle}>Outdoor entertainment</h3>
            <p className={styles.highlightDesc}>The pool and alfresco dining are great for summer trips.</p>
          </div>
        </div>
        <div className={styles.highlightItem}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="M29 6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h26zm0 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-13 8h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zm-5 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2z"></path></svg>
          <div>
            <h3 className={styles.highlightTitle}>Designed for staying cool</h3>
            <p className={styles.highlightDesc}>Beat the heat with the A/C and ceiling fan.</p>
          </div>
        </div>
        <div className={styles.highlightItem}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="M22 2a4 4 0 0 1 3.99 3.8L26 6v14a4 4 0 0 1-3.8 3.99l-.2.01h-4v6h-2v-6h-4v6h-2v-6H6a4 4 0 0 1-3.99-3.8L2 20V6a4 4 0 0 1 3.8-3.99L6 2h16zM6 4a2 2 0 0 0-1.99 1.85L4 6v14a2 2 0 0 0 1.85 1.99L6 22h16a2 2 0 0 0 1.99-1.85L24 20V6a2 2 0 0 0-1.85-1.99L22 4H6zm11 11h-2v3h2v-3zm-6 0h-2v3h2v-3zm6-5h-2v3h2v-3zm-6 0h-2v3h2v-3z"></path></svg>
          <div>
            <h3 className={styles.highlightTitle}>Self check-in</h3>
            <p className={styles.highlightDesc}>You can check in with the building staff.</p>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Description */}
      <section className={styles.section}>
        <div className={styles.translationNotice}>
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '16px', width: '16px', fill: 'currentcolor'}}><path d="M8.5 2a6 6 0 1 1-6 6 6 6 0 0 1 6-6zm0 1.5a4.5 4.5 0 1 0 4.5 4.5 4.5 4.5 0 0 0-4.5-4.5zM8 4h1v3H8V4zm0 4h1v1.5H8V8z"></path></svg>
          <span>Some info has been automatically translated. <button className={styles.showOriginalBtn}>Show original</button></span>
        </div>
        <div className={styles.description}>
          <p>🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors.</p>
          <p>Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's...</p>
          <button className={styles.showMoreBtn}>Show more &gt;</button>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Where you'll sleep */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Where you'll sleep</h2>
        <div className={styles.sleepingArrangements}>
          <div className={styles.sleepCard}>
            <div className={styles.sleepImageWrapper}>
              <Image src="https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg" alt="Bedroom" fill className={styles.sleepImage} style={{objectFit: 'cover'}} />
            </div>
            <h3 className={styles.bedTitle}>Bedroom</h3>
            <p className={styles.bedDesc}>1 double bed</p>
          </div>
          <div className={styles.sleepCard}>
            <div className={styles.sleepImageWrapper}>
              <Image src="https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg" alt="Living room" fill className={styles.sleepImage} style={{objectFit: 'cover'}} />
            </div>
            <h3 className={styles.bedTitle}>Living room</h3>
            <p className={styles.bedDesc}>1 sofa</p>
          </div>
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

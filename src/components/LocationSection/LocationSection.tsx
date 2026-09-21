import React from 'react';
import styles from './LocationSection.module.css';
import { Search, Plus, Minus, Home } from 'lucide-react';

export default function LocationSection() {
  return (
    <div id="location" className={styles.container}>
      <h2 className={styles.subtitle}>Candolim, Goa, India</h2>

      <div className={styles.mapContainer}>
        {/* Decorative Map Background */}
        <div className={styles.mapBg}>
          <div className={styles.waterArea}></div>
          <div className={styles.landArea}></div>
          
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>

          {/* Home Marker */}
          <div className={styles.marker}>
            <div className={styles.markerIcon}><Home size={20} color="white" /></div>
          </div>

          {/* Controls */}
          <button className={styles.searchBtn}><Search size={16} /></button>
          <div className={styles.zoomControls}>
            <button className={styles.zoomBtn}><Plus size={16} /></button>
            <div className={styles.zoomDivider}></div>
            <button className={styles.zoomBtn}><Minus size={16} /></button>
          </div>
        </div>
      </div>

      <p className={styles.exactLocationNotice}>Exact location will be provided after booking.</p>

      <h3 className={styles.highlightsTitle}>Neighbourhood highlights</h3>
      <p className={styles.highlightsDesc}>Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p>
      
      <button className={styles.showMoreBtn}>Show more &gt;</button>
    </div>
  );
}

import React from 'react';
import styles from './LocationSection.module.css';
import { Search, Plus, Minus, Home } from 'lucide-react';

export default function LocationSection() {
  return (
    <div id="location" className={styles.container}>
      <h2 className={styles.title}>Where you'll be</h2>
      <p className={styles.subtitle}>Candolim, Goa, India</p>

      <div className={styles.mapContainer}>
        {/* Decorative Map Background */}
        <div className={styles.mapBg}>
          <div className={styles.waterArea}></div>
          <div className={styles.landArea}></div>
          
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>

          {/* Home Marker */}
          <div className={styles.marker}>
            <div className={styles.markerIcon}>
              <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}><path d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>

          {/* Controls */}
          <button className={styles.searchBtn} aria-label="Search">
            <span style={{ width: '16px', height: '16px' }}>
              <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}><circle cx="14" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle><path d="M21 21l7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </span>
          </button>
          <div className={styles.zoomControls}>
            <button className={styles.zoomBtn} aria-label="Zoom in">
              <span className={styles.ico}>
                <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}><path d="M16 6v20M6 16h20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </span>
            </button>
            <div className={styles.zoomDivider}></div>
            <button className={styles.zoomBtn} aria-label="Zoom out">
              <span className={styles.ico}>
                <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}><path d="M6 16h20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </span>
            </button>
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

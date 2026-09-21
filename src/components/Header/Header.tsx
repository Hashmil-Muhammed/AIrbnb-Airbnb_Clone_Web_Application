import React from 'react';
import styles from './Header.module.css';
import { Search, Globe, Menu, User, Plane } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Plane className={styles.logoIcon} />
          <span className={styles.logoText}>airbnb</span>
        </Link>

        {/* Search Pill */}
        <div className={styles.searchBar}>
          <button className={styles.searchButton}>Anywhere</button>
          <span className={styles.divider}></span>
          <button className={styles.searchButton}>Any week</button>
          <span className={styles.divider}></span>
          <button className={`${styles.searchButton} ${styles.addGuests}`}>Add guests</button>
          <div className={styles.searchIconWrapper}>
            <Search className={styles.searchIcon} size={14} />
          </div>
        </div>

        {/* User Actions */}
        <div className={styles.userActions}>
          <button className={styles.hostButton}>Airbnb your home</button>
          <button className={styles.globeButton} aria-label="Choose a language and currency">
            <Globe size={18} />
          </button>
          <button className={styles.userMenu} aria-label="Main navigation menu">
            <Menu size={18} />
            <div className={styles.userAvatar}>
              <User size={18} color="#fff" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import styles from './Header.module.css';
import { Search, Globe, Menu, User, Plane } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Airbnb homepage">
          <svg width="102" height="32" fill="currentColor" style={{ display: 'block' }} viewBox="0 0 1000 1000">
            <path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-55 0-98 21-128.1 64-51 75.1-29 191.1 90 340.2-72 80-156.1 139-241.1 102-44-19-76-58-83-105-9-61 15-127.1 73-196.1 27-32 60.1-68.1 97.1-107.1l36.1-39.1c92.1-101.1 170.1-186.1 180.1-278.1 5-49-7-93-32-125.1-24-31-61-49-102.1-51-108.1-4-237.1 58-326.2 178.1L51.1 483.2C22 516.2 1 556.2 1 596.2c0 86 52 163.1 135.1 199.1 109.1 48 226.1-27 312.2-126.1 20 25 41 49 61 71 85 99 202.1 174.1 312.2 126.1 83-36 135.1-113.1 135.1-199.1 0-40-21-80-50-113.1l-3-4z"></path>
          </svg>
        </Link>

        {/* Search Pill */}
        <div className={styles.searchBar}>
          <button className={styles.searchButton}>Anywhere</button>
          <span className={styles.divider}></span>
          <button className={styles.searchButton}>Anytime</button>
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

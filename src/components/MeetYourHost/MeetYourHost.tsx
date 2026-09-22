import React from 'react';
import Image from 'next/image';
import { GraduationCap, Shield } from 'lucide-react';
import styles from './MeetYourHost.module.css';

export default function MeetYourHost() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Meet your host</h2>
      
      <div className={styles.content}>
        {/* Host Card */}
        <div className={styles.hostCardContainer}>
          <div className={styles.hostCard}>
            <div className={styles.hostCardInner}>
              <div className={styles.hostAvatarSection}>
                <div className={styles.avatarWrapper}>
                  <img src="/assets/images/avatars/mirashya_logo.png" className={styles.avatarLogo} alt="Mirashya Homes" />
                  <div className={styles.badge}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'currentColor'}}><path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z"></path></svg>
                  </div>
                </div>
                <div className={styles.hostName}>Mirashya</div>
                <div className={styles.hostNameSecondary}>Homes</div>
                <div className={styles.hostType}>Host</div>
              </div>
              
              <div className={styles.verticalDivider}></div>

              <div className={styles.hostStats}>
                <div className={styles.statBox}>
                  <span className={styles.statValue}>1,463</span>
                  <span className={styles.statLabel}>Reviews</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.statBox}>
                  <span className={styles.statValue}>4.68<span style={{fontSize: 14}}>★</span></span>
                  <span className={styles.statLabel}>Rating</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.statBox}>
                  <span className={styles.statValue}>2</span>
                  <span className={styles.statLabel}>Years hosting</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.hostInfoList}>
            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'currentColor'}}><path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z"></path></svg>
              </div>
              <span>Born in the 80s</span>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'currentColor'}}><path d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z"></path></svg>
              </div>
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* Host Details */}
        <div className={styles.hostDetails}>
          <h3 className={styles.cohostTitle}>Co-Hosts</h3>
          <div className={styles.cohostsGrid}>
            <div className={styles.cohost}>
              <img src="/assets/images/avatars/sharath.png" className={styles.cohostAvatar} alt="Sharath" />
              <span>Sharath</span>
            </div>
            <div className={styles.cohost}>
              <img src="/assets/images/avatars/aman.png" className={styles.cohostAvatar} alt="Aman Dev Pahwa" />
              <span>Aman Dev Pahwa</span>
            </div>
            <div className={styles.cohost}>
              <img src="/assets/images/avatars/maria.png" className={styles.cohostAvatar} alt="Maria Karen Priyanka" />
              <span>Maria Karen Priyanka</span>
            </div>
            <div className={styles.cohost}>
              <img src="/assets/images/avatars/simran.png" className={styles.cohostAvatar} alt="Simran" />
              <span>Simran</span>
            </div>
            <div className={styles.cohost}>
              <img src="/assets/images/avatars/aheesh.png" className={styles.cohostAvatar} alt="Pallavi" />
              <span>Pallavi</span>
            </div>
            <div className={styles.cohost}>
              <img src="/assets/images/avatars/samiksha.png" className={styles.cohostAvatar} alt="Sanyukta" />
              <span>Sanyukta</span>
            </div>
            <div className={styles.cohost}>
              <div className={styles.cohostAvatarInitials} style={{background: 'rgb(253, 231, 239)', color: 'rgb(212, 53, 110)'}}>S</div>
              <span>Shruti</span>
            </div>
            <div className={styles.cohost}>
              <div className={styles.cohostAvatarInitials} style={{background: 'rgb(231, 240, 253)', color: 'rgb(58, 110, 204)'}}>A</div>
              <span>Amisha</span>
            </div>
          </div>

          <h3 className={styles.cohostTitle}>Host details</h3>
          <p className={styles.detailText}>Response rate: 100%</p>
          <p className={styles.detailText}>Responds within an hour</p>
          <button className={styles.messageBtn}>Message host</button>

          <div className={styles.paymentProtection}>
            <div className={styles.paymentIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'currentColor'}}><path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z"></path></svg>
            </div>
            <p>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

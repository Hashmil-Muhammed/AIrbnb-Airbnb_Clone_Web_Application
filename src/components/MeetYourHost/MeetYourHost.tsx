import React from 'react';
import Image from 'next/image';
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
                  <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150" alt="Mirashya" width={104} height={104} className={styles.avatar} />
                  <div className={styles.badge}>
                    <svg viewBox="0 0 32 32" style={{height: 16, width: 16, fill: 'white'}}><path d="M16 31a15 15 0 1 1 15-15 15.02 15.02 0 0 1-15 15zm8.42-19.5L13.5 22.41l-5.91-5.91 1.41-1.42 4.5 4.5 9.5-9.5z"></path></svg>
                  </div>
                </div>
                <div className={styles.hostName}>Mirashya</div>
                <div className={styles.hostType}>Superhost</div>
              </div>
              <div className={styles.hostStats}>
                <div className={styles.statBox}>
                  <span className={styles.statValue}>1,463</span>
                  <span className={styles.statLabel}>Reviews</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.statBox}>
                  <span className={styles.statValue}>4.68<span style={{fontSize: 12}}>★</span></span>
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
        </div>

        {/* Host Details */}
        <div className={styles.hostDetails}>
          <h3 className={styles.cohostTitle}>Co-Hosts</h3>
          <div className={styles.cohostsGrid}>
            <div className={styles.cohost}>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=50&h=50" className={styles.cohostAvatar} />
              <span>Sharath</span>
            </div>
            <div className={styles.cohost}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=50&h=50" className={styles.cohostAvatar} />
              <span>Aman Dev Pahwa</span>
            </div>
            <div className={styles.cohost}>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50&h=50" className={styles.cohostAvatar} />
              <span>Maria Karen Priyanka</span>
            </div>
            <div className={styles.cohost}>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=50&h=50" className={styles.cohostAvatar} />
              <span>Simran</span>
            </div>
            <div className={styles.cohost}>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=50&h=50" className={styles.cohostAvatar} />
              <span>Pallavi</span>
            </div>
            <div className={styles.cohost}>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=50&h=50" className={styles.cohostAvatar} />
              <span>Sanyukta</span>
            </div>
          </div>

          <h3 className={styles.cohostTitle}>Host details</h3>
          <p className={styles.detailText}>Response rate: 100%</p>
          <p className={styles.detailText}>Responds within an hour</p>
          <button className={styles.messageBtn}>Message host</button>
        </div>
      </div>
    </div>
  );
}

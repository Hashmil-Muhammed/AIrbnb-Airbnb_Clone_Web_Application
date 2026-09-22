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
                  <div className={styles.avatarLogo}>
                    <span>MIRASHIYA</span>
                    <span className={styles.logoSub}>HOMES</span>
                  </div>
                  <div className={styles.badge}>
                    <svg viewBox="0 0 32 32" style={{height: 16, width: 16, fill: 'none', stroke: 'white', strokeWidth: 4}}><circle cx="16" cy="16" r="8"></circle></svg>
                  </div>
                </div>
                <div className={styles.hostName}>Mirashya</div>
                <div className={styles.hostNameSecondary}>Homes</div>
                <div className={styles.hostType}>Host</div>
              </div>
              
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
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="1.5"><path d="M12 2C9.5 2 7 4.5 7 8c0 3.5 3 6 5 9 2-3 5-5.5 5-9 0-3.5-2.5-6-5-6z"/><path d="M12 17v4"/></svg>
              <span>Born in the 80s</span>
            </div>
            <div className={styles.infoRow}>
              <GraduationCap size={24} strokeWidth={1.5} />
              <span>Where I went to school: NICMAR GOA</span>
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
            <div className={styles.cohost}>
              <div className={styles.cohostAvatarInitials} style={{backgroundColor: '#FFE1E8', color: '#E51D53'}}>S</div>
              <span>Shruti</span>
            </div>
            <div className={styles.cohost}>
              <div className={styles.cohostAvatarInitials} style={{backgroundColor: '#E0F0FF', color: '#0066CC'}}>A</div>
              <span>Amisha</span>
            </div>
          </div>

          <h3 className={styles.cohostTitle}>Host details</h3>
          <p className={styles.detailText}>Response rate: 100%</p>
          <p className={styles.detailText}>Responds within an hour</p>
          <button className={styles.messageBtn}>Message host</button>

          <div className={styles.paymentProtection}>
            <Shield size={24} strokeWidth={1.5} />
            <p>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

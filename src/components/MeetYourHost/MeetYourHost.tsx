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
            <Shield size={24} strokeWidth={1.5} />
            <p>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

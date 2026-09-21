import React from 'react';
import styles from './CalendarSection.module.css';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

export default function CalendarSection() {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>5 nights in Candolim</h2>
        <p className={styles.dates}>18 Oct 2026 - 23 Oct 2026</p>
      </div>

      <div className={styles.calendarsWrapper}>
        <div className={styles.month}>
          <div className={styles.monthHeader}>
            <button className={styles.navButton}><ChevronLeft size={20} /></button>
            <h3 className={styles.monthTitle}>October 2026</h3>
            <div style={{width: 32}}></div>
          </div>
          <div className={styles.grid}>
            <div className={styles.dayLabel}>S</div>
            <div className={styles.dayLabel}>M</div>
            <div className={styles.dayLabel}>T</div>
            <div className={styles.dayLabel}>W</div>
            <div className={styles.dayLabel}>T</div>
            <div className={styles.dayLabel}>F</div>
            <div className={styles.dayLabel}>S</div>

            {/* Empty slots for Oct 2026 starts on Thursday */}
            <div></div><div></div><div></div><div></div>
            <div className={styles.day}>1</div>
            <div className={styles.day}>2</div>
            <div className={styles.day}>3</div>
            
            <div className={styles.day}>4</div>
            <div className={styles.day}>5</div>
            <div className={styles.day}>6</div>
            <div className={styles.day}>7</div>
            <div className={styles.day}>8</div>
            <div className={styles.day}>9</div>
            <div className={styles.day}>10</div>
            
            <div className={styles.day}>11</div>
            <div className={styles.day}>12</div>
            <div className={styles.day}>13</div>
            <div className={styles.day}>14</div>
            <div className={styles.day}>15</div>
            <div className={styles.day}>16</div>
            <div className={styles.day}>17</div>
            
            <div className={`${styles.day} ${styles.selectedStart}`}>18</div>
            <div className={`${styles.day} ${styles.selected}`}>19</div>
            <div className={`${styles.day} ${styles.selected}`}>20</div>
            <div className={`${styles.day} ${styles.selected}`}>21</div>
            <div className={`${styles.day} ${styles.selected}`}>22</div>
            <div className={`${styles.day} ${styles.selectedEnd}`}>23</div>
            <div className={styles.day}>24</div>
            
            <div className={styles.day}>25</div>
            <div className={styles.day}>26</div>
            <div className={styles.day}>27</div>
            <div className={styles.day}>28</div>
            <div className={styles.day}>29</div>
            <div className={styles.day}>30</div>
            <div className={styles.day}>31</div>
          </div>
        </div>

        <div className={styles.month}>
          <div className={styles.monthHeader}>
            <div style={{width: 32}}></div>
            <h3 className={styles.monthTitle}>November 2026</h3>
            <button className={styles.navButton}><ChevronRight size={20} /></button>
          </div>
          <div className={styles.grid}>
            <div className={styles.dayLabel}>S</div>
            <div className={styles.dayLabel}>M</div>
            <div className={styles.dayLabel}>T</div>
            <div className={styles.dayLabel}>W</div>
            <div className={styles.dayLabel}>T</div>
            <div className={styles.dayLabel}>F</div>
            <div className={styles.dayLabel}>S</div>

            {/* Nov 2026 starts on Sunday */}
            <div className={styles.day}>1</div>
            <div className={styles.day}>2</div>
            <div className={styles.day}>3</div>
            <div className={styles.day}>4</div>
            <div className={styles.day}>5</div>
            <div className={styles.day}>6</div>
            <div className={styles.day}>7</div>
            
            <div className={styles.day}>8</div>
            <div className={styles.day}>9</div>
            <div className={styles.day}>10</div>
            <div className={styles.day}>11</div>
            <div className={styles.day}>12</div>
            <div className={styles.day}>13</div>
            <div className={styles.day}>14</div>
            
            <div className={styles.day}>15</div>
            <div className={styles.day}>16</div>
            <div className={styles.day}>17</div>
            <div className={styles.day}>18</div>
            <div className={styles.day}>19</div>
            <div className={styles.day}>20</div>
            <div className={styles.day}>21</div>
            
            <div className={styles.dayDisabled}>22</div>
            <div className={styles.dayDisabled}>23</div>
            <div className={styles.dayDisabled}>24</div>
            <div className={styles.dayDisabled}>25</div>
            <div className={styles.dayDisabled}>26</div>
            <div className={styles.dayDisabled}>27</div>
            <div className={styles.dayDisabled}>28</div>

            <div className={styles.dayDisabled}>29</div>
            <div className={styles.dayDisabled}>30</div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.keyboardBtn}><Keyboard size={20} /></button>
        <button className={styles.clearBtn}>Clear dates</button>
      </div>
    </div>
  );
}

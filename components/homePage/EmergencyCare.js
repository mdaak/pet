import React from 'react';
import styles from '../../styles/home/EmergencyCare.module.css';

const EmergencyCare = () => {
    return (
        <div>
            <div className={styles.background}>
              <div className={styles.emergencyDiv}>
                  <div className={styles.emergencyCard}>
                      <p style={{color:'#0094df'}}>&#x260E;</p>
                      <h4 style={{color:"#023C57"}}>For Emergency Care Just Call Us</h4>
                      <p>Mon – Fri (9.00-6.00)</p>
                      <p>Sat – Sun (2.30-7.00)</p>
                      <button>+10(89) 8373 578</button>
                  </div>
              </div>
            </div>
            
        </div>
    );
};

export default EmergencyCare;
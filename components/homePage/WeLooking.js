import React from "react";
import styles from "../../styles/home/WeLooking.module.css";

const WeLooking = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.childDiv}>
        <div className={styles.textDiv}>
          <h2>We looking for helping hand</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            vokalia. Dvcuis <br/> aute serunt iruxvfg dhjkolohr indd re voluptate
          </p>
          <div className={styles.buttons}>
            <button>Learn More</button>
            <button>Make a Donation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeLooking;

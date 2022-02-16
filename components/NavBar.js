import React from "react";
import styles from "../styles/Nav.module.css";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      {/* nav bar top socalicone  section */}
      <div className={styles.navContainer}>
        <div className={styles.navIconSection}>
          <div>icon</div>
          <div>loction</div>
        </div>
        {/* nav bar router button section */}
        <div className={styles.navManuSection}>
          <div className={styles.navManuIcon}>icon</div>
          <div className={styles.navManuItems}>
              <ul>
                  <li>Home</li>
                  <li>Service</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <button>Get Quote</button>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

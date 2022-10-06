import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "../styles/Nav.module.css";

const NavBar = () => {
  const [data, setData] = useState(false)
  console.log(data)
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
          <div className={styles.navManuIcon}></div>
          {/* big screen   nav section */}
          <div className={styles.navManuItems}>
            <ul>
              <Link href='/'><a><li>Home</li></a></Link>
              <Link href='/service'><a><li>Service</li></a></Link>
              <Link href='/about'><a><li>About</li></a></Link>
              <Link href='/blog'><a><li>Blog</li></a></Link>
              <Link href='/contact'><a><li>Contact</li></a></Link>
              <button>
                <p>Get Quote</p>
              </button>
            </ul>
          </div>
        </div>
        {/* after hide smart device  nav section */}
        <div>
          <div className={styles.smartDevice}>
            <div className={styles.smartBar}>
              <span onClick={(e) => { setData(!data) }}>
                <span>Menu</span> &nbsp; <FaBars />
              </span>
            </div>
          </div>
          {
            data &&
            <div className={styles.smartOption}>
              <ul>
                <li>Home </li>
                <li>Service </li>
                <li>About </li>
                <li>Blog +</li>
                <li>Contact </li>
                <button> Get Quote</button>
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;

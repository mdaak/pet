import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/home/VideoPlay.module.css";

const VideoPlay = () => {
  return (
    <div className={styles.videoPlaySection}>
      <div className={styles.row}>
        <div className={styles.videoCard}>
          <div className={styles.playButton}>
            <Link href='https://www.youtube.com/watch?v=up68UAfH0d0&ab_channel=Mr.Mixer%27sWorld'>
            <a> <Image src="/play.jpg" alt="" height="100px" width="100px" /></a>
            </Link>
          </div>
        </div>
        <div className={styles.textCard}>
          <h2>Animals has come to mean so much in t live</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            vokalia. Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolo indd
            re voluptate velit esscillumlore eu quife nrulla parihatur.
            Excghcepteur sfwsignjnt occa cupidatat non more than aute.
          </p>
          <button>learn more</button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;

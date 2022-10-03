import Image from 'next/image';
import React from 'react';
import styles from '../styles/hero_section.module.css'
function HeroSection() {
    return (
        <div className={styles.container}>
            <div>
                <Image src='https://preview.colorlib.com/theme/thepetcare/assets/img/hero/h1_hero1.png.webp' alt='dog image' layout='fill' />
                <div className={styles.hero_text}>
                    <h1
                    >Saving Animals Changing Live</h1>
                    <p>Far far away, behind the word mountains, far from the countries vokalia.</p>
                    <button>Out Service</button>
                </div>
            </div>
        </div>

    )
}

export default HeroSection;
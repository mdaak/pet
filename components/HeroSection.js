import Image from 'next/image';
import React from 'react';
import styles from '../styles/hero_section.module.css'
function HeroSection() {
    return (
        <div className={styles.container}>
            <div className={styles.context}>
                <div className={styles.comtainer_image}>
                    <Image src='https://preview.colorlib.com/theme/thepetcare/assets/img/hero/h1_hero1.png.webp' alt='dog image'
                        layout='fill'
                    />
                </div>

                <div className={styles.hero_text}>
                    <div className={styles.hero_text_heading}>
                        <h1>Saving Animals <br/> Changing Live</h1>
                        <p>Far far away, behind the word mountains, far from the <br /> countries vokalia.</p>
                        <button>Out Service</button>
                    </div>
                    <div className={styles.hero_card}>
                        <div>
                            <Image src='https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xwoner-img.jpg.pagespeed.ic.1jiOSH1JZw.webp'  
                            height='150px'
                            width='150px'
                            alt='lady'/>
                        </div>
                        <div className={styles.hero_card_text}>
                            <p>The Kind of Care Your<br/>  Pets Deserve</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroSection;
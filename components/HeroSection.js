import Image from 'next/image';
import React from 'react';
import styles from '../styles/hero_section.module.css'
function HeroSection({hero_material}) { 
    const {img,heading1, heading2, contant1,  contant2,  cardImage, cardText}= hero_material;
    console.log('props data comming',img,heading1, heading2, contant1,  contant2,  cardImage)
    if(!img){
        return<div>
bal
        </div>
    }
    return (
        <div className={styles.container}>
            <div className={styles.context}>
                <div className={styles.comtainer_image}>
                    <Image src={img} alt='dog image'
                        layout='fill'
                    />
                </div>
                <div className={styles.hero_text}>
                    <div className={styles.hero_text_heading}>
                        <h1>{heading1}<br/> {heading2}</h1>
                        <p>{contant1}<br /> {contant2}</p>
                        <button>Out Service</button>
                    </div>
                    <div className={styles.hero_card}>
                        <div>
                            <Image src={cardImage}  
                            height='150px'
                            width='150px'
                            alt='lady'/>
                        </div>
                        <div className={styles.hero_card_text}>
                            <p>{cardText}<br/>  Pets Deserve</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroSection;
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/home/PetCareService.module.css";

const PetCareService = () => {
    const sliderData=[
        {
            id:'1',
            image:'https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices1.jpg.pagespeed.ic.YC-PMYqM1j.webp',
            name:'pet Training',
            para:'Far far away, behind the word mountains, far '
        }
        ,
        {
            id:'2',
            image:'https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices2.jpg.pagespeed.ic.JOkVat6AEA.webp',
            name:'pet Training',
            para:'Far far away, behind the word mountains, far '
        }
        ,
        {
            id:'3',
            image:'https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices3.jpg.pagespeed.ic.1hRXOJt85o.webp',
            name:'pet Training',
            para:'Far far away, behind the word mountains, far '
        }
        ,
        {
            id:'4',
            image:'https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices1.jpg.pagespeed.ic.YC-PMYqM1j.webp',
            name:'pet Training',
            para:'Far far away, behind the word mountains, far '
        }
        ,
        {
            id:'5',
            image:'https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices3.jpg.pagespeed.ic.1hRXOJt85o.webp',
            name:'pet Training',
            para:'Far far away, behind the word mountains, far '
        }
        ,
        {
            id:'6',
            image:'https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices3.jpg.pagespeed.ic.1hRXOJt85o.webp',
            name:'pet Training',
            para:'Far far away, behind the word mountains, far '
        }
        ,
        {
            id:'7',
            image:'https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices3.jpg.pagespeed.ic.1hRXOJt85o.webp',
            name:'pet Training',
            para:'Far far away, behind the word mountains, far '
        }
    
    ]
  return (
    <div className={styles.servicDiv}>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          
          className={styles.serviceSlider}
        >
         {
             sliderData.map((data, i)=>{
                 return(
                    <SwiperSlide 
                        key={i}
                       className={styles.slide}
                       style={{backgroundImage:`url(${data.image})`}}
                       >
                           <div className={styles.cardText}>
                               <h2>{data.name}</h2>
                               <p>{data.para}</p>
                           </div>
                       
                      </SwiperSlide>

                     
                 )
             })
         }
         
        </Swiper>
    </div>
  );
};

export default PetCareService;

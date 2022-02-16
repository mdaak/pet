import Image from "next/image";
import React from "react";
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/home/Swipers.module.css";

const swipe = [];

const Swipers = () => {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.childDiv}>
        <Swiper
          className={styles.swiper}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          effect-coverflow
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          
            <SwiperSlide className={styles.swiperSlider}>
              <div>
              <Image
                src="https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xtestimonial.png.pagespeed.ic.9W67cSLtTw.webp"
                alt=""
                height="100px"
                width="100px"
              />
              <p>
                <b>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </b>
              </p>
              <p>Pete Sariya</p>
              <p>Happy dog owner</p>
              </div>
            </SwiperSlide>
        
        </Swiper>
      </div>
    </div>
  );
};

export default Swipers;

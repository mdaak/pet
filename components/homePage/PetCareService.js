import React from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/home/PetCareService.module.css";

const swipe = [];


const PetCareService = () => {
  const sliderData = [
    {
      id: "1",
      image:
        "https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices1.jpg.pagespeed.ic.YC-PMYqM1j.webp",
      name: "pet Training",
      para: "Far far away, behind the word mountains, far ",
    },
    {
      id: "2",
      image:
        "https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices2.jpg.pagespeed.ic.JOkVat6AEA.webp",
      name: "pet Training",
      para: "Far far away, behind the word mountains, far ",
    },
    {
      id: "3",
      image:
        "https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices3.jpg.pagespeed.ic.1hRXOJt85o.webp",
      name: "pet Training",
      para: "Far far away, behind the word mountains, far ",
    },
    {
      id: "4",
      image:
        "https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices1.jpg.pagespeed.ic.YC-PMYqM1j.webp",
      name: "pet Training",
      para: "Far far away, behind the word mountains, far ",
    },
    {
      id: "5",
      image:
        "https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices3.jpg.pagespeed.ic.1hRXOJt85o.webp",
      name: "pet Training",
      para: "Far far away, behind the word mountains, far ",
    },
    {
      id: "6",
      image:
        "https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices3.jpg.pagespeed.ic.1hRXOJt85o.webp",
      name: "pet Training",
      para: "Far far away, behind the word mountains, far ",
    },
    {
      id: "7",
      image:
        "https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xservices3.jpg.pagespeed.ic.1hRXOJt85o.webp",
      name: "pet Training",
      para: "Far far away, behind the word mountains, far ",
    },
  ];
  return (
    <div className={styles.servicDiv}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        navigation
        autoplay = {true}
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.serviceSlider}
        breakpoints={{
          "340px": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "768px": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "1280px": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "1366px": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {sliderData.map((data, i) => {
          return (
            <SwiperSlide
              key={i}
              className={styles.slide}
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <div className={styles.cardText}>
                <h2>{data.name}</h2>
                <p>{data.para}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PetCareService;

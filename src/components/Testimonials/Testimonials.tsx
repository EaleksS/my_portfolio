import React from 'react';
import styles from './Testimonials.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonialsData = [
  {
    tid: 1,
    name: 'Имя Фамилия',
    title: '---',
    comment: 'Comment',
  },
  {
    tid: 2,
    name: 'Имя Фамилия',
    title: '---',
    comment: 'Comment',
  },
  {
    tid: 3,
    name: 'Имя Фамилия',
    title: '---',
    comment: 'Comment',
  },
  {
    tid: 4,
    name: 'Имя Фамилия',
    title: '---',
    comment: 'Comment',
  },
];

const Testimonials = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className={styles.testimonial} id="testimonials" data-aos="fade-up">
        <div className={styles.testimonials}>
          <Swiper
            className={`container ${styles.mySwiper}`}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {testimonialsData.map(({ tid, name, title, comment }) => (
              <SwiperSlide key={tid} className={styles.swiperSlide}>
                <div>
                  <h1>{name}</h1>
                  <h2>Project: {title}</h2>
                  <hr></hr>
                  <p>{comment}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.testiBtn}>
        <button>Все Отзывы</button>
      </div>
    </>
  );
};

export default Testimonials;

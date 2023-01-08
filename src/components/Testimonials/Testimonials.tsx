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
    name: 'ANTONIO ANDERSON',
    title: 'Project: Landin page for travel company',
    comment:
      'Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has cease too the decay.',
  },
  {
    tid: 2,
    name: 'ANTONIO ANDERSON',
    title: 'Project: Landin page for travel company',
    comment:
      'Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has cease too the decay.',
  },
  {
    tid: 3,
    name: 'ANTONIO ANDERSON',
    title: 'Project: Landin page for travel company',
    comment:
      'Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has cease too the decay.',
  },
  {
    tid: 4,
    name: 'ANTONIO ANDERSON',
    title: 'Project: Landin page for travel company',
    comment:
      'Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has cease too the decay.',
  },
];

const Testimonials = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
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
                <h2>{title}</h2>
                <hr></hr>
                <p>{comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

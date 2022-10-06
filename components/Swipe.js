// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipe = ({producto_img}) => {
    console.log("Hello world");
  return (
    <Swiper
      // install Swiper modules
      style={{
        "--swiper-navigation-color": "cyan",
        "--swiper-pagination-color": "cyan",
        "--swiper-navigation-size": "25px",
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView="auto"
      loop={true}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
     
      onSlideChange={() => console.log('slide change')}
      className='lg:w-1/2 h-80 '
      breakpoints= {{

          // when window width is <= 499px
          499: {
              slidesPerView: 1,
              spaceBetweenSlides: 50
            },
            // when window width is <= 999px
            699: {
                slidesPerView: 1,
                spaceBetweenSlides: 50
            },
            999: {
                slidesPerView: 1,
                spaceBetweenSlides: 50
            }
        }
    }

    >
        {producto_img.map((img) => {
            return(

                <SwiperSlide key={img.id} className='pb-12'>
                <img loading="lazy" key={img.id} alt="ecommerce" className="w-full mt-6 h-60 lg:justify-center bg-slate-600 hover:bg-sky-700 hover:scale-105 transition-all  object-cover object-center rounded border border-gray-200" src={`https://crypton.cl${img.image}`} />

              </SwiperSlide>
            )
        })}


    </Swiper>
  );
};

export default Swipe

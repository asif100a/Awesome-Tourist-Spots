// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-300px, 0px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const BannerSlider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

                className='swiper_container rounded-3xl'
            >
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/prLDmLS/Golden-Gate-Bridge-22-jpg.webp" alt="Golden Gate Bridge, San Francisco, California" className='w-full h-[540px] rounded-3xl' />
                    <div className="absolute w-full h-full top-0 right-0 left-0 -bottom-6 bg-black bg-opacity-30 rounded-3xl"></div>
                    <div className='absolute top-28 left-32 z-10'>
                        <Reveal keyframes={customAnimation}>
                            <h1 className='text-5xl font-bold text-orange-200'>Golden Gate Bridge, <br /> San Francisco, <br /> California</h1>
                        </Reveal>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/VVB853w/AP-17363654872151.webp" alt="Niagara falls" className='w-full h-[540px] rounded-3xl' />
                    <div className="absolute w-full h-full top-0 right-0 left-0 -bottom-6 bg-black bg-opacity-30 rounded-3xl"></div>
                    <div className='absolute top-28 left-32 z-10'>
                        <Reveal keyframes={customAnimation}>
                            <h1 className='text-5xl font-bold text-orange-200'>Niagara falls, <br /> New York, <br /> USA</h1>
                        </Reveal>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/tLy02CX/Notre-Dame-Basilica-Getty-Images-624753712.webp" alt="Notre-Dame Basilica" className='w-full h-[540px] rounded-3xl' />
                    <div className="absolute w-full h-full top-0 right-0 left-0 -bottom-6 bg-black bg-opacity-30 rounded-3xl"></div>
                    <div className='absolute top-28 left-32 z-10'>
                        <Reveal keyframes={customAnimation}>
                            <h1 className='text-5xl font-bold text-orange-200'>Notre-Dame Basilica, <br /> Montreal, Quebec H2Y 1T1, <br /> Canada</h1>
                        </Reveal>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/ZGZbqfc/99.jpg" alt="Ibirapuera Park, São Paulo" className='w-full h-[540px] rounded-3xl' />
                    <div className="absolute w-full h-full top-0 right-0 left-0 -bottom-6 bg-black bg-opacity-30 rounded-3xl"></div>
                    <div className='absolute top-28 left-32 z-10'>
                        <Reveal keyframes={customAnimation}>
                            <h1 className='text-5xl font-bold text-orange-200'>Ibirapuera Park, <br /> São Paulo, <br /> Brazil</h1>
                        </Reveal>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/zN368BK/1626392873055.jpg" alt="Mexico City, Mexico" className='w-full h-[540px] rounded-3xl' />
                    <div className="absolute w-full h-full top-0 right-0 left-0 -bottom-6 bg-black bg-opacity-30 rounded-3xl"></div>
                    <div className='absolute top-28 left-32 z-10'>
                        <Reveal keyframes={customAnimation}>
                            <h1 className='text-5xl font-bold text-orange-200'>Mexico City, <br /> Mexico</h1>
                        </Reveal>
                    </div>
                </SwiperSlide>
                <div className='mt-6'>

                </div>
            </Swiper>


        </div>
    );
};

export default BannerSlider;
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
import { Typewriter } from 'react-simple-typewriter'

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
                    <img src="https://i.ibb.co/prLDmLS/Golden-Gate-Bridge-22-jpg.webp" alt="Golden Gate Bridge, San Francisco, California" className='w-full h-96 lg:h-[540px] rounded-3xl' />
                    <div className="absolute w-full h-full top-0 right-0 left-0 -bottom-6 bg-black bg-opacity-30 rounded-3xl"></div>
                    <div className='absolute top-8 lg:top-28 left-10 lg:left-32 z-10'>
                        <Reveal keyframes={customAnimation}>
                            <h1 className='text-3xl lg:text-5xl font-bold text-orange-100'>Golden Gate Bridge, <br /> San Francisco, <br /> California</h1>
                        </Reveal>
                            <p className='text-orange-200 w-[36rem] mt-6' style={{ fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean. The structure links the U.S. city of San Francisco, California—the northern tip of the San Francisco Peninsula—to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait.']}
                                    loop
                                    cursor
                                    cursorStyle='✍️'
                                    typeSpeed={30}
                                    deleteSpeed={30}
                                    delaySpeed={1500}
                                />
                            </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/VVB853w/AP-17363654872151.webp" alt="Niagara falls" className='w-full h-96 lg:h-[540px] rounded-3xl' />
                    <div className="absolute w-full h-full top-0 right-0 left-0 -bottom-6 bg-black bg-opacity-30 rounded-3xl"></div>
                    <div className='absolute top-8 lg:top-28 left-10 lg:left-32 z-10'>
                        <Reveal keyframes={customAnimation}>
                            <h1 className='text-3xl lg:text-5xl font-bold text-orange-50'>Niagara falls, <br /> New York, <br /> USA</h1>
                        </Reveal>
                        <p className='text-orange-100 w-[36rem] mt-6' style={{ fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Niagara Falls is a city in Niagara County, New York, United States. As of the 2020 census, the city had a total population of 48,671.[2] It is adjacent to the Niagara River, across from the city of Niagara Falls, Ontario, and named after the famed Niagara Falls which they share. The city is within the Buffalo–Niagara Falls metropolitan area and the Western New York region.']}
                                    loop
                                    cursor
                                    cursorStyle='✍️'
                                    typeSpeed={30}
                                    deleteSpeed={30}
                                    delaySpeed={1500}
                                />
                            </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/tLy02CX/Notre-Dame-Basilica-Getty-Images-624753712.webp" alt="Notre-Dame Basilica" className='w-full h-96 lg:h-[540px] rounded-3xl' />
                    <div className="absolute w-full h-full top-0 right-0 left-0 -bottom-6 bg-black bg-opacity-30 rounded-3xl"></div>
                    <div className='absolute top-8 lg:top-28 left-10 lg:left-32 z-10'>
                        <Reveal keyframes={customAnimation}>
                            <h1 className='text-3xl lg:text-5xl font-bold text-orange-100'>Notre-Dame Basilica, <br /> Montreal, Quebec H2Y 1T1, <br /> Canada</h1>
                        </Reveal>
                        <p className='text-orange-200 w-[36rem] mt-6' style={{ fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Notre-Dame Basilica (French: Basilique Notre-Dame) is a minor basilica of the Catholic Church in the historic Old Montreal district of Montreal in Quebec, Canada. It is located at 110 Notre-Dame Street West, at the corner of Saint Sulpice Street. It is situated next to the Saint-Sulpice Seminary and faces the Place Armes square.']}
                                    loop
                                    cursor
                                    cursorStyle='✍️'
                                    typeSpeed={30}
                                    deleteSpeed={30}
                                    delaySpeed={1500}
                                />
                            </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/ZGZbqfc/99.jpg" alt="Ibirapuera Park, São Paulo" className='w-full h-96 lg:h-[540px] rounded-3xl' />
                    <div className="absolute w-full h-full top-0 right-0 left-0 -bottom-6 bg-black bg-opacity-30 rounded-3xl"></div>
                    <div className='absolute top-8 lg:top-28 left-10 lg:left-32 z-10'>
                        <Reveal keyframes={customAnimation}>
                            <h1 className='text-3xl lg:text-5xl font-bold text-orange-100'>Ibirapuera Park, <br /> São Paulo, <br /> Brazil</h1>
                        </Reveal>
                        <p className='text-orange-200 w-[36rem] mt-6' style={{ fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Ibirapuera Park (Portuguese: Parque Ibirapuera) is an urban park in São Paulo. It comprises 158 hectares (approx. 390 acres) between Av. República do Líbano, Av. Pedro Alvares Cabral, and Av. IV Centenário, and is the most visited park in South America, with 14.4 million visits in 2017.']}
                                    loop
                                    cursor
                                    cursorStyle='✍️'
                                    typeSpeed={30}
                                    deleteSpeed={30}
                                    delaySpeed={1500}
                                />
                            </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/zN368BK/1626392873055.jpg" alt="Mexico City, Mexico" className='w-full h-96 lg:h-[540px] rounded-3xl' />
                    <div className="absolute w-full h-full top-0 right-0 left-0 -bottom-6 bg-black bg-opacity-30 rounded-3xl"></div>
                    <div className='absolute top-8 lg:top-28 left-10 lg:left-32 z-10'>
                        <Reveal keyframes={customAnimation}>
                            <h1 className='text-3xl lg:text-5xl font-bold text-orange-100'>Mexico City, <br /> Mexico</h1>
                        </Reveal>
                        <p className='text-orange-200 w-[36rem] mt-6' style={{ fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Mexico City is the oldest capital city in the Americas and one of two founded by Indigenous people.[c] The city was originally built on a group of islands in Lake Texcoco by the Mexica around 1325, under the name Tenochtitlan. It was almost completely destroyed in the 1521 siege of Tenochtitlan and subsequently redesigned and rebuilt in accordance with the Spanish urban standards.']}
                                    loop
                                    cursor
                                    cursorStyle='✍️'
                                    typeSpeed={30}
                                    deleteSpeed={30}
                                    delaySpeed={1500}
                                />
                            </p>
                    </div>
                </SwiperSlide>
                <div className='mt-6'>

                </div>
            </Swiper>


        </div>
    );
};

export default BannerSlider;
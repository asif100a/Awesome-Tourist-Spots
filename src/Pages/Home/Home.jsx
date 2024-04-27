// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
    return (
        <div>
            <h1>This is home component</h1>
            {/* https://i.ibb.co/VVB853w/AP-17363654872151.webp */}


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
                        <div className="absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-black bg-opacity-30"></div>
                        <div className='absolute top-28 left-32 z-10'>
                            <h1 className='text-5xl font-bold text-orange-200'>Golden Gate Bridge, <br /> San Francisco, <br /> California</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/VVB853w/AP-17363654872151.webp" alt="Niagara falls" className='w-full h-[540px] rounded-3xl' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/ZJSNqSh/Night-view-Times-Square-New-York-City.webp" alt="Time square new york city" className='w-full h-[540px] rounded-3xl' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/xSmh2j2/WDW-50th-Evergreen-Magic-Kingdom-Landing-Page-V2-16x9.jpg" alt="Walt Disney World Resort, Florida" className='w-full h-[540px] rounded-3xl' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/mJP3qpX/57124149-9b01-4768-8c0f-8a195ec181bb.jpg" alt="Universal Studios Hollywood, California" className='w-full h-[540px] rounded-3xl' />
                    </SwiperSlide>
                </Swiper>


            </div>

        </div>
    );
};

export default Home;
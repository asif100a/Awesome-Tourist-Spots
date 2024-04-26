// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

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
                    className='rounded-3xl'
                >
                    <SwiperSlide><img src="https://i.ibb.co/prLDmLS/Golden-Gate-Bridge-22-jpg.webp" alt="Golden Gate Bridge, San Francisco, California" className='w-full h-[540px] rounded-3xl' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/VVB853w/AP-17363654872151.webp" alt="Niagara falls" className='w-full h-[540px] rounded-3xl' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/ZJSNqSh/Night-view-Times-Square-New-York-City.webp" alt="Time square new york city" className='w-full h-[540px] rounded-3xl' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/xSmh2j2/WDW-50th-Evergreen-Magic-Kingdom-Landing-Page-V2-16x9.jpg" alt="Walt Disney World Resort, Florida" className='w-full h-[540px] rounded-3xl' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/mJP3qpX/57124149-9b01-4768-8c0f-8a195ec181bb.jpg" alt="Universal Studios Hollywood, California" className='w-full h-[540px] rounded-3xl' /></SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default Home;
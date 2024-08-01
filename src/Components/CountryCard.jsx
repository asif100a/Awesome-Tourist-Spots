import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import './styles.css';
// import required modules
import { Autoplay } from 'swiper/modules';
import './countryCard.css';

const CountryCard = () => {
    const [countryDatas, setCountryDatas] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-side-lemon.vercel.app/countryCards')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                return res.json();
            })
            .then(data => {
                setCountryDatas(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Swiper
                spaceBetween={100}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        centeredSlides: true
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }}
            >

                <div>
                    {
                        countryDatas.map(data => (
                            <SwiperSlide key={data?._id}>
                                <Link to={`/country_spots`} className="flex justify-center items-center" state={data?.country_name}>
                                    <div className="max-w-64 rounded-md dark:bg-gray-50 dark:text-gray-900 flex flex-col justify-center items-center p-2 mt-12">
                                        <img src={data?.img_url} alt="" className="object-cover object-center w-56 h-56 rounded-full gradient-border dark:bg-gray-500" />
                                        <div className="mt-1 mb-2 p-2 shadow-md bg-gradient-to-br from-[#f6c459] to-[#f871c0] rounded-lg text-white text-center">
                                            <h2 className="text-xl font-semibold tracking-wide">{data?.country_name}</h2>
                                            <p className="dark:text-gray-800">{data?.short_description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper >
        </>
    );
};

export default CountryCard;
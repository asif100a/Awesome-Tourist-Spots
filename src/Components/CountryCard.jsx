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

const CountryCard = () => {
    const [countryDatas, setCountryDatas] = useState([]);

    useEffect(() => {
        // fetch('https://assignment-10-server-side-lemon.vercel.app/countryCards')
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
                slidesPerView={3}
                // centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 mx-auto w-fit ">

                    {
                        countryDatas.map(data => (
                            <SwiperSlide key={data?._id}>
                                <Link to={`/country_spots`} state={data?.country_name}>
                                    <div className="max-w-64 rounded-md dark:bg-gray-50 dark:text-gray-900 flex flex-col justify-center items-center hover:border p-2 mt-12">
                                        <img src={data?.img_url} alt="" className="object-cover object-center w-56 h-56 rounded-full border dark:bg-gray-500" />
                                        <div className="mt-1 mb-2 p-2 shadow-md rounded-lg text-center">
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
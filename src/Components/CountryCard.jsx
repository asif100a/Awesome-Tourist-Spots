import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountryCard = () => {
    const [countryDatas, setCountryDatas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/countryCards')
            .then(res => res.json())
            .then(data => {
                setCountryDatas(data)
            })
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 mx-auto w-fit ">

            {
                countryDatas.map(data => (
                    <Link to={`/country_spots`} state={data?.country_name} key={data?._id}>
                        <div className="max-w-64 rounded-md dark:bg-gray-50 dark:text-gray-900 flex flex-col justify-center items-center hover:border p-2 mt-12">
                            <img src={data?.img_url} alt="" className="object-cover object-center w-56 h-56 rounded-full border dark:bg-gray-500" />
                            <div className="mt-1 mb-2 p-2 shadow-md rounded-lg text-center">
                                <h2 className="text-xl font-semibold tracking-wide">{data?.country_name}</h2>
                                <p className="dark:text-gray-800">{data?.short_description}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }


        </div>
    );
};

export default CountryCard;
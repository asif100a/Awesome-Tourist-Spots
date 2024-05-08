import { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const CountryCardDetails = () => {
    const touristSpotCards = useLoaderData();
    const location = useLocation();

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        // Filter specific country data
        const filteredData = touristSpotCards.filter(card => card?.country_name === location.state);
        setCardData(filteredData);
    }, [location?.state])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
            {
                cardData.map(card => (
                    <div key={card?._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="">
                            <img className="rounded-t-lg" src={card?.img_url} alt="Tourist spot" />
                        </div>
                        <div className="p-5 space-y-3">
                            <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card?.spot_name}</h3>
                            <p><span className="font-bold">Country:</span> {card?.country_name}</p>
                            <p><span className="font-bold">Location:</span> {card?.location}</p>
                            <p><span className="font-bold">Average cost:</span> {card?.total_cost}</p>
                            <div>
                                <p className="font-bold">Short description:</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card?.description.slice(0, 100)}</p>
                            </div>
                            <Link to={`/tourist_card_details/${card?._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                view details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default CountryCardDetails;
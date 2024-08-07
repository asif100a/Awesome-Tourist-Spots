import { useEffect, useState } from "react";
import TouristCard from "./TouristCard";

const TouristSpot = () => {
    const america = "America's";
    const travelers = "traveler's";
    const [spotCards, setSpotCards] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL}/touristSpotCards`)
            .then(res => res.json())
            .then(data => {
                setSpotCards(data);
                setLoader(false)
            });
    }, []);


    return (
        <div className="mt-16 relative">
            <div className="text-border w-fit mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center w-auto lg:w-[36rem] mx-auto px-1 py-3 capitalize">Find your tours from most popular tourist spots</h1>
            </div>
            <p className="text-center w-[95%] lg:w-[48rem] mx-auto mt-6">You can choose your tours to go {america} most popular tourist spots. Are you ready to embark on an unforgettable journey through some of {america} most iconic destinations? Look no further! Our curated selection of tours offers an array of experiences tailored to suit every {travelers} taste,</p>

            {
                loader && <>
                    <div className="flex justify-center items-center h-40">
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
                </>
            }



            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 w-fit h-fit mx-auto">
                {
                    spotCards.map(spotCard => <TouristCard key={spotCard._id} spotCard={spotCard} />)
                }
            </div>

        </div>
    );
};

export default TouristSpot;
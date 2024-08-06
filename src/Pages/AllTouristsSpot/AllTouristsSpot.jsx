import { useLoaderData } from "react-router-dom";
import SingleUserTourist from "../../Components/SingleUserTourist";
import "./allTouristSpots.css";
import { useState } from "react";

const AllTouristsSpot = () => {
    const touristData = useLoaderData();
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);

    // Toggle the dirrection
    const toggleDropDown = () => {
        setIsOpenDropDown(true);
    };

    return (
        <section>
            <div className="text-center text-border mx-auto w-fit mb-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center w-auto lg:w-[36rem] mx-auto px-8 py-3 capitalize">All tourists spot section</h1>
            </div>

            <div className="mx-auto text-center w-fit rounded-full py-[1.5px] px-[1.5px] bg-gradient-to-br from-[#f6c459] to-[#f871c0]">
                <div className="bg-white ease-in-out transition-all duration-300 hover:bg-gradient-to-br hover:from-[#f6c459] hover:to-[#f871c0] inline-flex items-center dark:bg-violet-600 dark:text-gray-100 dark:divide-gray-300 rounded-full dropdown">
                    <div tabIndex={0} role="button" className={`flex justify-center px-3 hover:text-white `}>
                        <button type="button" className="px-3 font-semibold">Sort by</button>
                        <button onClick={toggleDropDown} type="button" title="Toggle dropdown" className="p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </div>
                    <ul tabIndex={0} className="dropdown-content top-14 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Low-High</a></li>
                        <li><a>High-Low</a></li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-6 mt-6">
                {
                    touristData.map(data => <SingleUserTourist key={data._id} data={data}></SingleUserTourist>)
                }
            </div>
        </section>
    );
};

export default AllTouristsSpot;
import { useLoaderData } from "react-router-dom";
import { GiCheckeredFlag } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

const TouristCardDetails = () => {
    const touristCard = useLoaderData();
    const { country_name, description, img_url, location, spot_name, total_cost } = touristCard;

    return (
        <div>
            <h1 className="text-4xl font-medium">Details about {spot_name}</h1>
            <div className="max-w-full p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 mt-6">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="space-y-2">
                        <img src={img_url} alt="" className="block min-w-[74rem] rounded-md max-h-[600px] dark:bg-gray-500" />
                    </div>
                </div>
                <div className="flex gap-12 mt-3">
                    <div className="space-y-2 w-3/5">
                        <h3 className="text-4xl font-semibold dark:text-violet-600 mb-3">{spot_name}</h3>
                        <p className="leading-snug dark:text-gray-600">{description}</p>
                    </div>

                        <section>
                            <div className="container max-w-full mx-auto  px-6">
                                

                                <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
                                    <div className="relative flex flex-col md:flex-row items-center">
                                        <div className=" my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                                            <div className="py-6 bg-white text-black rounded-lg shadow-lg overflow-hidden">
                                                <div className="block text-left text-sm sm:text-md max-w-sm  mt-2 text-black px-3">
                                                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-start tracking-wide">
                                                    {spot_name}
                                                    </h1>
                                                </div>

                                                <div className="flex flex-wrap mt-6 px-6">
                                                    <ul className="space-y-3"> 
                                                        <li className="flex items-center">
                                                                <GiCheckeredFlag />
                                                            <span className="text-gray-700 text-lg ml-2"><span className="font-medium">Country name:</span> {country_name}  </span>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <FaCity />
                                                            <span className="text-gray-700 text-lg ml-2"
                                                            ><span className="font-medium">Location:</span> {location}</span>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <GiMoneyStack />
                                                            <span className="text-gray-700 text-lg ml-2"><span className="font-medium">Total cost:</span> {total_cost}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </section>

                        
                    </div>
                </div>
            </div>
    );
};

export default TouristCardDetails;
import { useLoaderData } from "react-router-dom";
import { BsPersonCheck } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLandmarkFlag } from "react-icons/fa6";
import { TbCurrentLocation } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FcOvertime } from "react-icons/fc";
import { IoTimerOutline } from "react-icons/io5";
import "./allTouristDetails.css";

const AllTouristDetails = () => {
    const travellers = "Traveller's";
    const touristData = useLoaderData()
    const { name, email, img_url, tourist_spot_name, country_name, location, average_cost, total_visitor, season, travel_time, description } = touristData;

    return (
        <div className="border-box mx-3">
            <div className="flex flex-col xl:flex-row justify-center bg-base-100 p-6">
                <img src={img_url} alt="Tourist spot image" className="w-full xl:w-1/2 rounded-2xl" />

                <div className="xl:ml-8 mt-3 xl:mt-0">
                    <h2 className="card-title text-2xl mb-3">{tourist_spot_name}</h2>

                    <ul className="text-sm text-gray-600 space-y-3 mb-6 mt-3 lg:mt-6">
                        <li className="mb-2 flex items-center">
                            <BsPersonCheck className="mr-2 w-5 h-5" />
                            <span className="text-base font-bold">Traveller : <span className="font-normal">{name}</span></span>
                        </li>
                        <li className="mb-2 flex items-center">
                            <MdOutlineMarkEmailRead className="mr-2 w-5 h-5" />
                            <span className="text-base font-bold">{travellers} email : <span className="font-normal">{email}</span></span>
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaLandmarkFlag className="mr-2 w-5 h-5" />
                            <span className="text-base font-bold">Country : <span className="font-normal">{country_name}</span></span>
                        </li>
                        <li className="mb-2 flex items-center">
                            <TbCurrentLocation className="mr-2 w-5 h-5" />
                            <span className="text-base font-bold">Location : <span className="font-normal">{location}</span></span>
                        </li>
                        <li className="flex items-center">
                            <FaSackDollar className="mr-2 w-5 h-5" />
                            <span className="text-base font-bold">Average cost : <span className="font-normal">{average_cost}</span></span>
                        </li>
                        <li className="flex items-center">
                            <IoIosPeople className="mr-2 w-5 h-5" />
                            <span className="text-base font-bold">Total visitors per year : <span className="font-normal">{total_visitor}</span></span>
                        </li>
                        <li className="flex items-center">
                            <FcOvertime className="mr-2 w-5 h-5" />
                            <span className="text-base font-bold">Travel season : <span className="font-normal">{season}</span></span>
                        </li>
                        <li className="flex items-center">
                            <IoTimerOutline className="mr-2 w-5 h-5" />
                            <span className="text-base font-bold">Travel time : <span className="font-normal">{travel_time}</span></span>
                        </li>
                        <li className="flex items-start flex-col text-base pt-3 pr-6">
                            <span className="font-bold mb-2">Description :</span> 
                            <span>{description}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AllTouristDetails;
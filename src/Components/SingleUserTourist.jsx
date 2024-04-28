import PropTypes from "prop-types";
import { GiReceiveMoney } from "react-icons/gi";
import { LuTimer } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { GiWinterHat } from "react-icons/gi";
import { Link } from "react-router-dom";

const SingleUserTourist = ({ data }) => {
    const { _id, name, email, img_url, tourist_spot_name, country_name, location, average_cost, total_visitor, season, travel_time, description } = data;

    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={img_url} alt="Tourist spot image" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-xl text-gray-500 font-bold tracking-wide flex flex-col">Tourist spot name: <span className="font-semibold text-2xl text-gray-800">{tourist_spot_name}</span></h2>
            </div>
            <ul className="text-base text-gray-800 space-y-3 mb-6 mt-6">

                <li className="mb-2 flex items-center">
                    <GiReceiveMoney className="mr-2 text-blue-500 w-6 h-6" />
                    <span className="font-bold mr-2">Average cost:</span> {average_cost}
                </li>
                <li className="flex items-center">
                    <LuTimer className="mr-2 text-green-600 w-6 h-6" />
                    <span className="font-bold mr-2">Total visitors per year:</span> {total_visitor}
                </li>
                <li className="flex items-center">
                    <IoMdTime className="mr-2 text-red-600 w-6 h-6" />
                    <span className="font-bold mr-2">Travel time:</span> {travel_time}
                </li>
                <li className="flex items-center">
                    <GiWinterHat className="mr-2 text-yellow-500 w-6 h-6" />
                    <span className="font-bold mr-2">Travel season:</span> {season}
                </li>
            </ul>
            <Link to={`/all_tourist_details/${_id}`}>
                <button type="button" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-white">View Details</button>
            </Link>
        </div>
    );
};

SingleUserTourist.propTypes = {
    data: PropTypes.object
};

export default SingleUserTourist;
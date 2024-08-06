import PropTypes from "prop-types";
import { GiReceiveMoney } from "react-icons/gi";
import { LuTimer } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { GiWinterHat } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./singleUserTourist.css";

const SingleUserTourist = ({ data }) => {
    const { _id, img_url, tourist_spot_name, average_cost, total_visitor, season, travel_time } = data;

    return (
        <div className="p-0 card-border">
            <div className="max-w-xs p-6 dark:bg-gray-50 dark:text-gray-900">
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
                    <button type="button" className="btn btn-border p-0 transition-all ease-in-out duration-300 hover:bg-gradient-to-br hover:from-[#f6c459] hover:to-[#f871c0] hover:border-transparent hover:text-white flex items-center justify-center w-full font-semibold tracking-wide">View Details</button>
                </Link>
            </div>
        </div>
    );
};

SingleUserTourist.propTypes = {
    data: PropTypes.object
};

export default SingleUserTourist;
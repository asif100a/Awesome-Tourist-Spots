import { useLoaderData } from "react-router-dom";
import SingleUserTourist from "../../Components/SingleUserTourist";

const AllTouristsSpot = () => {
    const touristData = useLoaderData();

    return (
        <div>
            <h1>All tourists spot section</h1>

            <div className="mx-auto text-center">
                <div className="btn inline-flex items-center dark:bg-violet-600 dark:text-gray-100 dark:divide-gray-300 rounded-full dropdown">
                    <div tabIndex={0} role="button" className="flex justify-center">
                        <button type="button" className="px-3 mr-2">Sort by</button>
                        <button type="button" title="Toggle dropdown" className="p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </div>
                    <ul tabIndex={0} className="dropdown-content top-14 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>10000</a></li>
                        <li><a>11000-20000</a></li>
                        <li><a>21000-30000</a></li>
                        <li><a>31000-40000</a></li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-6 mt-6">
                {
                    touristData.map(data => <SingleUserTourist key={data._id} data={data}></SingleUserTourist>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;
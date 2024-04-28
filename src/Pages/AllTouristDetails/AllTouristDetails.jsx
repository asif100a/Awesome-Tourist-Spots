import { useLoaderData } from "react-router-dom";

const AllTouristDetails = () => {
    const travellers = "Traveller's";
    const touristData = useLoaderData()
    const { _id, name, email, img_url, tourist_spot_name, country_name, location, average_cost, total_visitor, season, travel_time, description } = touristData;

    return (
        <div>
            <div className="flex  bg-base-100 shadow-xl">
                <img src={img_url} alt="Tourist spot image" className="w-1/2" />

                <div className="ml-8">
                    <h2 className="card-title mb-3">{tourist_spot_name}</h2>
                    <p></p>
                    <p></p>
                    <p></p>

                    <ul className="text-sm text-gray-600 mb-6 mt-6">
                        <li className="mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            Traveller : {name}
                        </li>
                        <li className="mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            {travellers} email : {email}
                        </li>
                        <li className="mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            Country : {country_name}
                        </li>
                        <li className="mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            Location : {location}
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            Average cost : {average_cost}
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            Total visitors per year : {total_visitor}
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            Travel season : {season}
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            Travel time : {travel_time}
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            Description on tourist spot : {description}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AllTouristDetails;
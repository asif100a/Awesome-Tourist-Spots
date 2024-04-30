import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TouristCard = ({ spotCard }) => {
    const { _id, img_url, location, spot_name, total_cost } = spotCard;
    

    return (
        <div className='relative'>
           
            <div className="max-w-xs rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.03] dark:bg-gray-50 dark:text-gray-800 mt-6">
                <img src={img_url} alt="Spot image" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide h-28">{spot_name}</h2>
                        <div className='h-14'>
                            <p className="dark:text-gray-800">{location}</p>
                            <p className='text-lg font-semibold mt-3'>Tour price: {total_cost}</p>
                        </div>
                    </div>
                    <Link to={`/tourist_card_details/${_id}`}>
                        <button type="button" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-600 text-white hover:bg-green-700">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

TouristCard.propTypes = {
    spotCard: PropTypes.object
};

export default TouristCard;


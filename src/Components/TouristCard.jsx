import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './touristCard.css';

const TouristCard = ({ spotCard }) => {
    const { _id, img_url, location, spot_name, total_cost } = spotCard;
    

    return (
        <div className='relative'>
            <div className="max-w-xs rounded-[22px] shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.03] dark:bg-gray-50 dark:text-gray-800 card-border mt-6">
                <img src={img_url} alt="Spot image" className="object-cover object-center w-full rounded-t-[22px] h-56 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold tracking-wide h-16">{spot_name}</h2>
                        <div className='h-14'>
                            <p className="dark:text-gray-800 text-sm">{location}</p>
                            <p className='text-base font-semibold mt-3'>Tour price: <span className='font-normal'>{total_cost}</span></p>
                        </div>
                    </div>
                    <Link to={`/tourist_card_details/${_id}`} className=''>
                        <button type="button" className="btn btn-border p-0 transition-all ease-in-out duration-300 hover:bg-gradient-to-br hover:from-[#f6c459] hover:to-[#f871c0] hover:border-transparent hover:text-white flex items-center justify-center w-full font-semibold tracking-wide">View Details</button>
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


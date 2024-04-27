import PropTypes from 'prop-types';

const TouristCard = ({spotCard}) => {
    console.log(spotCard)
    const {country_name, description, img_url, location, spot_name, total_cost} = spotCard;

    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mt-6">
            <img src={img_url} alt="Spot image" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{spot_name}</h2>
                    <p className="dark:text-gray-800">{location}</p>
                    <p className='text-lg font-semibold'>Tour price: {total_cost}</p>
                </div>
                <button type="button" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
            </div>
        </div>
    );
};

TouristCard.propTypes = {
    spotCard: PropTypes.object
};

export default TouristCard;


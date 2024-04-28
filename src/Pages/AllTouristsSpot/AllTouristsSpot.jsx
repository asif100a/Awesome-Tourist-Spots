import { useLoaderData } from "react-router-dom";
import SingleUserTourist from "../../Components/SingleUserTourist";

const AllTouristsSpot = () => {
    const touristData = useLoaderData();

    return (
        <div>
            <h1>All tourists spot section</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-6">
                {
                    touristData.map(data => <SingleUserTourist key={data._id} data={data}></SingleUserTourist>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;
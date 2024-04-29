import { useEffect, useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";

const MyList = () => {
    const { user } = useAuthContext();

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myTouristSpot/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data);
            })
    }, [user?.email]);

    return (
        <div>
            <h1>My List section</h1>

            <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Tourist spot</th>
                            <th>Traveler</th>
                            <th>Spot name</th>
                            <th>Total price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map(data => <tr className="overflow-x-auto" key={data._id}>

                                {/* row 1 */}
                                <td>

                                    <div className="avatar">
                                        <div className="mask rounded-sm w-16 h-16">
                                            <img src={data.img_url} alt="Tourist spot" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{data?.name}</div>
                                            <div className="text-sm opacity-50">{data?.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {data?.tourist_spot_name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{data?.location}</span>
                                </td>
                                <td>{data?.average_cost}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
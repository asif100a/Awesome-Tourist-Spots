import { useEffect, useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import { useForm } from "react-hook-form";

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

    // Get value from update modal input field
    const {
        register,
        handleSubmit,
        // resetField,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        const {
            tourist_spot_name,
            img_url,
            location,
            country,
            average_cost,
            total_visitors,
            description,
        } = data;

        console.log(data)

        const season = e.target.season.value;
        const travel_time = e.target.travel_time.value;

        const userTouristSpot = { tourist_spot_name, img_url, country, location, average_cost, total_visitors, season, travel_time, description };

        // // Send data to the backend
        // fetch('http://localhost:5000/addTouristSpot', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userTouristSpot)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Successful',
        //                 text: 'You have added tourist spot successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'close'
        //             })
        //             resetField("name");
        //             resetField("email");
        //             resetField("img_url");
        //             resetField("tourist_spot_name");
        //             resetField("country_name");
        //             resetField("location");
        //             resetField("average_cost");
        //             resetField("total_visitor");
        //             resetField("description");
        //         }
        //     });


    };

    // // Update data in the server side
    // const handleUpdate = () => {
    //     fetch(``)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         });
    // };

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
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn" >Update</button>
                                    <dialog className="">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div>
                                                    <div className="flex flex-col gap-2 mt-3">
                                                        <label htmlFor="tourist_spot_name">Tourist spot name</label>
                                                        <input
                                                            type="text"
                                                            name="tourist_spot_name"
                                                            placeholder="Enter tourist spot name"
                                                            className="input input-bordered input-secondary w-full max-w-xs"
                                                            {...register("tourist_spot_name", { required: true })}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-2 mt-3">
                                                        <label htmlFor="img_url">Touist spot image url</label>
                                                        <input
                                                            type="text"
                                                            name="img_url"
                                                            placeholder="Enter tourist spot image url"
                                                            className="input input-bordered input-primary w-full max-w-xs"
                                                            {...register("img_url", { required: true })}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-2 mt-3">
                                                        <label htmlFor="location">Tourist spot location</label>
                                                        <input
                                                            type="text"
                                                            name="location"
                                                            placeholder="Enter tourist spot location"
                                                            className="input input-bordered input-accent w-full max-w-xs"
                                                            {...register("location", { required: true })}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-2 mt-3">
                                                        <label htmlFor="country_name">Country name</label>
                                                        <input
                                                            type="text"
                                                            name="country"
                                                            placeholder="Enter country name" className="input input-bordered input-warning w-full max-w-xs"
                                                            {...register("country", { required: true })}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-2 mt-3">
                                                        <label htmlFor="average_cost">Average cost</label>
                                                        <input
                                                            type="text"
                                                            name="average_cost" placeholder="Enter average cost"
                                                            className="input input-bordered input-info w-full max-w-xs"
                                                            {...register("average_cost", { required: true })}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-2 mt-3">
                                                        <label htmlFor="total_visitors">Total visitors per year</label>
                                                        <input
                                                            type="text"
                                                            name="total_visitors"
                                                            placeholder="Enter total visitors per year"
                                                            className="input input-bordered input-success w-full max-w-xs"
                                                            {...register("total_visitors", { required: true })}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-2 mt-3">
                                                        <h5>Choose a season</h5>
                                                        <select name="season" className="select select-bordered w-full">
                                                            <option value={'summer'}>Summer</option>
                                                            <option value={'autumn'}>Autumn</option>
                                                            <option value={'winter'}>Winter</option>
                                                            <option value={'spring'}>Spring</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex flex-col gap-2 mt-3">
                                                        <h5>Choose a travel time</h5>
                                                        <select name="travel_time" className="select select-bordered w-full">
                                                            <option value={'7_days'}>7 days</option>
                                                            <option value={'10_days'}>10 days</option>
                                                            <option value={'15_days'}>15 days</option>
                                                            <option value={'18_days'}>18 days</option>
                                                            <option value={'21_days'}>21 days</option>
                                                            <option value={'1_month'}>1 month</option>
                                                            <option value={'2_months'}>2 months</option>
                                                            <option value={'3_months'}>3 months</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex flex-col gap-2 mt-3">
                                                        <label htmlFor="description">Short description</label>
                                                        <textarea
                                                            name="description"
                                                            className="textarea textarea-bordered"
                                                            placeholder="Write short description"
                                                            {...register("description", { required: true })}
                                                        ></textarea>
                                                    </div>
                                                    <div>
                                                        <button className="btn bg-green-500 text-white">Update</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="modal-action">
                                                <form method="dialog" className="flex gap-6">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn bg-red-600 text-white">Exit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
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
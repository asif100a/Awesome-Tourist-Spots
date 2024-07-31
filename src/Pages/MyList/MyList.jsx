import { useEffect, useRef, useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MyList = () => {
    const { user } = useAuthContext();
    const [datas, setDatas] = useState([]);
    const [defaultValue, setDefaultValue] = useState({});
    const [defaultSeason, setDefaultSeason] = useState("");
    const [defaultTravelTime, setDefaultTravelTime] = useState("");
    const [updateId, setUpdateId] = useState(null);

    useEffect(() => {
        fetch(`https://assignment-10-server-side-lemon.vercel.app/myTouristSpot/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDatas(data);
            })
    }, [user?.email]);

    // Get value from update modal input field
    const {
        register,
        handleSubmit,
    } = useForm();

    // Show input modal----------
    const textRef = useRef();

    const handleShowModal = (data) => {
        textRef.current.classList.remove('hidden');
        setDefaultValue(data);
        setUpdateId(data?._id);
        setDefaultSeason(data?.season);
        setDefaultTravelTime(data?.travel_time)
    };

    // Hide input modal----------
    const handleRemoveModal = () => {
        textRef.current.classList.add('hidden');
    };

    // Set default selected value in the select field
    const handleDefaultSeason = (e) => {
        setDefaultSeason(e.target.value);
    };
    const handleDefaultTravelTime = (e) => {
        setDefaultTravelTime(e.target.value);
    };

    const onSubmit = (data, e) => {
        let {
            tourist_spot_name,
            img_url,
            location,
            country_name,
            average_cost,
            total_visitor,
            description,
        } = data;

        // Set default input if user do not change value
        if (tourist_spot_name === "") {
            tourist_spot_name = defaultValue?.tourist_spot_name;
            // console.log(tourist_spot_name);
        }
        if (img_url === "") {
            img_url = defaultValue?.img_url;
        }
        if (location === "") {
            location = defaultValue?.location;
        }
        if (country_name === "") {
            country_name = defaultValue?.country_name;
        }
        if (average_cost === "") {
            average_cost = defaultValue?.average_cost;
        }
        if (total_visitor === "") {
            total_visitor = defaultValue?.total_visitor;
        }
        if (description === "") {
            description = defaultValue?.description;
        }

        // Get selected value from select field
        const season = e.target.season.value;
        const travel_time = e.target.travel_time.value;

        const userTouristSpot = { tourist_spot_name, img_url, country_name, location, average_cost, total_visitor, season, travel_time, description };

        console.log(userTouristSpot)

        // Send data to the backend
        fetch(`https://assignment-10-server-side-lemon.vercel.app/addTouristSpot/${updateId}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'You have updated tourist spot successfully',
                        icon: 'success',
                        confirmButtonText: 'close'
                    });
                    window.location.reload();
                }
            });


    };

    // Handling Delete method
    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success text-white mx-2",
                cancelButton: "btn btn-danger bg-red-600 text-white mx-2"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-side-lemon.vercel.app/addTouristSpot/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your tourist spot has been deleted.",
                                icon: "success"
                            });
                            const remainingData = datas.filter(data => data?._id !== id);
                            setDatas(remainingData);
                        }
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your delete confirmation is canceled",
                    icon: "error"
                });
            }
        });


    };


    return (
        <div className="relative h-screen">
            <h1>My List section</h1>

            <div ref={textRef} className="hidden absolute w-full h-full top-0 flex justify-center z-10">
                <div className="modal-box w-[32rem]">
                    <h3 className="font-bold text-2xl text-center pb-3">Update your tourist spot</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="flex flex-col gap-2 mt-3">
                                <label htmlFor="tourist_spot_name">Tourist spot name</label>
                                <input
                                    type="text"
                                    name="tourist_spot_name"
                                    defaultValue={defaultValue.tourist_spot_name}
                                    className="input input-bordered input-secondary w-full "
                                    {...register("tourist_spot_name")}
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <label htmlFor="img_url">Touist spot image url</label>
                                <input
                                    type="text"
                                    name="img_url"
                                    defaultValue={defaultValue.img_url}
                                    className="input input-bordered input-primary w-full "
                                    {...register("img_url")}
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <label htmlFor="location">Tourist spot location</label>
                                <input
                                    type="text"
                                    name="location"
                                    defaultValue={defaultValue.location}
                                    className="input input-bordered input-accent w-full "
                                    {...register("location")}
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <label htmlFor="country_name">Country name</label>
                                <input
                                    type="text"
                                    name="country_name"
                                    defaultValue={defaultValue.country_name}
                                    className="input input-bordered input-warning w-full "
                                    {...register("country_name")}
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <label htmlFor="average_cost">Average cost</label>
                                <input
                                    type="text"
                                    name="average_cost"
                                    defaultValue={defaultValue.average_cost}
                                    className="input input-bordered input-info w-full "
                                    {...register("average_cost")}
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <label htmlFor="total_visitor">Total visitors per year</label>
                                <input
                                    type="text"
                                    name="total_visitor"
                                    defaultValue={defaultValue.total_visitor}
                                    className="input input-bordered input-success w-full "
                                    {...register("total_visitor")}
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <h5>Choose a season</h5>
                                <select name="season" value={defaultSeason} onChange={handleDefaultSeason} className="select select-bordered w-full">
                                    <option value={'summer'}>Summer</option>
                                    <option value={'autumn'}>Autumn</option>
                                    <option value={'winter'}>Winter</option>
                                    <option value={'spring'}>Spring</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <h5>Choose a travel time</h5>
                                <select name="travel_time" value={defaultTravelTime} onChange={handleDefaultTravelTime} className="select select-bordered w-full">
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
                                    defaultValue={defaultValue.description}
                                    {...register("description")}
                                ></textarea>
                            </div>
                            <div className="text-center mt-3">
                                <button className="btn w-32 bg-green-500 text-white">Update</button>
                            </div>
                        </div>
                    </form>
                    <div className="text-center mt-3">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={handleRemoveModal} className="btn bg-red-600 text-white">Exit</button>
                    </div>
                </div>
            </div>

            <div>
                <table className="table w-full">
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
                            datas.map(data => <>
                                <tr className="overflow-x-hidden" key={data._id}>

                                    {/* row 1 */}
                                    <td>

                                        <div className="lg:avatar">
                                            <div className="mask rounded-sm w-10 md:w-16 h-10 md:h-16">
                                                <img src={data.img_url} alt="Tourist spot" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center lg:gap-3">
                                            <div className="w-10 lg:w-auto">
                                                <div className="font-bold">{data?.name}</div>
                                                <div className="text-sm opacity-50 hidden md:flex">{data?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {data?.tourist_spot_name}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{data?.location}</span>
                                    </td>
                                    <td>{data?.average_cost}</td>
                                    <td className="hidden md:flex">
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button onClick={() => handleShowModal(data)} className="btn btn-sm" >Update</button>

                                    </td>
                                    <td className="hidden md:flex">
                                        <button onClick={() => handleDelete(data?._id)} className="btn btn-sm">Delete</button>
                                    </td>
                                </tr>
                                <tr className="flex md:hidden">
                                    <td>
                                        <button onClick={() => handleShowModal(data)} className="btn btn-sm" >Update</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(data?._id)} className="btn btn-sm">Delete</button>
                                    </td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>



            </div>

        </div>
    );
};

export default MyList;
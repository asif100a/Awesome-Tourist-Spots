import { useEffect, useRef, useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./myList.css";

const MyList = () => {
    const { user } = useAuthContext();
    const [datas, setDatas] = useState([]);
    const [defaultValue, setDefaultValue] = useState({});
    const [defaultSeason, setDefaultSeason] = useState("");
    const [defaultTravelTime, setDefaultTravelTime] = useState("");
    const [updateId, setUpdateId] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL}/myTouristSpot/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data);
                setLoader(false);
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
        fetch(`${import.meta.env.VITE_URL}/addTouristSpot/${updateId}`, {
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
                cancelButton: "btn btn-danger bg-red-500 hover:bg-red-600 text-white mx-2"
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
                fetch(`${import.meta.env.VITE_URL}/addTouristSpot/${id}`, {
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
        <section className="relative h-screen">
            <div className="text-center text-border mx-auto w-fit mb-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center w-auto lg:w-[16rem] mx-auto px-8 py-3 capitalize">My lists</h1>
            </div>

            <div ref={textRef} className="hidden absolute w-full h-full top-0 flex justify-center items-center z-[5]">
                <div className="form-border h-fit">
                    <div className="p-0 modal-box shadow-none w-[32rem]">
                        <h3 className="font-bold text-2xl text-center">Update your tourist spot</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-3">
                            <div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <label htmlFor="tourist_spot_name">Tourist spot name</label>
                                    <input
                                        type="text"
                                        name="tourist_spot_name"
                                        defaultValue={defaultValue.tourist_spot_name}
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                        {...register("tourist_spot_name")}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <label htmlFor="img_url">Touist spot image url</label>
                                    <input
                                        type="text"
                                        name="img_url"
                                        defaultValue={defaultValue.img_url}
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                        {...register("img_url")}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <label htmlFor="location">Tourist spot location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        defaultValue={defaultValue.location}
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                        {...register("location")}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <label htmlFor="country_name">Country name</label>
                                    <input
                                        type="text"
                                        name="country_name"
                                        defaultValue={defaultValue.country_name}
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                        {...register("country_name")}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <label htmlFor="average_cost">Average cost</label>
                                    <input
                                        type="text"
                                        name="average_cost"
                                        defaultValue={defaultValue.average_cost}
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                        {...register("average_cost")}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <label htmlFor="total_visitor">Total visitors per year</label>
                                    <input
                                        type="text"
                                        name="total_visitor"
                                        defaultValue={defaultValue.total_visitor}
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                        {...register("total_visitor")}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <h5>Choose a season</h5>
                                    <select name="season" value={defaultSeason} onChange={handleDefaultSeason} className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                    >
                                        <option value={'summer'}>Summer</option>
                                        <option value={'autumn'}>Autumn</option>
                                        <option value={'winter'}>Winter</option>
                                        <option value={'spring'}>Spring</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <h5>Choose a travel time</h5>
                                    <select name="travel_time" value={defaultTravelTime} onChange={handleDefaultTravelTime} className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                    >
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
                                        className="w-full h-36 px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                        defaultValue={defaultValue.description}
                                        {...register("description")}
                                    ></textarea>
                                </div>
                                <div className="mt-6 flex justify-between">
                                    <button type="submit" className="btn w-32 bg-green-500 hover:bg-green-600 text-white">Update</button>

                                    {/* if there is a button in form, it will close the modal */}
                                    <button type="button" onClick={handleRemoveModal} className="btn bg-red-500 hover:bg-red-700 text-white">Exit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Tourist spot</th>
                            <th>Traveler</th>
                            <th>Spot name</th>
                            <th>Total price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="gradient-border-top">
                        {
                            loader && <tr>
                                <td colSpan={6}>
                                    <div className="flex justify-center items-center h-40">
                                        <span className="loading loading-ring loading-lg"></span>
                                    </div>
                                </td>
                            </tr>
                        }
                        {
                            datas.map(data => <>
                                <tr key={data._id}>

                                    {/* row 1 */}
                                    <td>
                                        <div className="lg:avatar">
                                            <div className="mask rounded-sm w-16 h-16 pt-3">
                                                <img src={data.img_url} alt="Tourist spot" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <p className="font-semibold text-">{data?.name}</p>
                                            <p className="bg-gradient-to-br from-[#f6c459] to-[#f871c0] text-white text-xs px-2 rounded-full w-fit">{data?.email}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="w-40 lg:w-auto">
                                            <p>{data?.tourist_spot_name}</p>
                                            <p className="bg-gradient-to-br from-[#f6c459] to-[#f871c0] text-white text-xs px-2 rounded-full w-fit">{data?.location}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{data?.average_cost}</p>
                                    </td>
                                    <td>
                                        <div onClick={() => handleShowModal(data)} className="h-fit w-fit p-[1.5px] flex justify-center items-center bg-gradient-to-br from-[#f6c459] to-[#f871c0] rounded-[9px]">
                                            <button className="btn h-[34px] min-h-[34px] px-[14px] bg-white outline-none border-none shadow-none hover:bg-gradient-to-br hover:from-[#f6c459] hover:to-[#f871c0] hover:text-white">Update</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => handleDelete(data?._id)} className="h-fit w-fit p-[1.5px] flex justify-center items-center bg-gradient-to-br from-[#f6c459] to-[#f871c0] rounded-[9px]">
                                            <button className="btn h-[34px] min-h-[34px] px-[14px] bg-white outline-none border-none shadow-none hover:bg-gradient-to-br hover:from-[#f6c459] hover:to-[#f871c0] hover:text-white">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>



            </div>

        </section>
    );
};

export default MyList;
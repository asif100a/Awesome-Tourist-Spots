import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import logo from "../../assets/Add a heading (1).png";
import "./addTourist.css";
import useAuthContext from "../../Hooks/useAuthContext";

const AddTouristsSpot = () => {
    const spots = "spot's";
    const {user} = useAuthContext();

    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm()

    const onSubmit = (data, e) => {
        const {
            name,
            email,
            img_url,
            tourist_spot_name,
            country_name,
            location,
            average_cost,
            total_visitor,
            description,
        } = data;

        const season = e.target.season.value;
        const travel_time = e.target.travel_time.value;

        const userTouristSpot = { name, email, img_url, tourist_spot_name, country_name, location, average_cost, total_visitor, season, travel_time, description };

        // Send data to the backend
        fetch('${import.meta.env.VITE_URL}/addTouristSpot', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'You have added tourist spot successfully',
                        icon: 'success',
                        confirmButtonText: 'close'
                    })
                    resetField("name");
                    resetField("email");
                    resetField("img_url");
                    resetField("tourist_spot_name");
                    resetField("country_name");
                    resetField("location");
                    resetField("average_cost");
                    resetField("total_visitor");
                    resetField("description");
                }
            });


    };



    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="p-0 w-full md:w-[36rem] lg:w-[42rem] max-w-full md:max-w-xl lg:max-w-2xl form-border mx-3">
                <div className="w-auto m-6 rounded-lg">
                    <div className="flex justify-center mb-8">
                        <img src={logo} alt="Awesome Tourist Spots" className="w-30 h-20" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-500 capitalize mb-8">Add a tourist spot</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <div className="mb-4">
                                    <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
                                    <input
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0] mt-2"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && <span className="text-red-600">Please give your name</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block uppercase tracking-wide text-xs font-bold">Email</label>
                                    <input
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0] mt-2"
                                        type="email"
                                        name="email"
                                        value={user?.email}
                                        readOnly={true}
                                        placeholder="Enter your email"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="text-red-600">Please give your email</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block uppercase tracking-wide text-xs font-bold">Image URL</label>
                                    <input
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0] mt-2"
                                        type="text"
                                        name="img_url"
                                        placeholder="Enter tourist spot's image url"
                                        {...register("img_url", { required: true })}
                                    />
                                    {errors.email && <span className="text-red-600">Please write a tourist {spots} image url</span>}
                                </div>
                                <div className="md:flex mb-4">
                                    <div className="md:flex-1 md:pr-3">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Tourist Spot Name</label>
                                        <input
                                            className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0] mt-2"
                                            type="text"
                                            name="tourist_spot_name"
                                            placeholder="Write your tourist spot name"
                                            {...register("tourist_spot_name", { required: true })}
                                        />
                                        {errors.email && <span className="text-red-600">Please write a tourist {spots} name</span>}
                                    </div>
                                    <div className="md:flex-1 md:pl-3 mt-4 sm:mt-0">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Country Name</label>
                                        <input
                                            className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0] mt-2"
                                            type="text"
                                            name="country_name"
                                            placeholder="Write country name"
                                            {...register("country_name", { required: true })}
                                        />
                                        {errors.email && <span className="text-red-600">Please write a tourist {spots} country name</span>}
                                    </div>
                                </div>
                                <div className="md:flex mb-4">
                                    <div className="md:flex-1 md:pr-3">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Location</label>
                                        <input
                                            className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0] mt-2"
                                            type="text"
                                            name="location"
                                            placeholder="Write tourist spot location"
                                            {...register("location", { required: true })}
                                        />
                                        {errors.email && <span className="text-red-600">Please write a tourist {spots} location</span>}
                                    </div>
                                    <div className="md:flex-1 md:pl-3 mt-4 sm:mt-0">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Average Cost</label>
                                        <input
                                            className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0] mt-2"
                                            type="number"
                                            name="average_cost"
                                            placeholder="Write your average cost"
                                            {...register("average_cost", { required: true })}
                                        />
                                        {errors.email && <span className="text-red-600">Please add average cost</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 md:flex justify-between">
                            <div className="md:flex-1">
                                <h5 className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold px-0 md:px-3">Choose a season</h5>
                                <div className="mt-2 px-0 md:px-3">
                                    <select
                                        name="season"
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                    >
                                        <option value={'summer'}>Summer</option>
                                        <option value={'autumn'}>Autumn</option>
                                        <option value={'winter'}>Winter</option>
                                        <option value={'spring'}>Spring</option>
                                    </select>
                                </div>
                            </div>
                            <div className="md:flex-1 mt-4 md:mt-0">
                                <h5 className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold px-0 md:px-3">Choose your travel time</h5>
                                <div className="mt-2 px-0 md:px-3">
                                    <select
                                        name="travel_time"
                                        className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
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
                            </div>

                        </div>
                        <div className="w-full md:w-1/2 mb-4 px-0 md:px-3">
                            <h5 className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Total visitors per year</h5>
                            <input
                                type="number"
                                name="total_visitor"
                                placeholder="Write total visitors per year"
                                className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0] mt-2"
                                {...register("total_visitor", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">Please add total visitors per year</span>}
                        </div>
                        <div className="mb-6">
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <div className="">
                                    <legend className="block uppercase tracking-wide text-xs  font-bold">Short Description</legend>
                                </div>

                                <textarea
                                    className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0] mt-2"
                                    name="description"
                                    placeholder="Write a short description on your tourist spot..."
                                    rows="6"
                                    {...register("description", { required: true })}
                                ></textarea>
                                {errors.email && <span className="text-red-600">Please write short description about your tourist spot</span>}
                            </div>
                        </div>

                        <div className="md:flex">
                            <div className="md:flex-1 px-3 text-center md:text-right">
                                <input type="submit" value={'Add now'} className="w-32 hover:cursor-pointer bg-gradient-to-br from-[#f6c459] to-[#f871c0] text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f871c0] mb-2" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default AddTouristsSpot;
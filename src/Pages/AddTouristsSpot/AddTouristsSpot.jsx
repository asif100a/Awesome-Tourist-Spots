import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const AddTouristsSpot = () => {
    const spots = "spot's";

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
        fetch('http://localhost:5000/addTouristSpot', {
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

        <section className="w-[90%] lg:w-[70%] mx-auto p-4 shadow">
            <div className="md:flex">
                <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Create New Location</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-8">
                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                        <div className="mb-4">
                            <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
                            <input
                                className="w-full input input-bordered p-4 mt-2"
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
                                className="w-full input input-bordered p-4 mt-2"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">Please give your email</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block uppercase tracking-wide text-xs font-bold">Image URL</label>
                            <input
                                className="w-full input input-bordered p-4 mt-2"
                                type="text"
                                name="img_url"
                                placeholder="Enter your image url"
                                {...register("img_url", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">Please write a tourist {spots} image url</span>}
                        </div>
                        <div className="md:flex mb-4">
                            <div className="md:flex-1 md:pr-3">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Tourist Spot Name</label>
                                <input
                                    className="w-full input input-bordered p-4 mt-2"
                                    type="text"
                                    name="tourist_spot_name"
                                    placeholder="Write your tourist spot name"
                                    {...register("tourist_spot_name", { required: true })}
                                />
                                {errors.email && <span className="text-red-600">Please write a tourist {spots} name</span>}
                            </div>
                            <div className="md:flex-1 md:pl-3">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Country Name</label>
                                <input
                                    className="w-full input input-bordered p-4 mt-2"
                                    type="text"
                                    name="country_name"
                                    placeholder="Add country name"
                                    {...register("country_name", { required: true })}
                                />
                                {errors.email && <span className="text-red-600">Please write a tourist {spots} country name</span>}
                            </div>
                        </div>
                        <div className="md:flex mb-4">
                            <div className="md:flex-1 md:pr-3">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Location</label>
                                <input
                                    className="w-full input input-bordered p-4 mt-2"
                                    type="text"
                                    name="location"
                                    placeholder="Add tourist spot location"
                                    {...register("location", { required: true })}
                                />
                                {errors.email && <span className="text-red-600">Please write a tourist {spots} location</span>}
                            </div>
                            <div className="md:flex-1 md:pl-3">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Average Cost</label>
                                <input
                                    className="w-full input input-bordered p-4 border mt-2"
                                    type="text"
                                    name="average_cost"
                                    placeholder="Write your average cost"
                                    {...register("average_cost", { required: true })}
                                />
                                {errors.email && <span className="text-red-600">Please add average cost</span>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6 md:flex justify-between">
                    <div className="md:flex-1">
                        <h5 className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold px-3">Choose a season</h5>
                        <div className="mt-2 px-3 ">
                            <select name="season" className="select select-bordered w-full">
                                <option value={'summer'}>Summer</option>
                                <option value={'autumn'}>Autumn</option>
                                <option value={'winter'}>Winter</option>
                                <option value={'spring'}>Spring</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:flex-1">
                        <h5 className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold px-3">Choose your travel time</h5>
                        <div className="mt-2 px-3">
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
                    </div>

                </div>
                <div className="pl-3 w-1/2 mb-6 pr-3">
                    <h5 className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-2">Total visitors per year</h5>
                    <input
                        type="text"
                        name="total_visitor"
                        placeholder="Write total visitors per year"
                        className="input input-bordered   w-full "
                        {...register("total_visitor", { required: true })}
                    />
                    {errors.email && <span className="text-red-600">Please add total visitors per year</span>}
                </div>
                <div className="mb-6">
                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                        <div className="mb-2">
                            <legend className="block uppercase tracking-wide text-xs  font-bold">Short Description</legend>
                        </div>

                        <textarea
                            className="w-full textarea textarea-bordered p-4"
                            name="description"
                            placeholder="Write a short description on your tourist spot..."
                            rows="6"
                            {...register("description", { required: true })}
                        ></textarea>
                        {errors.email && <span className="text-red-600">Please write short description about your tourist spot</span>}
                    </div>
                </div>

                <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                    <div className="md:flex-1 px-3 text-center md:text-right mt-6">
                        <input
                            className="btn text-cream-lighter bg-brick hover:bg-brick-dark"
                            type="submit"
                            value="Add tourist spot"
                        />
                    </div>
                </div>
            </form>
        </section>

    );
};

export default AddTouristsSpot;
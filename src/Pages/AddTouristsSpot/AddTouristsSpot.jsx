const AddTouristsSpot = () => {
    return (

        <section className="w-[70%] mx-auto p-4 shadow">
            <div className="md:flex">
                <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Create New Location</h2>
            </div>
            <form>
                <div className="mb-8">
                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                        <div className="mb-4">
                            <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
                            <input className="w-full shadow-inner p-4 border-0 mt-2" type="text" name="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label className="block uppercase tracking-wide text-xs font-bold">Email</label>
                            <input className="w-full shadow-inner p-4 border-0 mt-2" type="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block uppercase tracking-wide text-xs font-bold">Image URL</label>
                            <input className="w-full shadow-inner p-4 border-0 mt-2" type="text" name="img_url" placeholder="Enter your image url" />
                        </div>
                        <div className="md:flex mb-4">
                            <div className="md:flex-1 md:pr-3">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Tourist Spot Name</label>
                                <input className="w-full shadow-inner p-4 border-0 mt-2" type="text" name="address_street" placeholder="Write your tourist spot name" />
                            </div>
                            <div className="md:flex-1 md:pl-3">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Country Name</label>
                                <input className="w-full shadow-inner p-4 border-0 mt-2" type="text" name="address_number" placeholder="Add country name" />
                            </div>
                        </div>
                        <div className="md:flex mb-4">
                            <div className="md:flex-1 md:pr-3">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Location</label>
                                <input className="w-full shadow-inner p-4 border-0 mt-2" type="text" name="lat" placeholder="Add tourist spot location" />
                            </div>
                            <div className="md:flex-1 md:pl-3">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Average Cost</label>
                                <input className="w-full shadow-inner p-4 border-0 mt-2" type="text" name="lon" placeholder="Write your average cost" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-8 md:flex justify-between">
                    <div className="md:flex-1">
                        <h5 className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold px-3">Choose a season</h5>
                        <div className="mt-2 px-3 ">
                            <select className="select select-bordered w-full">
                                <option>Summer</option>
                                <option>Autumn</option>
                                <option>Winter</option>
                                <option>Spring</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:flex-1">
                        <h5 className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold px-3">Choose your travel time</h5>
                        <div className="mt-2 px-3">
                            <select className="select select-bordered w-full">
                                <option>7 days</option>
                                <option>10 days</option>
                                <option>15 days</option>
                                <option>18 days</option>
                                <option>21 days</option>
                                <option>1 month</option>
                                <option>2 month</option>
                                <option>3 month</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="mb-6">
                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                        <div className="mb-2">
                            <legend className="block uppercase tracking-wide text-xs  font-bold">Short Description</legend>
                        </div>

                        <textarea className="w-full shadow-inner p-4 border-0" placeholder="Write a short description on your tourist spot..." rows="6"></textarea>
                    </div>
                </div>

                <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                    <div className="md:flex-1 px-3 text-center md:text-right mt-6">
                        <input className="btn text-cream-lighter bg-brick hover:bg-brick-dark" type="submit" value="Add tourist spot" />
                    </div>
                </div>
            </form>
        </section>

    );
};

export default AddTouristsSpot;
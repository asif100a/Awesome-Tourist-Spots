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
                                    <input className="w-full shadow-inner p-4 border-0" type="text" name="name" placeholder="Enter your name" />
                                </div>
                                <div className="mb-4">
                                    <label className="block uppercase tracking-wide text-xs font-bold">Email</label>
                                    <input className="w-full shadow-inner p-4 border-0" type="email" name="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-4">
                                    <label className="block uppercase tracking-wide text-xs font-bold">Image URL</label>
                                    <input className="w-full shadow-inner p-4 border-0" type="text" name="img_url" placeholder="Enter your image url" />
                                </div>
                                <div className="md:flex mb-4">
                                    <div className="md:flex-1 md:pr-3">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Tourist Spot Name</label>
                                        <input className="w-full shadow-inner p-4 border-0" type="text" name="address_street" placeholder="Write your tourist spot name" />
                                    </div>
                                    <div className="md:flex-1 md:pl-3">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Country Name</label>
                                        <input className="w-full shadow-inner p-4 border-0" type="text" name="address_number" placeholder="Add country name" />
                                    </div>
                                </div>
                                <div className="md:flex mb-4">
                                    <div className="md:flex-1 md:pr-3">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Location</label>
                                        <input className="w-full shadow-inner p-4 border-0" type="text" name="lat" placeholder="Add tourist spot location" />
                                    </div>
                                    <div className="md:flex-1 md:pl-3">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Average Cost</label>
                                        <input className="w-full shadow-inner p-4 border-0" type="text" name="lon" placeholder="Write your average cost" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex mb-8">

                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <div className="mb-4">
                                    <label className="block uppercase tracking-wide text-xs font-bold">Phone</label>
                                    <input className="w-full shadow-inner p-4 border-0" type="tel" name="phone" placeholder="(555) 555-5555" />
                                </div>
                                <div className="mb-4">
                                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">URL</label>
                                    <input className="w-full shadow-inner p-4 border-0" type="url" name="url" placeholder="acme.co" />
                                </div>
                                <div className="mb-4">
                                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Email</label>
                                    <input className="w-full shadow-inner p-4 border-0" type="email" name="email" placeholder="contact@acme.co" />
                                </div>
                            </div>
                        </div>
                        <div className="md:flex">

                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <div className="md:flex mb-4">
                                    <div className="md:flex-1 md:pr-3">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Facebook</label>
                                        <div className="w-full flex">
                                            <span className="text-xs py-4 px-2 bg-grey-light text-grey-dark">facebook.com/</span>
                                            <input className="flex-1 shadow-inner p-4 border-0" type="text" name="facebook" placeholder="acmeco" />
                                        </div>
                                    </div>
                                    <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Twitter</label>
                                        <div className="w-full flex">
                                            <span className="text-xs py-4 px-2 bg-grey-light text-grey-dark">twitter.com/</span>
                                            <input className="flex-1 shadow-inner p-4 border-0" type="text" name="twitter" placeholder="acmeco" />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex mb-4">
                                    <div className="md:flex-1 md:pr-3">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Instagram</label>
                                        <div className="w-full flex">
                                            <span className="text-xs py-4 px-2 bg-grey-light text-grey-dark">instagram.com/</span>
                                            <input className="flex-1 shadow-inner p-4 border-0" type="text" name="instagram" placeholder="acmeco" />
                                        </div>
                                    </div>
                                    <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Yelp</label>
                                        <div className="w-full flex">
                                            <span className="text-xs py-4 px-2 bg-grey-light text-grey-dark">yelp.com/</span>
                                            <input className="flex-1 shadow-inner p-4 border-0" type="text" name="yelp" placeholder="acmeco" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <div className="mb-3">
                                    <legend className="block uppercase tracking-wide text-xs  font-bold">Short Description</legend>
                                </div>

                                <textarea className="w-full shadow-inner p-4 border-0" placeholder="We build fine acmes." rows="6"></textarea>
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
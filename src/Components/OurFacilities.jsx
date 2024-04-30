const OurFacilities = () => {
    const nights = "night's"
    const wont = "won't"
    return (
        <div className="mt-16">
            <h1 className="text-4xl font-bold text-center">You will be able to get from us-</h1>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-fit">
                {/* 1 */}
                <div className="border-2 border-red-500 w-72 h-72 rounded-2xl rounded-t-full flex flex-col justify-center items-center gap-3 text-center">
                    <img src="https://i.ibb.co/z5rbqgN/destination-global-map-pin-travel-world-different-destinations-map-pins-512.webp" alt="Destination icon" className="w-16 h-16" />
                    <div>
                        <h3 className="text-2xl font-medium">Diverse destinations</h3>
                        <p className="mt-3">Our facilities are designed to cater to the diverse needs of travelers from around the globe, offering a blend of comfort, convenience, and excitement. </p>
                    </div>
                </div>
                {/* 2 */}
                <div className="border-2 border-red-500 w-72 h-72 rounded-2xl rounded-t-full flex flex-col justify-center items-center gap-3 text-center">
                    <img src="https://i.ibb.co/hfkwvtY/9956875.png" alt="Destination icon" className="w-16 h-16" />
                    <div>
                        <h3 className="text-2xl font-medium">Value for Money</h3>
                        <p className="mt-3">Enjoy comfortable and clean accommodations without breaking the bank. Our budget-friendly options ensure a good {nights} sleep at a price that {wont} strain your wallet. </p>
                    </div>
                </div>
                {/* 3 */}
                <div className="border-2 border-red-500 w-72 h-72 rounded-2xl rounded-t-full flex flex-col justify-center items-center gap-3 text-center">
                    <img src="https://i.ibb.co/Mp1bwBL/beautiful-mark-place-on-earth-glyph-icon-free-vector.jpg" alt="Destination icon" className="w-16 h-16" />
                    <div>
                        <h3 className="text-2xl font-medium">Beautiful Places</h3>
                        <p className="mt-3">Discover the hidden gems and breathtaking landscapes of each destination with our expertly guided tours.</p>
                    </div>
                </div>
                {/* 4 */}
                <div className="border-2 border-red-500 w-72 h-72 rounded-2xl rounded-t-full flex flex-col justify-center items-center gap-3 text-center">
                    <img src="https://i.ibb.co/Y0857CV/1792855.png" alt="Destination icon" className="w-16 h-16" />
                    <div>
                        <h3 className="text-2xl font-medium">Fast Booking</h3>
                        <p className="mt-3">Receive immediate confirmation of your booking so you can travel with peace of mind. Our fast and efficient system ensures that your reservation is processed promptly.</p>
                    </div>
                </div>
                {/* 5 */}
                <div className="border-2 border-red-500 w-72 h-72 rounded-2xl rounded-t-full flex flex-col justify-center items-center gap-3 text-center">
                    <img src="https://i.ibb.co/7RTHn9X/png-transparent-tech-support-team-illustration-thumbnail.png" alt="Destination icon" className="w-16 h-16" />
                    <div>
                        <h3 className="text-2xl font-medium">Support Team</h3>
                        <p className="mt-3">Our facilities are designed to cater to the diverse needs of travelers from around the globe, offering a blend of comfort, convenience, and excitement. </p>
                    </div>
                </div>
                {/* 6 */}
                <div className="border-2 border-red-500 w-72 h-72 rounded-2xl rounded-t-full flex flex-col justify-center items-center gap-3 text-center">
                    <img src="https://i.ibb.co/44dwfJB/8268817.png" alt="Destination icon" className="w-16 h-16" />
                    <div>
                        <h3 className="text-2xl font-medium">Passionate Travel</h3>
                        <p className="mt-3">Dive deep into the heart of each destination with our immersive cultural experiences. Explore each destination with passionate guides. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFacilities;
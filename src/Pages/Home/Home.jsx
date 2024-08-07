import BannerSlider from "../../Components/BannerSlider";
import CountryCard from "../../Components/CountryCard";
import OurFacilities from "../../Components/OurFacilities";
import TouristCounter from "../../Components/TouristCounter";
import TouristSpot from "../../Components/TouristSpot";
import './home.css'

const Home = () => {
    return (
        <div>
            <BannerSlider />

            <div className="mt-16">
                <div>
                    <div className="text-border w-fit mx-auto">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center px-8 py-3 capitalize">Dive into tour in America</h1>
                    </div>
                    <p className="w-[95%] mx-auto lg:w-[48rem] text-center mt-6">Everyone dreams of having an international vacation once in their lifetime, be it with family or friends. Nothing can be better than looking at the world differently with our world tour packages from Indian cities. Visiting a foreign land lets you experience and explore different cultures and traditions and you can get to know the locals better. If you are someone who is looking to have an eternal memory, then pay a visit to any of the foreign lands with our best world tour packages.</p>
                </div>
                <CountryCard />
            </div>

            <TouristSpot />
            <TouristCounter />
            <OurFacilities />

        </div>
    );
};

export default Home;
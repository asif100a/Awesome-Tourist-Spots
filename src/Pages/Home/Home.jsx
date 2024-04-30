import BannerSlider from "../../Components/BannerSlider";
import CountryCard from "../../Components/CountryCard";
import OurFacilities from "../../Components/OurFacilities";
import TouristCard from "../../Components/TouristCard";
import TouristCounter from "../../Components/TouristCounter";
import TouristSpot from "../../Components/TouristSpot";


const Home = () => {
    return (
        <div>


            <BannerSlider />

            <div className="mt-16">
                <h1 className="text-4xl font-bold text-center">Dive into tour in America</h1>
                <p className="w-[48rem] mx-auto text-center mt-6">Everyone dreams of having an international vacation once in their lifetime, be it with family or friends. Nothing can be better than looking at the world differently with our world tour packages from Indian cities. Visiting a foreign land lets you experience and explore different cultures and traditions and you can get to know the locals better. If you are someone who is looking to have an eternal memory, then pay a visit to any of the foreign lands with our best world tour packages.</p>
            </div>
            <CountryCard />

            <TouristSpot />
            <TouristCounter />
            <OurFacilities />

        </div>
    );
};

export default Home;
import useGetLanguage from "../hooks/useGetLanguage";
import HomeSolution from "../components/HomeSolution";
import ClinicalPartners from "../components/ClinicalPartners";
import AwardsCarousel from "../components/AwardsCarousel";
import StoriesCarousel from "../components/StoriesCarousel";
import HomeMedia from "../components/HomeMedia";
import HomeSupport from "../components/HomeSupport";
import HomeCarousel from "../components/HomeCarousel";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = ({ setActiveNav }: { setActiveNav: (nav: string) => void }) => {
    const language = useGetLanguage();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') {
            setActiveNav('home');
        }
    }, [])
    return (
        <div className="w-full">
            <HomeCarousel />
            <div>
                <HomeSolution setActiveNav={setActiveNav} />
            </div>
            <div>
                <ClinicalPartners setActiveNav={setActiveNav} />
            </div>
            {/* <div className="flex flex-col justify-center items-center bg-[#0cd563]/5 py-10">
                <div className="text-3xl font-bold">{language === 'English' ? "Awards" : "পুরস্কার"}</div>
                <AwardsCarousel />
            </div> */}
            <div className="flex flex-col justify-center items-center py-10 mt-10">
                <div className="text-3xl font-bold">{language === 'English' ? "Latest Stories" : "সর্বশেষ খবর"}</div>
                <StoriesCarousel />
            </div>
            <div className="flex flex-col justify-center items-center bg-[#0cd563]/5 py-10 mt-10">
                <div className="text-3xl font-bold">{language === 'English' ? "In The Media" : "মিডিয়াতে"}</div>
                <HomeMedia />
            </div>
            <div className="flex flex-col justify-center items-center py-10 mt-10">
                <div className="text-3xl font-bold">{language === 'English' ? "With Support From" : "থেকে সমর্থন সহ"}</div>
                <HomeSupport />
            </div>
        </div>
    );
};

export default Home;

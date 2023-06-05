import React from "react";
import COVER_IMG from "../images/cover.jpg";
import MOBILE from "../images/mobile.jpg";
import useGetLanguage from "../hooks/useGetLanguage";
import { coverSubTitleBng, coverSubTitleEng, coverTitleBng, coverTitleEng } from '../data/homeScreen';
import HomeSolution from "../components/HomeSolution";
import ClinicalPartners from "../components/ClinicalPartners";
import AwardsCarousel from "../components/AwardsCarousel";
import StoriesCarousel from "../components/StoriesCarousel";
import HomeMedia from "../components/HomeMedia";
import HomeSupport from "../components/HomeSupport";

const Home = ({ setActiveNav }: { setActiveNav: (nav: string) => void }) => {
    const language = useGetLanguage();
    return (
        <div className="w-full">
            <div
                style={{
                    backgroundImage: `url(${COVER_IMG})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
                className="h-[90vh] w-full flex flex-row"
            >
                <div className="md:w-[80%] w-full h-[90vh] flex flex-row mt-20 lg:ml-20 mx-5">
                    <div className="lg:w-[70%] w-full space-y-3">
                        {language === 'English' ? <>
                            <div className="text-4xl font-bold shadow-lg text-white">
                                {coverTitleEng.split('VITAL SIGN')[0]} {" "}
                                <span className="text-blue-500">VITAL SIGN</span>
                            </div>
                            <div className="text-lg text-white mb-10">
                                {coverSubTitleEng}
                            </div>
                        </> : <>
                            <div className="text-4xl font-bold shadow-lg text-white">
                                {coverTitleBng.split('গুরুত্বপূর্ণ লক্ষণ')[0]} {" "}
                                <span className="text-blue-500">গুরুত্বপূর্ণ লক্ষণ</span>
                            </div>
                            <div className="text-lg text-white mb-10">
                                {coverSubTitleBng}
                            </div>
                        </>}

                        <div
                            onClick={() =>
                                window.open(
                                    "https://docs.google.com/forms/d/e/1FAIpQLSfCInPJQya87giSs_LhTptrpHlaGiiMHzWTbux0dwYAIKLpvg/viewform?usp=sf_link"
                                )
                            }
                            className="p-2 bg-blue-500 text-white w-52 text-center rounded-lg shadow-lg cursor-pointer hover:bg-blue-600/70 !mt-10"
                        >
                            {language === 'English' ? "Download App" : 'অ্যাপ ডাউনলোড করুন'}
                        </div>
                    </div>
                    {/* <div className="w-full lg:w-[50%] h-[40vh] lg:h-[90vh]">
                        <div className="object-contain h-[40vh] lg:h-[90vh] flex flex-row justify-center items-center">
                            <img src={MOBILE} alt="mobile" className="h-[80%] rotate-6" />
                        </div>
                    </div> */}
                </div>
            </div>
            <div>
                <HomeSolution setActiveNav={setActiveNav} />
            </div>
            <div>
                <ClinicalPartners setActiveNav={setActiveNav} />
            </div>
            <div className="flex flex-col justify-center items-center bg-[#0cd563]/5 py-10">
                <div className="text-3xl font-bold">{language === 'English' ? "Awards" : "পুরস্কার"}</div>
                <AwardsCarousel />
            </div>
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

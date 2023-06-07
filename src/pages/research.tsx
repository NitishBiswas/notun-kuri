import React from "react";
import useGetLanguage from "../hooks/useGetLanguage";
import MOBILE from "../images/mobile.jpg";
import ClinicalPartners from "../components/ClinicalPartners";
import { coverSubTitleBng, coverSubTitleEng, coverTitleBng, coverTitleEng } from "../data/researchScreen";
import Publications from "../components/Publications";

const Research = ({ setActiveNav }: { setActiveNav: (nav: string) => void }) => {
    const language = useGetLanguage();

    return (
        <div className="w-full">
            <div
                className="w-full flex flex-row justify-center items-center"
            >
                <div className="md:w-[80%] w-full flex flex-row justify-center mt-20 mx-5">
                    <div className="lg:w-[50%] w-full space-y-4">
                        {language === "English" ? (
                            <>
                                <div className="text-4xl font-bold text-blue-500">
                                    {coverTitleEng}
                                </div>
                                <div className="text-4xl font-bold text-gray-950 mb-10">
                                    {coverSubTitleEng}
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="text-4xl font-bold text-blue-500">
                                    {coverTitleBng}
                                </div>
                                <div className="text-4xl font-bold text-gray-950 mb-10">
                                    {coverSubTitleBng}
                                </div>
                            </>
                        )}

                        <div
                            onClick={() =>
                                window.open(
                                    "https://docs.google.com/forms/d/e/1FAIpQLSfCInPJQya87giSs_LhTptrpHlaGiiMHzWTbux0dwYAIKLpvg/viewform?usp=sf_link"
                                )
                            }
                            className="p-2 bg-blue-500 text-white w-52 text-center rounded-lg shadow-lg cursor-pointer hover:bg-blue-600/70 !mt-10"
                        >
                            {language === "English" ? "Download App" : "অ্যাপ ডাউনলোড করুন"}
                        </div>
                    </div>
                    <div className="w-full lg:w-[50%] h-[50vh] hidden lg:flex justify-center">
                        <div className="object-contain h-[50vh] flex flex-row justify-center items-center">
                            <img src={MOBILE} alt="mobile" className="h-[100%] rotate-6" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-10 mt-10">
                <div className="text-4xl font-bold">{language === 'English' ? "List Of Publications" : "প্রকাশনার তালিকা"}</div>
                <Publications />
            </div>
            <div>
                <ClinicalPartners setActiveNav={setActiveNav} isResearch={true} />
            </div>
        </div>
    );
};

export default Research;

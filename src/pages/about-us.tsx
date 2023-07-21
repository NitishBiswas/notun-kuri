import React from "react";
import useGetLanguage from "../hooks/useGetLanguage";
import { advisorMembers, coverSubTitleBng, coverSubTitleEng, coverTitleBng, coverTitleEng, leaderShipMembers } from "../data/aboutScreen";
import MemberCard from "../components/MemberCard";
import MOBILE from "../images/mobile.png";

const AboutUs = () => {
    const language = useGetLanguage();

    return (
        <div className="w-full">
            <div
                className="w-full flex flex-row justify-center items-center"
            >
                <div className="md:w-[80%] w-full flex flex-col lg:flex-row gap-5 justify-center items-center mt-20 mx-5">
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
                    <div className="w-full lg:w-[50%] h-[60vh] justify-center">
                        <div className="object-contain h-[60vh] flex flex-row justify-center items-center">
                            <img src={MOBILE} alt="mobile" className="h-[100%]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-10 mt-10">
                <div className="text-3xl font-bold mb-10">{language === 'English' ? "Leadership Team" : "নেতৃত্বদানকারী দল"}</div>
                <div className="w-[90%] flex flex-row justify-evenly items-center flex-wrap">
                    {leaderShipMembers?.map((item, index) => {
                        return (
                            <div key={index} className="w-[350px] flex flex-row justify-center items-center my-10">
                                <MemberCard name={item.name} title={item.title} subTitle={item.subTitle} imageUrl={item.imageUrl} linkedin={item.linkedin} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-col justify-center items-center py-10 mt-10">
                <div className="text-3xl font-bold mb-10">{language === 'English' ? "Key Advisors" : "মূল উপদেষ্টারা"}</div>
                <div className="w-[90%] flex flex-row justify-evenly items-center flex-wrap">
                    {advisorMembers?.map((item, index) => {
                        return (
                            <div key={index} className="w-[350px] flex flex-row justify-center items-center my-10">
                                <MemberCard name={item.name} title={item.title} subTitle={item.subTitle} imageUrl={item.imageUrl} linkedin={item.linkedin} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

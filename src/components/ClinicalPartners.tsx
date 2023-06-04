import React from "react";
import { clinicalPartners, clinicalPartnersLinkBng, clinicalPartnersLinkEng, clinicalPartnersSubTitleBng, clinicalPartnersSubTitleEng, clinicalPartnersTitleBng, clinicalPartnersTitleEng } from "../data/homeScreen";
import useGetLanguage from "../hooks/useGetLanguage";
import { useNavigate } from "react-router-dom";

const ClinicalPartners = ({
    setActiveNav,
}: {
    setActiveNav: (nav: string) => void;
}) => {
    const language = useGetLanguage();
    const navigate = useNavigate();
    const title =
        language === "English" ? clinicalPartnersTitleEng : clinicalPartnersTitleBng;
    const subTitle =
        language === "English" ? clinicalPartnersSubTitleEng : clinicalPartnersSubTitleBng;
    return (
        <div className="w-full flex flex-col justify-center items-center py-20">
            <div className="text-center mb-8">
                <div>
                    <div className="text-4xl font-bold mb-4 mt-5 md:mt-0">
                        {title}
                    </div>
                    <div className="text-xl">{subTitle}</div>
                    {language === "English" ? (
                        <div className="text-xl">
                            {clinicalPartnersLinkEng.split("-")[0] + " "}
                            <span
                                onClick={() => {
                                    setActiveNav("Research");
                                    navigate('research');
                                }}
                                className="text-[#0cd563] cursor-pointer font-bold"
                            >
                                {clinicalPartnersLinkEng.split("-")[1]}
                            </span>
                        </div>
                    ) : (
                        <div className="text-xl">
                            {clinicalPartnersLinkBng.split("-")[0] + " "}
                            <span
                                onClick={() => {
                                    setActiveNav("গবেষণা");
                                    navigate('research');
                                }}
                                className="text-[#0cd563] cursor-pointer font-bold"
                            >
                                {clinicalPartnersLinkBng.split("-")[1]}
                            </span>
                            {" " + clinicalPartnersLinkBng.split("-")[2]}
                        </div>
                    )}
                </div>
            </div>
            <div className="w-[90%] flex flex-col sm:flex-row justify-center flex-wrap space-y-4">
                {clinicalPartners.map((partner, index) => {
                    return (
                        <div key={index} className="flex flex-row space-x-4 items-center w-full sm:w-[20%]">
                            <div className="w-[100px]">
                                <img src={partner.icon} alt="icon" className="h-full w-full" />
                            </div>
                            <div className="text-gray-900 font-bold text-md">{partner.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default ClinicalPartners;

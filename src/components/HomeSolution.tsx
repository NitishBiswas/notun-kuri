import React from "react";
import PRIMARY_IMG from "../images/primary.svg";
import useGetLanguage from "../hooks/useGetLanguage";
import {
    homeSolutionSubTitleBng,
    homeSolutionSubTitleEng,
    homeSolutionTitleBng,
    homeSolutionTitleEng,
    solutionLinkBng,
    solutionLinkEng,
} from "../data/homeScreen";
import { useNavigate } from "react-router-dom";

const HomeSolution = ({
    setActiveNav,
}: {
    setActiveNav: (nav: string) => void;
}) => {
    const language = useGetLanguage();
    const title =
        language === "English" ? homeSolutionTitleEng : homeSolutionTitleBng;
    const subTitle =
        language === "English" ? homeSolutionSubTitleEng : homeSolutionSubTitleBng;
    const navigate = useNavigate();

    return (
        <div className="w-full bg-[#0cd563]/5 flex flex-row justify-center items-center py-20">
            <div className="w-[90%] flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-[50%]">
                    <img src={PRIMARY_IMG} alt="primary-image" />
                </div>
                <div className="w-full md:w-[40%]">
                    <div className="text-center md:text-right text-4xl font-bold mb-4 mt-5 md:mt-0">
                        {title}
                    </div>
                    <div className="text-center md:text-right text-xl">{subTitle}</div>
                    {language === "English" ? (
                        <div className="text-center md:text-right text-xl">
                            {solutionLinkEng.split("-")[0] + " "}
                            <span
                                onClick={() => {
                                    setActiveNav("Solutions");
                                    navigate('solutions');
                                }}
                                className="text-[#0cd563] cursor-pointer font-bold"
                            >
                                {solutionLinkEng.split("-")[1]}
                            </span>
                        </div>
                    ) : (
                        <div className="text-center md:text-right text-xl">
                            {solutionLinkBng.split("-")[0] + " "}
                            <span
                                onClick={() => {
                                    setActiveNav("সমাধান");
                                    navigate('solutions');
                                }}
                                className="text-[#0cd563] cursor-pointer font-bold"
                            >
                                {solutionLinkBng.split("-")[1]}
                            </span>
                            {" " + solutionLinkBng.split("-")[2]}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeSolution;

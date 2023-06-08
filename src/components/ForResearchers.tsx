import React from "react";
import ForResearchersLogo from '../images/s3.svg';
import useGetLanguage from "../hooks/useGetLanguage";
import { forResearchersSubTitleBng, forResearchersSubTitleEng, forResearchersTitleBng, forResearchersTitleEng } from "../data/solutionsData";

const ForResearchers = () => {
    const language = useGetLanguage();
    const forResearchersTitle = language === 'English' ? forResearchersTitleEng : forResearchersTitleBng;
    const forResearchersSubTitle = language === 'English' ? forResearchersSubTitleEng : forResearchersSubTitleBng;

    return <div className="py-14 flex flex-row w-full justify-center items-center">
        <div className="w-[90%] flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-[50%] text-center lg:text-left flex flex-col gap-5  p-2 pr-0 lg:pr-20 items-center lg:items-start">
                <div className="text-4xl font-bold">{forResearchersTitle}</div>
                <div className="text-xl lg:text-md">{forResearchersSubTitle}</div>
                <div
                    onClick={() =>
                        window.open(
                            "https://docs.google.com/forms/d/e/1FAIpQLScjwokCqoQErKY2ZCNFqc23sQeVChuIvUNq3EfncxpXxdmZWQ/viewform?usp=sf_link"
                        )
                    }
                    className="p-2 px-4 bg-blue-500 text-white min-w-52 text-center rounded-lg shadow-lg cursor-pointer hover:bg-blue-600/70 !mt-10"
                >
                    {language === 'English' ? "Discuss a research collaboration" : 'একটি গবেষণা সহযোগিতা নিয়ে আলোচনা করুন'}
                </div>
            </div>
            <div className="w-full lg:w-[50%] mt-8 lg:mt-0">
                <div className="w-full  flex flex-row justify-center">
                    <img src={ForResearchersLogo} alt="parents logo" />
                </div>
            </div>
        </div>
    </div>;
};

export default ForResearchers;

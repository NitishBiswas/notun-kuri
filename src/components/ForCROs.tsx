import React from "react";
import ForCROsLogo from '../images/CROs.jpg';
import useGetLanguage from "../hooks/useGetLanguage";
import { forCROsTitleEng, forCROsTitleBng, forCROsSubTitleEng, forCROsSubTitleBng } from "../data/solutionsData";

const ForCROs = () => {
    const language = useGetLanguage();
    const forCROsTitle = language === 'English' ? forCROsTitleEng : forCROsTitleBng;
    const forCROsSubTitle = language === 'English' ? forCROsSubTitleEng : forCROsSubTitleBng;

    return <div className="py-14 flex flex-row w-full justify-center items-center bg-[#f3fdf7]">
        <div className="w-[90%] flex flex-col lg:flex-row-reverse items-center justify-center">
            <div className="w-full lg:w-[50%] text-center lg:text-right flex flex-col gap-5 p-2 pl-0 lg:pl-20 items-center lg:items-end">
                <div className="text-4xl font-bold">{forCROsTitle}</div>
                <div className="text-xl lg:text-md">{forCROsSubTitle}</div>
                <div
                    onClick={() =>
                        window.open(
                            "https://docs.google.com/forms/d/e/1FAIpQLScjwokCqoQErKY2ZCNFqc23sQeVChuIvUNq3EfncxpXxdmZWQ/viewform?usp=sf_link"
                        )
                    }
                    className="p-2 px-4 bg-blue-500 text-white min-w-52 text-center rounded-lg shadow-lg cursor-pointer hover:bg-blue-600/70 !mt-10"
                >
                    {language === 'English' ? "Speak to our clinical expert" : 'আমাদের ক্লিনিকাল বিশেষজ্ঞের সাথে কথা বলুন'}
                </div>
            </div>
            <div className="w-full lg:w-[50%] mt-8 lg:mt-0">
                <div className="w-full  flex flex-row justify-center">
                    <img src={ForCROsLogo} alt="parents logo" />
                </div>
            </div>
        </div>
    </div>;
};

export default ForCROs;

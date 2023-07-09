import React from "react";
import ForParentsLogo from '../images/parents.png';
import useGetLanguage from "../hooks/useGetLanguage";
import { forParentsSubTitleBng, forParentsSubTitleEng, forParentsTitleBng, forParentsTitleEng } from "../data/solutionsData";

const ForParents = () => {
    const language = useGetLanguage();
    const forParentsTitle = language === 'English' ? forParentsTitleEng : forParentsTitleBng;
    const forParentsSubTitle = language === 'English' ? forParentsSubTitleEng : forParentsSubTitleBng;

    return <div className="py-14 flex flex-row w-full justify-center items-center">
        <div className="w-[90%] flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-[50%] text-center lg:text-left flex flex-col gap-5  p-2 pr-0 lg:pr-20 items-center lg:items-start">
                <div className="text-4xl font-bold">{forParentsTitle}</div>
                <div className="text-xl lg:text-md">{forParentsSubTitle}</div>
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
            <div className="w-full lg:w-[50%] mt-8 lg:mt-0">
                <div className="w-full  flex flex-row justify-center">
                    <img src={ForParentsLogo} alt="parents logo" />
                </div>
            </div>
        </div>
    </div>;
};

export default ForParents;

import React from "react";
import useGetLanguage from "../hooks/useGetLanguage";
import { storyDataEng, storyDataBng } from "../data/homeScreen";
import { useParams } from "react-router-dom";

const Story = () => {
    const { id } = useParams() as { id: string };
    const language = useGetLanguage();
    const storyData = language === 'English' ? storyDataEng : storyDataBng;
    const story = storyData?.filter((item) => item.id === parseInt(id))[0];
    return (
        <div className="w-full flex flex-row justify-center items-center my-20">
            <div className="w-[90%] flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-[50%]">
                    <img src={story.icon} alt={story.title} className="w-full h-[60vh]" />
                </div>
                <div className="w-full lg:w-[50%] gap-5 flex flex-col">
                    <div className="text-4xl text-center lg:text-left font-bold">{story.title}</div>
                    <div className="text-xl text-justify">{story.subTitle}</div>
                </div>
            </div>
        </div>
    );
};

export default Story;

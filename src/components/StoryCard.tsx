import React from "react";
import { useNavigate } from "react-router-dom";

const StoryCard = ({ id, title, subTitle, icon, btnText }: { id: number, title: string, subTitle: string, icon: string, btnText: string }) => {
    const navigation = useNavigate();
    return (
        <div className="my-24 mx-5 rounded-lg overflow-hidden h-100" style={{
            boxShadow: "5px 5px 25px 0px #ddffea"
        }}>
            <div className="flex flex-col justify-center items-center space-y-4">
                <div className="w-full h-[200px]">
                    <img src={icon} alt="award-icon" className="w-full h-full" />
                </div>
                <div className="text-center text-md font-semibold">{title}</div>
                <div className="w-full text-justify px-2 overflow-hidden line-clamp-4">{subTitle}</div>
            </div>

            <div onClick={() => navigation(`/story/${id}`)} className="cursor-pointer text-right p-4 text-blue-600 font-bold">{btnText}</div>
        </div>
    )
};

export default StoryCard;

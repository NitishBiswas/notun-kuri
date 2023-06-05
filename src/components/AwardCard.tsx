import React from "react";

const AwardCard = ({ title, icon }: { title: string, icon: string }) => {
    return (
        <div className="flex flex-col justify-center items-center my-24 space-y-4">
            <div className="w-[150px] h-[150px]">
                <img src={icon} alt="award-icon" className="w-full h-full" />
            </div>
            <div className="text-center text-md font-semibold">{title}</div>
        </div>
    )
};

export default AwardCard;

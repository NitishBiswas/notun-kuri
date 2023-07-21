import React from "react";
import { supportData } from "../data/homeScreen";

const HomeSupport = () => {
    return (
        <div className="flex flex-row gap-5 justify-center items-center flex-wrap my-5 w-[90%] mt-10">
            {supportData.map((item, index) => {
                return (
                    <div key={index} className="h-[150px] w-[150px] bg-[#0cd563]/5 rounded-lg overflow-hidden p-2">
                        <img src={item} alt="home media" className="w-full h-full" />
                    </div>
                )
            })}
        </div>
    )
};

export default HomeSupport;

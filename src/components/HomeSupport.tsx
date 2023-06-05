import React from "react";
import { supportData } from "../data/homeScreen";

const HomeSupport = () => {
    return (
        <div className="flex flex-row space-x-8 justify-center items-center flex-wrap my-5 w-[90%] mt-10">
            {supportData.map((item, index) => {
                return (
                    <div key={index} className="h-[100px] w-[100px]">
                        <img src={item} alt="home media" className="w-full h-full" />
                    </div>
                )
            })}
        </div>
    )
};

export default HomeSupport;

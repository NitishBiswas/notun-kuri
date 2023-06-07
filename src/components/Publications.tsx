import React, { useState } from "react";
import PDF from "../images/pdf-icon.svg";
import { researchData } from "../data/researchScreen";
import { AiFillCaretRight } from 'react-icons/ai';

const Publications = () => {
    const [selectedItem, setSelectedItem] = useState(researchData[0]);

    return (
        <div className="w-[90%] mt-10 flex flex-row justify-evenly items-center">
            <div className="w-full flex flex-row gap-4">
                <div className="w-[50%] lg:w-[40%] flex flex-col items-end justify-center gap-2">
                    {researchData.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row w-full lg:w-[60%] items-center">
                                <div onClick={() => setSelectedItem(item)} className={`w-full min-h-16 flex items-center border cursor-pointer px-4 py-2 rounded-md ${item.id === selectedItem.id ? "border-2 border-[#7ae6a3]" : ""}`}>
                                    {item.title}
                                </div>
                                <AiFillCaretRight color={item.id === selectedItem.id ? "#7ae6a3" : "white"} size={24} />
                            </div>

                        )
                    })}
                </div>
                <div className="w-[50%] border-2 rounded-md border-[#7ae6a3] p-4">
                    <div className="w-24">
                        <img src={PDF} alt="pdf" className="w-full h-full" />
                    </div>
                    <div className="text-lg text-gray-900 pl-2 pt-4">{selectedItem.subTitle}</div>
                    <div onClick={() => window.open(selectedItem.url)} className="px-4 py-2 bg-[#7ae6a3] hover:bg-white border border-[#7ae6a3] cursor-pointer font-bold text-white hover:text-gray-900 rounded-lg w-20 text-center ml-2 mt-4">View</div>
                </div>
            </div>
        </div>
    )
};

export default Publications;

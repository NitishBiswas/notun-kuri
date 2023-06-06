import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

export interface IMemberCard {
    name: string;
    title: string;
    imageUrl: string;
    linkedin: string;
}

const MemberCard = ({ name, title, linkedin, imageUrl }: IMemberCard) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const boxShadow = isHovered ? '5px 5px 25px 0px #b8fad1' : '5px 5px 25px 0px #ddffea';

    return (
        <div>
            <div className="h-[250px] w-[250px] group relative rounded-full cursor-pointer bg-white flex flex-row justify-center items-center ring-offset-4 ring-green-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ boxShadow }}
                onClick={() => window.open(linkedin)}
            >
                <div className="absolute top-9 right-6 h-[40px] w-[40px] rounded-full items-center justify-center flex bg-[#7ae6a3] group-hover:bg-gray-900">
                    <FaLinkedinIn color="white" size={20} />
                </div>
                <div className="h-[210px] w-[210px] rounded-full bg-white border border-[#7ae6a3] flex flex-row justify-center items-center">
                    <div className="h-[170px] w-[170px] border rounded-full flex flex-row justify-center items-center overflow-hidden">
                        <img src={imageUrl} alt="member" className="w-full h-full" />
                    </div>
                </div>
            </div>
            <div className="text-center font-bold text-[#7ae6a3] text-lg mt-2">{name}</div>
            <div className="text-center text-gray-900 text-lg">{title}</div>
        </div>
    )
};

export default MemberCard;

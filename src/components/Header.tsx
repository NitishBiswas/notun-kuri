import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import header_logo from "../images/header_logo.png";
import header_logo_Eng from "../images/header_logo_Eng.png";
import { HambergerMenu, CloseSquare } from "iconsax-react";
import { useOnClickOutside } from "usehooks-ts";
import { GlobalStateContext, GlobalStateContextProps } from "../store/store";
import { NAV_BANGLA_ITEM, NAV_ENGLISH_ITEM } from "../data/navItem";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Header = ({
    activeNav,
    setActiveNav,
}: {
    activeNav: string;
    setActiveNav: (nav: string) => void;
}) => {
    const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
    const navigate = useNavigate();
    const downRef = useRef(null);

    const context = useContext(GlobalStateContext);

    const { globalState, setGlobalState } = context as GlobalStateContextProps;

    // Access and update the global state
    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedLanguage = event.target.value;
        setGlobalState((prevState) => ({
            ...prevState,
            language: selectedLanguage,
        }));
    };

    let NAV_ITEM =
        globalState.language === "English" ? NAV_ENGLISH_ITEM : NAV_BANGLA_ITEM;

    useOnClickOutside(downRef, () => setIsSidebarActive(false));

    return (
        <div className="bg-gray-900 sticky top-0 z-[1000000] h-18 w-full flex flex-row justify-center items-center shadow">
            <div className="w-[90%] h-full flex flex-row justify-between items-center">
                {/* logo */}
                <div
                    onClick={() => {
                        setActiveNav("home");
                        navigate("/");
                    }}
                    className="flex flex-row items-center cursor-pointer py-1"
                >
                    <img
                        src={
                            globalState.language === "English" ? header_logo_Eng : header_logo
                        }
                        alt="header logo"
                        className="w-40"
                    />
                </div>
                {/* nav item */}
                <div className="hidden lg:flex flex-row text-white space-x-5">
                    {NAV_ITEM?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    setActiveNav(item.navigate);
                                    navigate(item.navigate);
                                }}
                                className={`cursor-pointer h-10 flex flex-row items-center text-lg ${activeNav === item.navigate
                                    ? "text-[#b4ff00] font-semibold hover:text-white border-b border-[#b4ff00]"
                                    : "hover:text-[#b4ff00]"
                                    }`}
                            >
                                {item.title}
                            </div>
                        );
                    })}

                    <div
                        className={`cursor-pointer h-10 flex flex-row items-center text-lg text-white`}
                    >
                        <select
                            id="language"
                            value={globalState.language}
                            onChange={handleLanguageChange}
                            className="bg-gray-900 border-0 outline-none cursor-pointer"
                        >
                            <option value="English">
                                {globalState.language === "English" ? "English" : "ইংরেজী"}
                            </option>
                            <option value="Bangla">
                                {globalState.language === "English" ? "Bangla" : "বাংলা"}
                            </option>
                        </select>
                    </div>
                </div>
                {isSidebarActive ? (
                    <CloseSquare size="32" color="white" />
                ) : (
                    <div
                        onClick={() => setIsSidebarActive(!isSidebarActive)}
                        className="flex flex-row items-center justify-center px-1 lg:hidden text-white hover:text-[#b4ff00] border border-white hover:border-[#b4ff00] rounded-md shadow cursor-pointer"
                    >
                        <HambergerMenu size="24" />
                    </div>
                )}
            </div>
            {isSidebarActive ? (
                <div className="w-full h-full top-0 bg-black/50 absolute z-[10000]">
                    <div ref={downRef} className="h-[100vh] bg-white w-[300px]">
                        {/* logo */}
                        <div className="flex flex-row items-center justify-between cursor-pointer px-4 pt-12 pb-2 shadow bg-gray-900 h-18 ">
                            <img
                                onClick={() => {
                                    setActiveNav("home");
                                    navigate("/");
                                    setIsSidebarActive(false);
                                }}
                                src={
                                    globalState.language === "English"
                                        ? header_logo_Eng
                                        : header_logo
                                }
                                alt="header logo"
                                className="w-40"
                            />
                            <CloseSquare
                                onClick={() => setIsSidebarActive(false)}
                                size="32"
                                className="text-white hover:text-[#b4ff00]"
                            />
                        </div>
                        <div className="text-gray-900 bg-white h-full space-y-2 px-5 mt-4">
                            {NAV_ITEM?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setActiveNav(item.navigate);
                                            navigate(item.navigate);
                                            setIsSidebarActive(false);
                                        }}
                                        className={`cursor-pointer h-10 flex flex-row items-center text-lg pl-4 ${activeNav === item.navigate
                                            ? "text-[#b4ff00] font-semibold hover:text-gray-900 border-l-4 border-[#b4ff00]"
                                            : "hover:text-[#b4ff00]"
                                            }`}
                                    >
                                        {item.title}
                                    </div>
                                );
                            })}

                            <div
                                className={`h-10 flex flex-row items-center text-lg pl-4 text-gray-900`}
                            >
                                <select
                                    id="language"
                                    value={globalState.language}
                                    onChange={handleLanguageChange}
                                    className="border-0 outline-none cursor-pointer"
                                >
                                    <option value="English">
                                        {globalState.language === "English" ? "English" : "ইংরেজী"}
                                    </option>
                                    <option value="Bangla">
                                        {globalState.language === "English" ? "Bangla" : "বাংলা"}
                                    </option>
                                </select>
                            </div>
                            <div className="w-full mt-10">
                                <div className="text-black font-bold text-lg mt-5">{globalState.language === 'English' ? 'Contact Us' : 'যোগাযোগ করুন'}</div>
                                <div className="text-white flex flex-row gap-5 mt-4 cursor-pointer">
                                    <div onClick={() => window.open('http://www.google.com')} className="bg-[#8cc600] hover:bg-black rounded-full p-3">
                                        <FaFacebookSquare size={20} />
                                    </div>
                                    <div onClick={() => window.open('http://www.google.com')} className="bg-[#8cc600] hover:bg-black rounded-full p-3">
                                        <FaLinkedin size={20} />
                                    </div>
                                    <div onClick={() => window.open('http://www.google.com')} className="bg-[#8cc600] hover:bg-black rounded-full p-3">
                                        <FaInstagramSquare size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Header;

import { useNavigate } from "react-router-dom";
import header_logo from "../images/header_logo.png";
import header_logo_Eng from "../images/header_logo_Eng.png";
import { useContext } from "react";
import { GlobalStateContext, GlobalStateContextProps } from "../store/store";
import { NAV_BANGLA_ITEM, NAV_ENGLISH_ITEM } from "../data/navItem";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import NewsletterForm from "./NewsletterForm";

const Footer = ({ activeNav, setActiveNav }: { activeNav: string, setActiveNav: (nav: string) => void }) => {
    const navigate = useNavigate();
    const context = useContext(GlobalStateContext);

    const { globalState, setGlobalState } = context as GlobalStateContextProps;

    let NAV_ITEM =
        globalState.language === "English" ? NAV_ENGLISH_ITEM : NAV_BANGLA_ITEM;

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

    return (
        <div className="h-full">
            <NewsletterForm />
            <div className="bg-gray-900 w-full min-h-[200px] flex flex-row justify-center items-center py-8">
                <div className="w-[90%] h-full flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div
                        onClick={() => {
                            setActiveNav("home");
                            navigate("/");
                        }}
                        className="flex flex-row w-[300px] items-center justify-center cursor-pointer py-1"
                    >
                        <img src={globalState.language === 'English' ? header_logo_Eng : header_logo} alt="header logo" className="w-[250px]" />
                    </div>
                    <div className="w-full md:w-[40%]">
                        <div className="text-white font-bold text-lg mt-5 md:mt-0">{globalState.language === 'English' ? 'Menu' : 'মেনু'}</div>
                        {/* nav item */}
                        <div className="grid grid-cols-2 justify-between text-white mt-3">
                            {NAV_ITEM.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div
                                            onClick={() => {
                                                setActiveNav(item.title);
                                                navigate(item.navigate);
                                            }}
                                            className={`cursor-pointer flex flex-row items-center text-lg my-2 w-[100%] ${activeNav === item.title ? "text-[#b4ff00] font-semibold hover:text-white border-l-2 pl-2 border-[#b4ff00]" : "hover:text-[#b4ff00]"}`}
                                        >
                                            {item.title}
                                        </div>
                                    </div>
                                )
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
                    </div>
                    <div className="w-full md:w-[20%] mt-5 md:mt-0">
                        <div className="text-white font-bold text-lg mt-5 md:mt-0">{globalState.language === 'English' ? 'Contact Us' : 'যোগাযোগ করুন'}</div>
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
            <div className="my-5 text-center w-full">{globalState.language === 'English' ? 'Copyright Ⓒ 2023 Notun Kuri. All Rights Reserved | Privacy & Data Protection | Disclaimer' : 'কপিরাইট Ⓒ 2023 নতুন কুঁড়ি । সর্বস্বত্ব সংরক্ষিত | গোপনীয়তা এবং ডেটা সুরক্ষা | দাবিত্যাগ'}</div>
        </div>
    );
};

export default Footer;

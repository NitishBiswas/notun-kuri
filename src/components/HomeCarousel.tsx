import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import COVER_IMG1 from "../images/cover1.jpg";
import COVER_IMG2 from "../images/cover2.jpg";
import COVER_IMG3 from "../images/cover3.jpg";
import COVER_IMG4 from "../images/cover4.jpg";
import COVER_IMG5 from "../images/cover5.jpg";
import useGetLanguage from "../hooks/useGetLanguage";
import { coverSubTitleBng, coverSubTitleEng, coverTitleBng, coverTitleEng } from '../data/homeScreen';

const HomeCarousel = () => {
    const language = useGetLanguage();
    const imageArray = [COVER_IMG1, COVER_IMG2, COVER_IMG3, COVER_IMG4, COVER_IMG5];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 1280, min: 768 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="w-full">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3500}
                keyBoardControl={true}
                customTransition="all .5s ease"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {imageArray.map((image, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                            }}
                            className="h-[90vh] w-full flex flex-row"
                        >
                            <div className="md:w-[80%] w-full h-[90vh] flex flex-row mt-20 lg:ml-20 mx-5">
                                <div className="lg:w-[70%] w-full space-y-3">
                                    {language === 'English' ? <>
                                        <div className="text-4xl font-bold text-white">
                                            {coverTitleEng.split('VITAL SIGN')[0]} {" "}
                                            <span className="text-blue-500">VITAL SIGN</span>
                                        </div>
                                        <div className="text-lg text-white mb-10">
                                            {coverSubTitleEng}
                                        </div>
                                    </> : <>
                                        <div className="text-4xl font-bold text-white">
                                            {coverTitleBng.split('গুরুত্বপূর্ণ লক্ষণ')[0]} {" "}
                                            <span className="text-blue-500">গুরুত্বপূর্ণ লক্ষণ</span>
                                        </div>
                                        <div className="text-lg text-white mb-10">
                                            {coverSubTitleBng}
                                        </div>
                                    </>}

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
                            </div>
                        </div>
                    )
                })}

            </Carousel>
        </div>
    )
};

export default HomeCarousel;

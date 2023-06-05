import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { storyDataBng, storyDataEng } from "../data/homeScreen";
import StoryCard from "./StoryCard";
import useGetLanguage from "../hooks/useGetLanguage";

const StoriesCarousel = () => {
    const language = useGetLanguage();
    const storyData = language === 'English' ? storyDataEng : storyDataBng;
    const btnText = language === 'English' ? "Read more" : "আরো পড়ুন";
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1280, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="w-[90%]">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .1"
                transitionDuration={1000}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {storyData?.map((item, index) => {
                    return (
                        <StoryCard key={index} title={item.title} subTitle={item.sybTitle} icon={item.icon} btnText={btnText} />
                    )
                })}
            </Carousel>
        </div>
    )
};

export default StoriesCarousel;

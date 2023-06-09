import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { awardData } from "../data/homeScreen";
import AwardCard from "./AwardCard";

const AwardsCarousel = () => {
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
                autoPlaySpeed={3500}
                keyBoardControl={true}
                customTransition="all .5s ease"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {awardData?.map((item, index) => {
                    return (
                        <AwardCard key={index} title={item.title} icon={item.icon} />
                    )
                })}
            </Carousel>
        </div>
    )
};

export default AwardsCarousel;

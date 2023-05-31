import React from "react";
import COVER_IMG from "../images/cover.jpg";
import MOBILE from "../images/mobile.jpg";

const Home = () => {
    return (
        <div className="w-full">
            <div
                style={{
                    backgroundImage: `url(${COVER_IMG})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
                className="h-[90vh] w-full flex flex-row"
            >
                <div className="md:w-[80%] w-full h-[90vh] flex flex-row mt-20 lg:ml-20 mx-5">
                    <div className="lg:w-[70%] w-full space-y-3">
                        <div className="text-4xl font-bold shadow-lg text-white">
                            THE INFANT CRY AS A{" "}
                            <span className="text-blue-500">VITAL SIGN</span>
                        </div>
                        <div className="text-lg text-white mb-10">
                            Notun Kuri develops AI-powered software for early identification
                            of neurological and respiratory conditions in infants using their
                            cry sounds We are building an app to help parents better
                            understand their baby’s cries in the comfort of their home.
                        </div>
                        <div
                            onClick={() =>
                                window.open(
                                    "https://docs.google.com/forms/d/e/1FAIpQLSfCInPJQya87giSs_LhTptrpHlaGiiMHzWTbux0dwYAIKLpvg/viewform?usp=sf_link"
                                )
                            }
                            className="p-2 bg-blue-500 text-white w-40 text-center rounded-lg shadow-lg cursor-pointer hover:bg-blue-600/70 !mt-10"
                        >
                            Download App
                        </div>
                    </div>
                    {/* <div className="w-full lg:w-[50%] h-[40vh] lg:h-[90vh]">
                        <div className="object-contain h-[40vh] lg:h-[90vh] flex flex-row justify-center items-center">
                            <img src={MOBILE} alt="mobile" className="h-[80%] rotate-6" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;

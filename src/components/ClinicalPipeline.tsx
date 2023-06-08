import React from "react";
import useGetLanguage from "../hooks/useGetLanguage";
import PIPELINE from '../images/clinical-pipeline.svg'
import { clinicalPipelineSubTitleBng, clinicalPipelineSubTitleEng, clinicalPipelineTitleBng, clinicalPipelineTitleEng } from "../data/researchScreen";

const ClinicalPipeline = () => {
    const language = useGetLanguage();
    const clinicalPipelineTitle = language === 'English' ? clinicalPipelineTitleEng : clinicalPipelineTitleBng;
    const clinicalPipelineSubTitle = language === 'English' ? clinicalPipelineSubTitleEng : clinicalPipelineSubTitleBng;

    return (
        <div className="w-full flex flex-row justify-center items-center mt-14">
            <div className="w-[90%] flex flex-col items-center justify-center gap-8 text-center">
                <div className="text-4xl font-bold">{clinicalPipelineTitle}</div>
                <div className="text-lg lg:text-md w-full lg:w-[50%]">{clinicalPipelineSubTitle}</div>
                <div className="h-full w-full flex flex-row justify-center items-center">
                    <img src={PIPELINE} alt="pipeline" />
                </div>
            </div>
        </div>
    )
};

export default ClinicalPipeline;

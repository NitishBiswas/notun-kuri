import useGetLanguage from "../hooks/useGetLanguage";
import { newsletterFormBng, newsletterFormEng } from "../data/newsletterForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import useEmailSubscription from "../hooks/useEmailSubscription";
import { useEffect } from "react";
import { toast } from "react-toastify";

const NewsletterForm = () => {
    const language = useGetLanguage();
    const data = language === "English" ? newsletterFormEng : newsletterFormBng;
    const loadingText = language === "English" ? "Loading..." : "লোডিং...";
    const subscribedText = language === "English" ? {
        title: "Thank You!",
        subTitle: "You have successfully joined our subscriber list."
    } : {
        title: "ধন্যবাদ!",
        subTitle: "আপনি সফলভাবে আমাদের গ্রাহক তালিকায় যোগ দিয়েছেন।"
    }
    const { loading, error, success, storeEmailInFirebase } = useEmailSubscription();


    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
        }),
        onSubmit: (values) => {
            storeEmailInFirebase(values.email);
        },
    });

    useEffect(() => {
        if (success) {
            toast.success('Subscription done!', {
                position: "top-right",
                autoClose: 4998,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            localStorage.setItem('subscribed', 'yes');
            formik.setFieldValue('email', '');
        }
    }, [success]);

    useEffect(() => {
        if (error) {
            toast.error('Failed to store email!', {
                position: "top-right",
                autoClose: 4998,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }, [error]);

    return (
        <div className="flex flex-row w-full justify-center my-20 px-4 sm:px-0">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] bg-[#099545]/20 shadow-lg rounded-md p-6 space-y-4">
                {success || localStorage.getItem('subscribed') ? <>
                    <div className="text-center text-2xl font-bold">{subscribedText.title}</div>
                    <div className="text-center">{subscribedText.subTitle}</div>
                </> : <><div className="text-center text-2xl font-bold">{data.title}</div>
                    <div className="text-center">{data.subTitle}</div>

                    <form
                        onSubmit={formik.handleSubmit}
                        className="flex flex-row w-full space-x-4"
                    >
                        <div className="w-full">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${formik.touched.email && formik.errors.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                                    }`}
                                placeholder={data.placeholder}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-sm">{formik.errors.email}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 h-10 text-white bg-gray-800 rounded-md hover:bg-gray-900"
                        >
                            {loading ? loadingText : data.buttonText}
                        </button>
                    </form></>}
            </div>
        </div>
    );
};

export default NewsletterForm;

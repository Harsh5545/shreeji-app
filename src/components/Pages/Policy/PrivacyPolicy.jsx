import React from "react";

function PrivacyPolicy() {
    return (
        <div className="flex w-full flex-col">
            <div className="flex justify-center items-center">
                <h1 className="p-8 font-bold text-[#EF7F1B] md:text-4xl text-2xl ">
                    Privacy Policy
                </h1>
            </div>
            <div className="md:px-40 p-4">
                <p className="md:text-base pb-8 text-sm md:ml-6 ml-4 mt-3 flex gap-4 flex-col text-gray-700">
                    Shreeji Graphics take the protection of your privacy really
                    seriously. In order to make sure that your personal
                    information is secure; we communicate data privacy and
                    security guidelines to Shreeji Graphics employees and strictly
                    enforce privacy safeguards within the company.
                </p>
                <h2 className=" font-semibold text-md md:text-lg">
                    Scope of the Terms and Conditions
                </h2>
                <p className="md:text-base  md:ml-6 ml-4 mt-3 flex gap-4 flex-col text-gray-700">
                    If you have questions or concerns about Shreeji Graphics Privacy
                    Policy, please contact us at hello@turtleboxes.com
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;

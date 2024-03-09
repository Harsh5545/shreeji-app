import React from "react";

function HomeService() {

    function handleWhatsapp() {
        const phoneNumber = "919824229989";
        const message = "Hi Shreeji Graphics,\n\nI am interested in your packaging services. Can we discuss further?";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    }

    return (
        <div className="bg-[#F2F0F1]">
            <div className="mx-auto max-w-screen-xl gap-1 py-7 px-5 grid md:grid-cols-2">
                <div className="flex flex-col gap-10 py-12">
                    <div className="flex flex-col  gap-8">
                        <h2 className="text-2xl md:text-3xl text-[#FF6C22]">
                            SHREEJI GRAPHICS SERVICES
                        </h2>
                        <p className="text-lg md:text-2xl">
                            Start Your Packaging Journey with Shreeji Graphics
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 w-[90%] justify-between">
                        <div className="flex gap-3">
                            <img
                                alt=""
                                src="/Main-Images/chat.png"
                                width="30"
                                className="object-contain"
                            />
                            <p className="font-bold text-sm">Free Expert Consultation</p>
                        </div>
                        <div className="flex gap-3">
                            <img
                                alt=""
                                src="/Main-Images/color-palette.png"
                                width="30"
                                className="object-contain rotate-180"
                            />
                            <p className="font-bold text-sm">Prototyping & Color Matching</p>
                        </div>
                        <div className="flex gap-3">
                            <img
                                alt=""
                                src="/Main-Images/document.png"
                                width="30"
                                className="object-contain rotate-180"
                            />
                            <p className="font-bold text-sm">Custom Styles & Materials</p>
                        </div>
                    </div>
                    <button className="codepen-button" onClick={handleWhatsapp}>
                        <span>Get Now</span>
                    </button>
                </div>

                <div>
                    <img src="/Main-Images/service-bag.webp" width="2000" className="" alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomeService;

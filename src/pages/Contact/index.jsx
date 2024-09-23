import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import Header from "components/Header";
import { Img } from "../../components";
import React from "react";

export default function Contact() {
    return (
        <div>
            <div className="w-full bg-white-a700">
                <div>
                    <div className="flex items-start md:flex-col">
                        <Img
                            src="images/img_dall_e.png"
                            alt="Dalle Image"
                            className="h-[162px] w-[162px] self-center object-cover md:w-full"
                        />
                        <Header />
                    </div>
                </div>
                <div className="flex justify-center items-center bg-gray-200">
                    <ContactUs />
                    </div>
                <Footer />
            </div>
        </div>
    );
}

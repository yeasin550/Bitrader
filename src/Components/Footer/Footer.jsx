import { FaApple, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logo from "../../assets/Logo-dark.png"
import { BiLogoPlayStore } from "react-icons/bi";

const Footer = () => {
    return (
        // <div className="bg-[#1E1E1E] text-[#bcbec2]">
        <div className="bg-[#00150F] text-[#bcbec2] text-lg">
            <div className="md:px-28 py-20 flex gap-12 justify-between">
                <div className="space-y-4 w-[450px] mr-24">
                    <img src={logo} alt="" />
                    <p className="text-lg">Welcome to our trading site! We offer the best, most affordable products and services around. Shop now and start finding great deals!</p>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-[#00D094] py-1 px-2 rounded-lg text-black w-40">
                            <FaApple className="text-xl"/>
                            <div>
                                <p className="text-sm">Download on the</p>
                                <h1>App Store</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-[#124D6D] py-1 px-2 rounded-lg text-white w-40">
                            <BiLogoPlayStore className="text-xl"/>
                            <div>
                                <p className="text-sm">Get in touch</p>
                                <h1>App Store</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold mb-4 text-white">Quicks Links</h1>
                    <div className="space-y-3">
                        <p>About Us</p>
                        <p>Terms</p>
                        <p>Services</p>
                        <p>Features</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold mb-4 text-white">Support</h1>
                    <div className="space-y-3">
                        <p>Terms 7 Condition</p>
                        <p>Privacy Policy</p>
                        <p>FAQs</p>
                        <p>Support Center</p>

                    </div>
                </div>
                <div className="space-y-3 md:mr-0 mr-2">
                    <h1 className="font-bold mb-4 text-white">Company</h1>
                    <p className="flex  gap-2">Careers</p>
                    <p className="flex  gap-2">Updates</p>
                    <p className="flex items-center gap-2">Job</p>
                    <p className="flex items-center gap-2">Announce</p>
                </div>

            </div>


            <hr className="border- border-t-gray-300" />
            <div className="flex items-center justify-between px-24">
                <p className="text-center py-6">© 2024 All Rights Reserved By Thetork</p>
                <div className="flex items-center gap-2 text-white">
                    <FaFacebook className="p-2 text-4xl border border-emerald-500 hover:border-white rounded-full" />
                    <FaInstagram className="p-2 text-4xl border border-emerald-500 hover:border-white rounded-full" />
                    <FaWhatsapp className="p-2 text-4xl border border-emerald-500 hover:border-white rounded-full" />
                    <FaLinkedin className="p-2 text-4xl border border-emerald-500 hover:border-white rounded-full" />
                    <FaTwitter className="p-2 text-4xl border border-emerald-500 hover:border-white rounded-full" />
                    <FaYoutube className="p-2 text-4xl border border-emerald-500 hover:border-white rounded-full" />
                </div>

            </div>

        </div>
    );
};

export default Footer;
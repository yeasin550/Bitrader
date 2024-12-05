
import { FaFacebook, FaInstagram, FaLinkedin, FaPlayCircle, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import banner from "../../assets/banner.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="flex items-center justify-between md:px-5">
            <div className="md:w-1/2 space-y-9">
                <h1 className="text-6xl font-bold">Invest Your Money With <span className="text-[#0A4FD5]">Higher Return</span></h1>
                <p>Anyone can invest money to different currency to increase their earnings <br /> by the help of Bitrader through online.</p>

                <div className="flex gap-5">
                    <button className="flex items-center gap-3 py-3 px-8 bg-[#00D094] rounded-md font-bold">
                        Get Started  <FaArrowRightLong />
                    </button>
                    <button className="flex items-center gap-3 py-3 px-8 border border-[#00D094] rounded-md font-bold">
                        <FaPlayCircle className="text-2xl" />  Watch Video
                    </button>
                </div>

                <div>
                    <h1 className="text-xl font-bold mb-4">Follow Us</h1>
                    <div className="flex items-center gap-2">
                        <FaFacebook className="p-2 text-4xl border border-emerald-500 rounded-full hover:bg-[#69E2A6]" />
                        <FaInstagram className="p-2 text-4xl border border-emerald-500 rounded-full hover:bg-[#69E2A6]" />
                        <FaWhatsapp className="p-2 text-4xl border border-emerald-500 rounded-full hover:bg-[#69E2A6]" />
                        <FaLinkedin className="p-2 text-4xl border border-emerald-500 rounded-full hover:bg-[#69E2A6]" />
                        <FaTwitter className="p-2 text-4xl border border-emerald-500 rounded-full hover:bg-[#69E2A6]" />
                        <FaYoutube className="p-2 text-4xl border border-emerald-500 rounded-full hover:bg-[#69E2A6]" />
                    </div>
                </div>
            </div>
            <div className="md:w-1/2">
                <img src={banner} className="w-[700px]" alt="" />
            </div>
        </div>
    );
};

export default Banner;
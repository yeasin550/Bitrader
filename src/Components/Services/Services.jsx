
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";
const Services = () => {
    return (
        <div className="my-12">
            <div className="text-center w-1/2 mx-auto space-y-3">
                <h1 className="text-5xl font-bold"><span className="text-[#0A4FD5]">Services</span> We offer</h1>
                <p className="text-lg">We offer the best services around - from installations to <br /> repairs, maintenance, and more!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-12">
                <div className="bg-gray-100 px-10 py-12 rounded-xl border-2 hover:border-[#00D094] space-y-4 text-center flex flex-col items-center justify-center">
                    <img src={one} alt="" className="w-24 bg-white p-5 rounded-full border hover:border-gray-500"/>
                    <h1 className="text-2xl font-semibold">Strategy Consulting</h1>
                    <p className="text-lg">
                        A social assistant that is flexible can accommodate your schedule and needs, making life easier.</p>
                </div>
                <div className="bg-gray-100 px-10 py-12 rounded-xl border-2 hover:border-[#00D094] space-y-4 text-center flex flex-col items-center justify-center">
                    <img src={two} alt="" className="w-24 bg-white p-5 rounded-full border hover:border-gray-500"/>
                    <h1 className="text-2xl font-semibold">Financial Advisory</h1>
                    <p className="text-lg">

                        Modules transform smart trading by automating processes and improving decision-making.</p>
                </div>
                <div className="bg-gray-100 px-10 py-12 rounded-xl border-2 hover:border-[#00D094] space-y-4 text-center flex flex-col items-center justify-center">
                    <img src={three} alt="" className="w-24 bg-white p-5 rounded-full border hover:border-gray-500"/>
                    <h1 className="text-2xl font-semibold">Management</h1>
                    <p className="text-lg">

                        There, it is me, your friendly neighborhood reporter is news analyst processes and improving</p>
                </div>
                <div className="bg-gray-100 px-10 py-12 rounded-xl border-2 hover:border-[#00D094] space-y-4 text-center flex flex-col items-center justify-center">
                    <img src={four} alt="" className="w-24 bg-white p-5 rounded-full border hover:border-gray-500"/>
                    <h1 className="text-2xl font-semibold">Supply Optimization</h1>
                    <p className="text-lg"> Hey, have you checked out that new cryptocurrency platform? It is pretty cool and easy to use!</p>
                </div>
                <div className="bg-gray-100 px-10 py-12 rounded-xl border-2 hover:border-[#00D094] space-y-4 text-center flex flex-col items-center justify-center">
                    <img src={five} alt="" className="w-24 bg-white p-5 rounded-full border hover:border-gray-500"/>
                    <h1 className="text-2xl font-semibold">HR Consulting</h1>
                    <p className="text-lg">
                        Hey guys, just a quick update on exchange orders. There have been some changes currency!</p>
                </div>
                <div className="bg-gray-100 px-10 py-12 rounded-xl border-2 hover:border-[#00D094] space-y-4 text-center flex flex-col items-center justify-center">
                    <img src={six} alt="" className="w-24 bg-white p-5 rounded-full border hover:border-gray-500"/>
                    <h1 className="text-2xl font-semibold">Marketing consulting</h1>
                    <p className="text-lg">Hey! Just wanted to let you know that the price notification module processes is now live!</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
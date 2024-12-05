
import meetCompany from "../../assets/meetCompany.png"
const MeetOurCompany = () => {
    return (
        <div className="flex items-center gap-12">
            <div className="md:w-1/2">
                <img src={meetCompany} className="w-[550px]" alt="" />
            </div>
            <div className="md:w-1/2 space-y-9">
                <h1 className="text-[45px] font-bold">Meet <span className="text-[#0A4FD5]">Our Company</span> Unless Miss The Opportunity </h1>
                <p>Hey there! So glad you stopped by to Meet Our Company. Dont miss out on this opportunity to learn about what we do and the amazing team that makes it all happen! Our company is all about creating innovative solutions and providing top-notch services to our clients. From start to finish, we are dedicated to delivering results that exceed expectations.</p>

                <div className="flex gap-5">
                    <button className="flex items-center gap-3 py-3 px-8 bg-[#00D094] rounded-md font-bold">
                        Explore More
                    </button>
                </div>         
            </div>           
        </div>
    );
};

export default MeetOurCompany;
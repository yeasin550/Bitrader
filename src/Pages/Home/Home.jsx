import Banner from "../../Components/Banner/Banner";
import MeetOurCompany from "../../Components/MeetOurCompany/MeetOurCompany";
import PricingPlan from "../../Components/PricingsPlan/PricingPlan";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div>
           <Banner />
            <MeetOurCompany />
            <Services />
            <PricingPlan/>
        </div>
    );
};

export default Home;
import Contact from "../Components/Contact/Contact";
import Doctor from "../Components/Doctor/Doctor";
import Hero from "../Components/Hero/Hero";
import LittleDetails from "../Components/LittleDetails/LittleDetails";
import Review from "../Components/Review/Review";
import Services from "../Components/Services/Services";


const HomeLay = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <LittleDetails></LittleDetails>
            <Review></Review>
            <Doctor></Doctor>
            <Contact></Contact>
            
        </div>
    );
};

export default HomeLay;
import Parallax from "../../components/commonComponents/parallax/Parallax"
// import Amenities from "../../components/homepage_components/amenities/Amenities"
import Homepage_ExclusiveService from "../../components/homepage_components/homepage_exclusiveservice/Homepage_ExclusiveService"
// import Homepage_LetUsGuide from "../../components/homepage_components/homepage_letusguide/Homepage_LetUsGuide"
// import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties"
import Homepage_Testimonial from "../../components/homepage_components/homepage_testimonial/Homepage_Testimonial"
import Homepage_WhyChoose from "../../components/homepage_components/homepage_whychoose/Homepage_WhyChoose"
import Slider from "../../components/homepage_components/slider/Slider"
import img from '../../assets/airbnb301/img_1.jpg'
import HomePage_Locations from "../../components/homepage_components/homepage_locations/HomePage_Locations"
// import Subheading from "../../components/commonComponents/subheading/Subheading"
// import CounterUp from "../../components/homepage_components/counterup/CounterUp"

const Home = () => {
    // Slider Images 
    return (
        <section className="relative font-roboto select-none">
            <div className="w-full h-fit relative ">
                <Slider />
            </div>
            <div>
                {/* <Homepage_Properties /> */}
            </div>
            <div>
                <HomePage_Locations />
            </div>
            <div className="m-8">
                <Parallax
                    image={img}
                    title={'Atlas Homes – Where Every Stay Feels Like Home'}
                    description={'At Atlas Homes, every detail is designed for your comfort. Relax in beautifully appointed spaces, enjoy modern amenities, and make every moment unforgettable.'}
                />
            </div>

            {/* <div className=" px-4 lg:px-20 ">
                <Amenities />
            </div> */}
            {/* <div className=" px-4 lg:px-20 ">
                <CounterUp />
            </div> */}
            {/* <div className="">
                <Homepage_LetUsGuide />
            </div> */}
            <div className="">
                <Homepage_ExclusiveService />
            </div>
            <div className="">
                <Homepage_WhyChoose />
            </div>
            <div className="">
                <Homepage_Testimonial />
            </div>
        </section>
    )
}

export default Home
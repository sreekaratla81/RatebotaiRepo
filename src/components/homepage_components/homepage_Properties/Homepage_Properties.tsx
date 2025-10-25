import { FaBed, FaShower, FaSwimmingPool, FaCar } from "react-icons/fa";
// import { RxOpenInNewWindow } from "react-icons/rx";
// import Heading from "../../commonComponents/heading/Heading";
import { useNavigate } from "react-router-dom";
// import { propertyData } from "../../../data";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import PropertyModal from "../propertymodal/PropertyModal";
import { useState } from "react";

const Homepage_Properties = () => {
    const navigate = useNavigate();
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const renderIcon = (iconName: any) => {
        switch (iconName) {
            case 'bed':
                return <FaBed />;
            case 'shower':
                return <FaShower />;
            case 'pool':
                return <FaSwimmingPool />;
            case 'car':
                return <FaCar />;
            default:
                return null;
        }
    };

    console.log(renderIcon);

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const handleNavigate = (property: any) => {
        navigate(`/property_details/${property?.id}`, { state: { property } });
    };

    // const handleModal = (property: any) => () => {
    //     setSelectedProperty(property);
    //     setIsModalOpen(true);
    // };

    return (
        <>
            {/* <section className="px-4 lg:px-20 py-8 pb-10 md:pb-20">
                <Heading title="Explore Our Villas" />
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {propertyData?.map((property) => (
                        property.properties?.map((data) => (
                            <div key={data.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ">
                                Image Container
                                <div className="relative h-64 md:h-80">
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                        spaceBetween={0}
                                        navigation
                                        loop={true}
                                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                                        className="h-full w-full cursor-pointer"
                                    >
                                        {data?.property_img.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div
                                                    onClick={() => handleNavigate(data)}
                                                    className="h-full w-full"
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${data.property_name} - Image ${index + 1}`}
                                                        className="object-cover w-full h-full transition-transform duration-300 overflow-hidden"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    Modal View Button
                                    <span
                                        onClick={handleModal(data)}
                                        className="absolute right-3 bottom-3 cursor-pointer z-10 text-2xl text-white h-8 w-8 bg-black/50 flex justify-center items-center rounded-full"
                                    >
                                        <RxOpenInNewWindow />
                                    </span>
                                </div>

                                Content
                                <div className="p-4 flex flex-col gap-3">
                                    <h2 className="text-lg font-semibold text-gray-800">{data.property_name}</h2>

                                    Amenities
                                    <div className="flex flex-wrap items-center gap-3">
                                        {data?.property_amenities.slice(0, 3).map((amenity, index) => (
                                            <div key={index} className="flex items-center gap-2 text-gray-600">
                                                <span className="text-lg">{renderIcon(amenity.amenities_icon)}</span>
                                                <span className="text-sm">
                                                    {amenity.amenities_count ? ` ${amenity.amenities_count}` : ` ${amenity.amenities_availablity}`}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    Location
                                    <p className="text-sm text-gray-500">{data.property_location}</p>
                                </div>
                                Batch
                                <span className="absolute z-40 top-5 left-0 bg-[#dc3535] text-white px-3 py-2">
                                    <h2 className="text-sm tracking-wider font-normal ">{data.property_deal}</h2>
                                </span>
                            </div>
                        ))
                    ))}
                </div>
            </section> */}

            {/* Modal */}
            {isModalOpen && (
                <PropertyModal property={selectedProperty} onClose={closeModal} handleNavigate={handleNavigate} />
            )}
        </>
    );
};

export default Homepage_Properties;

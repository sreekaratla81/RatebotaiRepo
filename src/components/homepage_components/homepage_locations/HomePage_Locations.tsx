import { useNavigate } from "react-router-dom";
import { propertyData } from "../../../data";
import Heading from "../../commonComponents/heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import './homepage_location.css'

const HomePage_Locations = () => {
  const navigate = useNavigate();

  const handleNavigate = (property: any) => {
    const checkedLocation = property.property_name.toLowerCase().replace(/\s+/g, '-')
    navigate(`/property_details/${checkedLocation}`, { state: { property } });
  };

  return (
    <section className="pb-12 pt-10 md:pt-20 px-6 md:px-20 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="pb-10">
          <Heading title={"Our Homes"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-14">
          {propertyData?.map((property) => (
            <div
              key={property.id}
              className="relative bg-white rounded-2xl cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/60"
              onClick={() => handleNavigate(property)}
              role="link"
              tabIndex={0}
              aria-label={`Open ${property.property_name}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleNavigate(property);
                }
              }}
            >
              {/* Image Slider */}
              <div className="relative w-full h-52 md:h-52">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  navigation
                  scrollbar={{ draggable: true }}
                  loop={true}
                  className="custom-swiper"
                >
                  {property?.property_img?.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={imgSrc}
                        alt={`${property.property_name} Image ${index + 1}`}
                        className="w-full h-52 md:h-52 object-cover rounded-3xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>

              {/* Property Info */}
              <div className="p-2 md:p-2">
                <div className="flex justify-between items-center gap-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 truncate">
                    {property.property_name}
                  </h3>
                  <span className="ml-2 text-gray-400 text-sm">({property?.property_reviews || 59})</span>
                </div>
                <p className="text-gray-500 text-sm ">{property.property_location}</p>

                <div className="flex items-center">
                  <span className="text-yellow-500 font-bold">★</span>
                  <span className="ml-1 font-medium">{property?.property_rating || 4.9}</span>
                </div>

                <p className=" text-gray-900 font-semibold text-lg">
                  ₹{property?.property_price || 4996} <span className="text-gray-500 font-normal text-sm">for 1 night</span>
                </p>
              </div>
            </div>

          ))
          }
        </div >
      </div >
    </section >
  );
};

export default HomePage_Locations;

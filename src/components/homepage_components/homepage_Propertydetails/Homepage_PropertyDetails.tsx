import { useLocation } from 'react-router-dom';
import { FaBed, FaShower, FaSwimmingPool, FaCar, FaWifi, FaTv } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { PiElevatorDuotone, PiSecurityCameraDuotone } from "react-icons/pi";
import { RiLuggageCartLine } from "react-icons/ri";
import { TfiBrushAlt } from "react-icons/tfi";
import { LiaNewspaper } from "react-icons/lia";
import { MdOutlineEmojiFoodBeverage, MdOutlineLocalLaundryService, MdOutlineDone } from "react-icons/md";
import { FaCcMastercard, FaLocationDot } from "react-icons/fa6";
import { X, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { propertyData } from '../../../data';
import Subheading from '../../commonComponents/subheading/Subheading';
import HotelBooking_Form from '../hotelBooking_form/HotelBooking_Form';

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


interface PropertyAmenity {
    amenities_icon: string;
}

interface PropertyDetail {
    type: string;
    value: string;
}

interface Property {
    id: number;
    property_name: string;
    property_img: string[];
    property_location: string;
    property_amenities: PropertyAmenity[];
    property_description: string;
    property_nearplaces: string[];
    property_mapSrc: string;
    property_policy_details: PropertyDetail[];
}

const PropertyDetails = () => {
    const location = useLocation();
    const slug = location.pathname.split('/')[2];
    const [data, setData] = useState<Property | null>(null);
    const [showAmenitiesModal, setShowAmenitiesModal] = useState(false);
    const [showAboutMore, setShowAboutMore] = useState(false);
    const [showNeighborhoodMore, setShowNeighborhoodMore] = useState(false);

    useEffect(() => {
        propertyData.forEach((item: any) => {
            const propertyName = item.property_name.toLowerCase().replace(/\s+/g, '-');
            if (propertyName === slug) {
                setData(item);
            }
        });
    }, [slug]);

    useEffect(() => {
        if (!data) return;

        // Fancybox v6 syntax
        (Fancybox as any).bind("[data-fancybox='property-gallery']", {
            Thumbs: {
                type: "classic",
            },
            Carousel: {
                transition: "slide",
            },
        });

        return () => {
            Fancybox.destroy();
        };
    }, [data]);

    const renderIcon = (iconName: string) => {
        const name = iconName.toLowerCase();
        if (name.includes('bed')) return <FaBed />;
        if (name.includes('shower') || name.includes('dryer')) return <FaShower />;
        if (name.includes('pool')) return <FaSwimmingPool />;
        if (name.includes('car') || name.includes('parking')) return <FaCar />;
        if (name.includes('wifi')) return <FaWifi />;
        if (name.includes('ac')) return <TbAirConditioning />;
        if (name.includes('lift') || name.includes('elevator')) return <PiElevatorDuotone />;
        if (name.includes('security')) return <PiSecurityCameraDuotone />;
        if (name.includes('tv')) return <FaTv />;
        if (name.includes('luggage')) return <RiLuggageCartLine />;
        if (name.includes('cleaning') || name.includes('housekeeping')) return <TfiBrushAlt />;
        if (name.includes('newspaper')) return <LiaNewspaper />;
        if (name.includes('breakfast') || name.includes('food')) return <MdOutlineEmojiFoodBeverage />;
        if (name.includes('card') || name.includes('payment')) return <FaCcMastercard />;
        if (name.includes('laundry')) return <MdOutlineLocalLaundryService />;
        return <MdOutlineDone />;
    };

    const formatAmenityName = (name: string) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    if (!data) return <p className='mt-40 mb-20 text-center text-3xl'>Loading...</p>;

    return (
        <section className="w-full pt-28 md:pt-0 tracking-wide">
            <div className='pt-10 pl-32'>
                <Subheading />
            </div>

            <div className="max-w-[85rem] flex flex-col gap-10 mx-auto px-4 sm:px-8 lg:px-16 py-8">
                {/* Property Header */}
                <div className="">
                    <h1 className="text-2xl sm:text-3xl font-semibold mb-2 capitalize">{data.property_name}</h1>
                    <div className="flex items-center text-gray-600">
                        <FaLocationDot className="mr-2 text-sm" />
                        <span className="text-sm sm:text-base">{data.property_location}</span>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="flex gap-2 h-64 md:h-96 lg:h-[450px] overflow-hidden ">
                    {/* Main image */}
                    <div className="flex-1 relative h-full">
                        <a href={data.property_img[0]} data-fancybox="property-gallery">
                            <img
                                src={data.property_img[0]}
                                alt="Main property"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </a>

                        <button
                            onClick={() =>
                                Fancybox.show(data.property_img.map(img => ({ src: img, type: "image" })))
                            }
                            className="absolute bottom-4 right-4 bg-black/60 text-white text-xs md:text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black/80 transition"
                        >
                            View photos
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 h-full">
                        {data.property_img.slice(1, 5).map((img, index) => (
                            <a key={index} href={img} data-fancybox="property-gallery">
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover rounded-md hover:opacity-80 transition"
                                />
                            </a>
                        ))}
                    </div>
                </div>


                <div className='flex flex-col gap-4 sm:flex-row '>
                    {/* Left div  */}
                    <div className="w-full sm:w-2/3">
                        {/* About this place */}
                        <div className=" pb-8 border-b">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4">About this place</h2>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                {showAboutMore
                                    ? data.property_description
                                    : `${data.property_description.slice(0, 200)}...`}
                            </p>
                            <button
                                onClick={() => setShowAboutMore(!showAboutMore)}
                                className="flex items-center mt-3 font-semibold underline hover:text-gray-700 transition"
                            >
                                Show {showAboutMore ? 'Less' : 'More'}
                                <ChevronRight className={`ml-1 w-4 h-4 transition-transform ${showAboutMore ? 'rotate-90' : ''}`} />
                            </button>
                        </div>

                        {/* About neighborhood */}
                        <div className=" pb-8 border-b">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4">About neighborhood</h2>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                Location & Neighborhood Located in {data.property_location}, this property offers easy access to major attractions and landmarks in the area.
                            </p>
                            {showNeighborhoodMore && (
                                <div className="text-gray-700 leading-relaxed mt-3">
                                    <p className="mb-2 font-medium">Nearby places include:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        {data.property_nearplaces.slice(0, 10).map((place, idx) => (
                                            <li key={idx}>{place}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <button
                                onClick={() => setShowNeighborhoodMore(!showNeighborhoodMore)}
                                className="flex items-center mt-3 font-semibold underline hover:text-gray-700 transition"
                            >
                                Show {showNeighborhoodMore ? 'Less' : 'More'}
                                <ChevronRight className={`ml-1 w-4 h-4 transition-transform ${showNeighborhoodMore ? 'rotate-90' : ''}`} />
                            </button>
                        </div>

                        {/* What this place offers */}
                        <div className=" pb-8 border-b">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-6">What this place offers</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {data.property_amenities.slice(0, 6).map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-3 sm:gap-4">
                                        <span className="text-xl sm:text-2xl text-gray-700">{renderIcon(amenity.amenities_icon)}</span>
                                        <span className="text-gray-800 text-sm sm:text-base">{formatAmenityName(amenity.amenities_icon)}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setShowAmenitiesModal(true)}
                                className="mt-6 px-6 py-3 border-2 border-black rounded-lg font-semibold hover:bg-gray-50 transition text-sm sm:text-base"
                            >
                                Show All Amenities
                            </button>
                        </div>

                        {/* Location Map */}
                        <div className="">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Where you'll be</h2>
                            <div className="rounded-lg overflow-hidden border">
                                <iframe
                                    src={data.property_mapSrc}
                                    className="w-full h-64 sm:h-96"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <p className="mt-4 text-gray-700 text-sm sm:text-base">{data.property_location}</p>
                        </div>

                        {/* Policies Section */}
                        {data.property_policy_details && (
                            <div className=" border rounded-lg overflow-hidden shadow-sm">
                                <div className="bg-white p-6">
                                    <h2 className="text-xl sm:text-2xl font-semibold mb-6">Things to know</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {data.property_policy_details
                                            .filter(policy => !policy.type.includes('Policy') && !policy.type.includes('Detailed'))
                                            .map((policy, idx) => (
                                                <div key={idx}>
                                                    <p className="text-gray-600 text-sm mb-1">{policy.type}</p>
                                                    <p className="font-medium text-gray-900">{policy.value}</p>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* right div  */}
                    <div className="w-full sm:w-1/3">
                        <div className='sticky top-16'>
                            <HotelBooking_Form />
                        </div>
                    </div>
                </div>

                {/* Amenities Modal */}
                {showAmenitiesModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                            <div className="flex items-center justify-between p-6 border-b">
                                <h3 className="text-xl sm:text-2xl font-semibold">All Amenities</h3>
                                <button
                                    onClick={() => setShowAmenitiesModal(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition"
                                >
                                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                                </button>
                            </div>

                            <div className="overflow-y-auto p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {data.property_amenities.map((amenity, idx) => (
                                        <div key={idx} className="flex items-center gap-3 sm:gap-4">
                                            <span className="text-xl sm:text-2xl text-gray-700">{renderIcon(amenity.amenities_icon)}</span>
                                            <span className="text-gray-800 text-sm sm:text-base">{formatAmenityName(amenity.amenities_icon)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 border-t">
                                <button
                                    onClick={() => setShowAmenitiesModal(false)}
                                    className="w-full px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PropertyDetails;
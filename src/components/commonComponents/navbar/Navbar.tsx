// import { Link } from 'react-router-dom';
// import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useEffect } from 'react';
import './navbar.css';
import { IoIosMail, IoIosCall } from 'react-icons/io';
// import { navbarData } from '../../../data';
import { IoLogoWhatsapp } from "react-icons/io";
// import { BiLogoInstagramAlt } from "react-icons/bi";

import {
    FaFacebook, FaTwitter, FaYoutube, FaInstagram
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import {
    IoIosArrowForward
} from "react-icons/io";
import { footerData } from '../../../data';

const iconMap = {
    ImGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
};

const Navbar = () => {
    // const navigate = useNavigate();
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isVillasDropdownOpen, setIsVillasDropdownOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    // const closeMenu = () => {
    //     setIsMenuOpen(false);
    //     setIsVillasDropdownOpen(false);
    // };

    // const handleDestinationNavigate = (property: any) => {
    //     navigate(`/property_LocationDetails/${property.id}`, { state: { property } });
    //     closeMenu()
    // };

    // const handleVillaNavigate = (property: any) => {
    //     navigate(`/property_details/${property.id}`, { state: { property } });
    //     closeMenu()
    // };

    useEffect(() => {
        const onLoadfunction = () => {
            const navbar = document.getElementById('navbar_container');
            const navlinks = document.getElementById('navlinks');
            if (navbar && navlinks) {
                if (window.scrollY > 20) {
                    // Change background to black and text to white
                    navbar.classList.add('bg-black', 'border-b-1', 'border-bg-primary', 'text-white');
                    navbar.classList.remove('bg-white');
                    navlinks.classList.add('text-white',);
                    navlinks.classList.remove('text-black');
                } else {
                    // Initial state: Background white, text black
                    navbar.classList.add('bg-white', 'text-black');
                    navbar.classList.remove('bg-black', 'border-b-1', 'border-bg-primary');
                    navlinks.classList.add('text-black');
                    navlinks.classList.remove('text-white');
                }
            }
        };

        window.addEventListener('scroll', onLoadfunction);
        onLoadfunction();

        return () => {
            window.removeEventListener('scroll', onLoadfunction);
        };
    }, []);


    return (
        <section className='navbar-container w-full h-fit fixed top-0 z-50'>
            {/* Email and Phone bg-[#1A2B48]*/}
            <div className="bg-primary flex flex-wrap text-white justify-between items-center gap-4 p-2 md:p-4 md:flex-nowrap">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full md:w-auto">
                    {/* Social Links */}
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <div className="flex gap-4">
                            {footerData.socialLinks.map(({ icon, link }, index) => {
                                const IconComponent = iconMap[icon];
                                return (
                                    <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                                        <IconComponent className="hover:text-white duration-300 cursor-pointer text-sm md:text-base" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <span className="text-slate-400 hidden md:block">|</span>

                    {/* Email */}
                    <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
                        <div className="flex items-center gap-2 font-semibold md:font-medium">
                            <IoIosMail className="text-lg md:text-2xl" />
                            <a href="mailto:atlashomeskphp@gmail.com" className="text-sm md:text-base hover:text-gray-300">
                                atlashomeskphp@gmail.com
                            </a>
                        </div>
                        {/* <div className="flex items-center gap-2 font-semibold md:font-medium">
                            <IoIosMail className="text-lg md:text-2xl" />
                            <a href="mailto:Support@onlystay.in" className="text-sm md:text-base hover:text-gray-300">
                                Support@onlystay.in
                            </a>
                        </div> */}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="flex flex-row justify-center items-center gap-4 w-full md:w-auto">
                    {/* Phone */}
                    <div className="flex items-center gap-2 font-semibold md:font-medium">
                        <IoIosCall className="text-lg md:text-xl" />
                        <span className="text-sm md:text-base">+91 9177773290</span>
                    </div>
                    <span className="text-slate-400 hidden md:block">|</span>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/7618406163"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 text-2xl"
                    >
                        <IoLogoWhatsapp />
                    </a>
                    <span className="text-slate-400 hidden md:block">|</span>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M7 2C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2H7ZM7 4H17C18.66 4 20 5.34 20 7V17C20 18.66 18.66 20 17 20H7C5.34 20 4 18.66 4 17V7C4 5.34 5.34 4 7 4ZM17 6C16.45 6 16 6.45 16 7C16 7.55 16.45 8 17 8C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9Z"
                                fill="#E4405F"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Main Nav */}
            <div id='navbar_container' className='bg-none transition-all duration-300 border-b border-transparent w-full h-full flex items-center justify-start gap-40 px-4 py-1 md:py-3 md:px-12'>
                {/* Menu Toggle Button (for mobile) */}
                {/* <button className='md:hidden text-primary text-2xl' onClick={toggleMenu}>
                    {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button> */}
                {/* Logo */}
                {/* <Link to='/'>
                    <img className='w-32 md:w-40 h-24 object-cover rounded-full' src={navbarData.logo[0].image} alt='Logo' />
                </Link> */}
                {/* Nav Links (Desktop) */}
                {/* <div id='navlinks' className='hidden md:flex items-center gap-4 text-black md:gap-8'>
                    <ul className='flex items-center gap-4 md:gap-8'>
                        {navbarData?.navmenu?.map((item) => (
                            <li key={item.id} className='relative'>
                                {
                                    item.title === 'Destinations' ? (
                                        <div className='relative group flex flex-col items-start gap-2'>
                                            <Link
                                                onClick={closeMenu}
                                                to={item.link}
                                                className='hover:text-primary after-effect text-sm md:text-xl font-bold cursor-pointer'
                                            >
                                                {item.title}
                                            </Link>
                                            <div className='absolute top-full left-0 hidden group-hover:block bg-white border shadow-md rounded-md min-w-[200px] z-10 transition-all duration-300'>
                                                <ul className='py-2'>
                                                    {propertyData.map((property, index) =>
                                                        <li key={index} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                                                            <div onClick={() => handleDestinationNavigate(property)} className='block text-black'>
                                                                {property.location}
                                                            </div>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>

                                    ) : item.title === 'Villas' ? (

                                        <div className='relative group flex flex-col items-start gap-2'>
                                            <Link
                                                onClick={closeMenu}
                                                to={item.link}
                                                className='hover:text-primary after-effect text-sm md:text-xl font-bold cursor-pointer'
                                            >
                                                {item.title}
                                            </Link>
                                            <div className='absolute top-full left-0 hidden group-hover:block bg-white border shadow-md rounded-md min-w-[200px] z-10 transition-all duration-300'>
                                                <ul className='py-2'>
                                                    {propertyData.map((property, index) =>
                                                        property.properties.map((data) =>
                                                            <li key={index} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                                                                <div onClick={() => handleVillaNavigate(data)} className='block text-black'>
                                                                    {data.property_name}
                                                                </div>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link onClick={closeMenu} to={item.link} className='hover:text-primary text-sm md:text-xl font-bold cursor-pointer'>
                                            {item.title}
                                        </Link>
                                    )}
                            </li>
                        ))}
                    </ul>
                </div> */}
            </div>

            {/* Mobile Menu */}
            {/* {isMenuOpen && (
                <div className='md:hidden bg-white w-full absolute top-44 left-0 z-50 shadow-lg'>
                    <ul className='flex flex-col items-start gap-4 p-4'>
                        {navbarData?.navmenu?.map((item) => (
                            <li key={item.id} className='w-full'>
                                {item.title === 'Destinations' || item.title === 'Villas' ? (
                                    <>
                                        <div
                                            className='flex justify-between items-center w-full p-2 font-bold cursor-pointer'
                                            onClick={() =>
                                                item.title === 'Villas'
                                                    ? setIsVillasDropdownOpen(!isVillasDropdownOpen)
                                                    : setIsMenuOpen(false)
                                            }
                                        >
                                            {item.title} <span>{isVillasDropdownOpen ? '▲' : '▼'}</span>
                                        </div>
                                        {isVillasDropdownOpen && item.title === 'Villas' && (
                                            <ul className='pl-4 bg-gray-100 shadow-md rounded-md'>
                                                {propertyData.map((property, index) =>
                                                    property.properties.map((data) => (
                                                        <li key={index} className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>
                                                            <div
                                                                onClick={() => handleDestinationNavigate(data)}
                                                                className='block text-black'
                                                            >
                                                                {data.property_name}
                                                            </div>
                                                        </li>
                                                    ))
                                                )}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        onClick={closeMenu}
                                        to={item.link}
                                        className='text-sm md:text-xl font-bold cursor-pointer p-2 block hover:text-primary transition-all duration-300'
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}

        </section>
    );
};

export default Navbar;

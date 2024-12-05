import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from "../../assets/Logo.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        // <nav className="sticky top-0 bg-[#F5F5F5] z-50">
        <nav className="sticky top-0 z-50 bg-white">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <NavLink to="/" className="">
                        <img src={logo} alt="" />
                    </NavLink>
                </div>

                {/* Menu Items */}
                <div className="hidden md:flex space-x-8 text-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-bold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-gray-800 hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        About
                    </NavLink>
                  
                    <NavLink
                        to="/blogs"
                         className={({ isActive }) =>
                            `text-gray-800 hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Blogs
                    </NavLink>
                    <NavLink
                        to="/contact"
                         className={({ isActive }) =>
                            `text-gray-800 hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                {/* Enquire Now Button */}
                <div className="hidden md:block text-lg">
                    <NavLink
                        to="/explore"
                        className="bg-[#00D094] border font-semibold px-4 py-2 rounded-md transition duration-300"
                    >
                       Join Now
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <FiMenu size={24} />
                    </button>
                </div>
            </div>

            {/* Responsive Menu Items */}
            {menuOpen && (
                <div className="md:hidden flex flex-col space-y-4 py-4 px-4 bg-white shadow-lg  text-lg">
                    <NavLink
                        to="/"
                        exact
                        className={({ isActive }) =>
                            `text-gray-800 hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                         className={({ isActive }) =>
                            `text-gray-800 hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        About
                    </NavLink>
                  
                    <NavLink
                        to="/blogs"
                         className={({ isActive }) =>
                            `text-gray-800 hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Blogs
                    </NavLink>
                    <NavLink
                        to="/contact"
                         className={({ isActive }) =>
                            `text-gray-800 hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Contacts
                    </NavLink>
                    <NavLink
                        to="/explore"
                        className="bg-[#00D094] border hover:text-white px-4 py-2 border-[#F8AF56]  rounded-md hover:bg-[#F8AF56] transition duration-300"
                    >
                       Join Now
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
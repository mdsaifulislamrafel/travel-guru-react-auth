import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
    return (
        <nav className="flex items-center justify-between md:justify-stretch md:gap-96 bg-[#393E46] px-4 py-2 text-white transform duration-1000 hover:mb-60 md:hover:mb-0 md:mt-5">
            <img src={logo} alt="" />
            <ul className="hidden items-center justify-between gap-24 md:flex">
                <Link to={"/"} className="group flex  cursor-pointer flex-col">
                    News<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <li className="group flex  cursor-pointer flex-col">
                    Destination<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex  cursor-pointer flex-col">
                    Blog<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex  cursor-pointer flex-col">
                    Contact<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <Link to={"/login"}><button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log In</button></Link>
            </ul>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <Link to={"/"} className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            News
                        </Link>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            Destination
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            Blog
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            Contact
                        </li>
                        <Link to={"/login"}><button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log In</button></Link>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
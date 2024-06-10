"use client";
import Link from "next/link";
import React from "react";
import Logo from "../../public/images/Logo.png"
import Image from "next/image";
import Navbare from '../components/Navebare'

const pageLinks = [
    {
        title:"Home",
        path:"../components/HomePage",
    },
    {
        title:"Contact",
        path:"../components/ContactPage",
    },
    {
        title:"About",
        path:"../components/AboutPage",
    },
    {
        title:"Profile",
        path:"../components/ProfilePage",
    },
    {
        title:"Register",
        path:"../components/RegisterPage",
    },
]
const Header = () => {
    return(
        <nav className="flex top-0 left-0 right-0 z-10 bg-SubMain bg-opacity-100 items-center ">
            <div className="flex flex-wrap items-center justify-between mx-auto py-6  w-[99%]">
                <Image
                    src={Logo}
                    alt="logo"
                    className="absolute transform w-[35px] h-[50px] ml-5"
                />
                
            </div>
            <div className="menu block md:w-auto" id="navbar">
                <ul className="flex p-2 md:p-0 md:flex-row md:space-x-4 mr-5">
                    { pageLinks.map((link, index) => (
                        <li key={index}>
                            <Navbare href={link.path} title={link.title} />

                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
}
export default Header;
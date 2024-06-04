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
]
const Header = () => {
    return(
        <nav className="flex top-0 left-0 right-0 z-10 bg-SubMain bg-opacity-100 items-center">
            <div className="flex flex-wrap items-center justify-between mx-auto py-6 py-10 w-[99%]">
                <Image
                    src={Logo}
                    alt="logo"
                    className="absolute transform  m-2"
                    width={40}
                    height={50}
                />
                
            </div>
            <div className="menu block md:w-auto" id="navbar text-TextColor1">
                <ul className="flex p-4 md:p-0 md :flex-row md:space-x-8 mt-0 ">
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
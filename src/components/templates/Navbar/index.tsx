'use client'
import React from "react";
import { useUIStore } from "@/store";

import Image from "next/image";
import { Icon } from "@/components";


export const NavbarComponent = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);


  return (

    <nav className="bg-gray-900  w-full z-20 fixed  top-0 start-0 border-b border-gray-600">
      <div className=" flex items-center justify-between p-3">
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={openSideMenu}
        >
          <span className="sr-only">Open main menu</span>
          <Icon name="IoMenu" size={24} />
        </button>
        <a href="https://flowbite.com/" className="flex items-center space-x-3">
          <Image
            width={32}
            height={52}
            src={'img/tigo_white.svg'}
              className="px-4 h-8 w-auto"
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex space-x-3">
          <button
            type="button"
            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-2 items-center text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 flex"
          >
            <Icon 
              name="FaPowerOff" 
              size={16}
              className="text-white mx-1" 
            />
            <p className="">Cerrar Sesion</p>
          </button>
        </div>
      </div>
    </nav>
  );
}

'use client'

import { useUIStore } from "@/store";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";
import { GrMoney } from "react-icons/gr";
import { IoShirtOutline } from "react-icons/io5";
import { PiPlantBold } from "react-icons/pi";
import { TbMoneybag, TbTool } from "react-icons/tb";


export const DrawerComponent = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);



  return (
    <>
      <Drawer
        isOpen={isSideMenuOpen}
        placement='left'
        onClose={closeSideMenu}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Link
              href="/ingresos"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={closeSideMenu}
            >
              <TbMoneybag size={30} />
              <span className="ml-3 text-xl">Ingresos</span>
            </Link>
            <Link
              href="/ofrendas"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={closeSideMenu}
            >
              <GrMoney size={30} />
              <span className="ml-3 text-xl">Ofrendas</span>
            </Link>
            <Link
              href="/diezmos"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={closeSideMenu}
            >
              <PiPlantBold size={30} />
              <span className="ml-3 text-xl">Diezmos</span>
            </Link>
            <Link
              href="mantenimiento"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={closeSideMenu}
            >
              <TbTool size={30} />
              <span className="ml-3 text-xl">Mantenimiento</span>
            </Link>

          </DrawerBody>


        </DrawerContent>
      </Drawer>
    </>
  );
}

'use client'


import { Icon } from "@/components/atoms";
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
              href="/productos"
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={closeSideMenu}
            >
              <Icon
                  name="FaShoppingBag"
                  className="text-2xl"
              />
              <span className="ml-3 text-xl">Productos</span>
            </Link>
            <Link
              href="/ordenes"
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaChartArea"
                className="text-2xl"
              />
              <span className="ml-3 text-xl">Ordenes</span>
            </Link>
            <Link
              href="/usuarios"
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaUser"
                className="text-2xl"
              />
              <span className="ml-3 text-xl">Usuarios</span>
            </Link>
            <Link
              href="/cupones"
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaTicketAlt"
                className="text-2xl"
              />
              <span className="ml-3 text-xl">Cupones</span>
            </Link>
            <Link
              href="/categorias"
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaClipboardList"
                className="text-2xl"
              />
              
              <span className="ml-3 text-xl">Categorias</span>
            </Link>

          </DrawerBody>


        </DrawerContent>
      </Drawer>
    </>
  );
}

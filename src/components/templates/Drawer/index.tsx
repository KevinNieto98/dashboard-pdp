'use client'


import { Icon } from "@/components/atoms";
import { useUIStore } from "@/store";
import {  Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";


export const DrawerComponent = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
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
          <DrawerHeader
            className="bg-blue-900 text-white"
          >Menu</DrawerHeader>

          <DrawerBody 
            className="bg-gray-900"          
          >
            <Link
              href="/productos"
              className="flex items-center mt-2 p-2 hover:bg-blue-900 rounded transition-all"
              onClick={closeSideMenu}
            >
              <Icon
                  name="FaShoppingBag"
                  className="text-2xl text-sky-400"
              />
              <span className="ml-3 text-xl text-sky-400">Productos</span>
            </Link>
            <Link
              href="/ordenes"
              className="flex items-center mt-2 p-2 hover:bg-blue-900 rounded transition-all text-sky-400"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaChartArea"
                className="text-2xl text-sky-400"
              />
              <span className="ml-3 text-xl">Ordenes</span>
            </Link>
            <Link
              href="/usuarios"
              className="flex items-center mt-2 p-2 hover:bg-blue-900 rounded transition-all text-sky-400"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaUser"
                className="text-2xl text-sky-400"
              />
              <span className="ml-3 text-xl">Usuarios</span>
            </Link>
            <Link
              href="/cupones"
              className="flex items-center mt-2 p-2 hover:bg-blue-900 rounded transition-all text-sky-400"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaTicketAlt"
                className="text-2xl text-sky-400"
              />
              <span className="ml-3 text-xl text-sky-400">Cupones</span>
            </Link>
            <Link
              href="/categorias"
              className="flex items-center mt-2 p-2 hover:bg-blue-900 rounded transition-all"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaClipboardList"
                className="text-2xl text-sky-400"
              />
              
              <span className="ml-3 text-xl text-sky-400">Categorias</span>
            </Link>
            <Link
              href="/marcas"
              className="flex items-center mt-2 p-2 hover:bg-blue-900 rounded transition-all text-sky-400"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaTag"
                className="text-2xl text-sky-400"
              />
              
              <span className="ml-3 text-xl text-sky-400">Marcas</span>
            </Link>
            <Link
              href="/lugares"
              className="flex items-center mt-2 p-2 hover:bg-blue-900 rounded transition-alltext-sky-400"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaLocationArrow"
                className="text-2xl text-sky-400"
              />
              
              <span className="ml-3 text-xl text-sky-400">Lugares</span>
            </Link>
            <Link
              href="/impuestos-descuentos"
              className="flex items-center mt-2 p-2 hover:bg-blue-900 rounded transition-all text-sky-400"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaPercent"
                className="text-2xl text-sky-400"
              />
              
              <span className="ml-3 text-md text-sky-400">Impuestos y Descuentos</span>
            </Link>
            <Link
              href="/metodos-de-pago"
              className="flex items-center mt-2 p-2 hover:bg-blue-900 rounded transition-all text-sky-400"
              onClick={closeSideMenu}
            >
              <Icon
                name="FaCreditCard"
                className="text-2xl text-sky-400 "
              />
              
              <span className="ml-3 text-md text-sky-400">Metodos de Pago</span>
            </Link>

          </DrawerBody>


        </DrawerContent>
      </Drawer>
    </>
  );
}

'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from '@nextui-org/react';
import { useUIStore } from "@/store";
import { IconButton } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';


export const NavbarComponent = () => {
 const openSideMenu = useUIStore((state) => state.openSideMenu);


  return (
    <Navbar position="sticky" className="bg-blue-800 text-white ">
      <NavbarBrand>
        <IconButton  
          aria-label='Menu'
          variant='ghost' 
          colorScheme='white'
          icon={<IoMenu />} 
          onClick={openSideMenu}
        />
        <Link
        href="/"
        >
            <p className="font-bold text-inherit ml-2">DASBOARD</p>
        </Link>
          
      </NavbarBrand>

      <NavbarContent as="div" justify="end" className="custom-max-width">
       
      </NavbarContent>
    </Navbar>
  );
}

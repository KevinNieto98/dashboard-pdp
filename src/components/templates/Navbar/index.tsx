'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from '@nextui-org/react';
import { useUIStore } from "@/store";
import { IconButton } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';


export const NavbarComponent = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  const prueba = () => {
    openSideMenu()
    console.log(isSideMenuOpen);
    console.log('isSideMenuOpen');

  };
  return (
    <Navbar position="sticky" className="bg-purple-800 text-white">
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
            <p className="font-bold text-inherit ml-2">DASBOARD PASTORAL</p>
        </Link>
          
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

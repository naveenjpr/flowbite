import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { href: "/accordion", label: "Accordion" },
    { href: "/alert", label: "Alert" },
    { href: "/avatar", label: "Avatar" },
    { href: "/button", label: "Button" },
    { href: "/buttonGroup", label: "ButtonGroup" },
    { href: "/cardFlowbite", label: "Card" },
    { href: "/carousel", label: "carousel" },
  ];

  return (
    <div className="sticky top-0 bg-white z-[999]" style={{ boxShadow: '0px 0px 10px grey' }}
>
      <Navbar fluid rounded className="">
        <NavbarBrand as={Link} href="/">
          <img
            src="/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </NavbarBrand>

        <NavbarToggle />

        <NavbarCollapse>
          {navItems.map((item) => (
            <NavbarLink key={item.href} as={Link} href={item.href}>
              {item.label}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}

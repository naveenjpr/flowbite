"use client";

import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo 
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiOutlinePlusSm,
  HiOutlineMinusSm,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { BiBuoy } from "react-icons/bi";

export default function App_Sidebar() {
  return (
    <div>
      <h1 className="text-center font-bold text-blue-600 text-[25px] underline decoration-dotted">
        Sidebar
      </h1>
      <div className=" grid lg:grid-cols-3 grid-cols-1 justify-between ">
        <Default_sidebar />
        <Multi_level_dropdown />
        <Multi_level_dropdown_with_custom_chevron />
        <Content_separator />
        <Sidebar_with_logo />
      </div>
    </div>
  );
}

function Default_sidebar() {
  return (
    <>
      <div>
        <h2>Default_sidebar</h2>
        <Sidebar
          aria-label="Default sidebar example"
          className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm"
        >
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarItem
                href="#"
                icon={HiViewBoards}
                label="Pro"
                labelColor="dark"
              >
                Kanban
              </SidebarItem>
              <SidebarItem href="#" icon={HiInbox} label="3">
                Inbox
              </SidebarItem>
              <SidebarItem href="#" icon={HiUser}>
                Users
              </SidebarItem>
              <SidebarItem href="#" icon={HiShoppingBag}>
                Products
              </SidebarItem>
              <SidebarItem href="#" icon={HiArrowSmRight}>
                Sign In
              </SidebarItem>
              <SidebarItem href="#" icon={HiTable}>
                Sign Up
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
}
function Multi_level_dropdown() {
  return (
    <>
      <div>
        <h2>Multi_level_dropdown</h2>
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm"
        >
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarCollapse icon={HiShoppingBag} label="E-commerce">
                <SidebarItem href="#">Products</SidebarItem>
                <SidebarItem href="#">Sales</SidebarItem>
                <SidebarItem href="#">Refunds</SidebarItem>
                <SidebarItem href="#">Shipping</SidebarItem>
              </SidebarCollapse>
              <SidebarItem href="#" icon={HiInbox}>
                Inbox
              </SidebarItem>
              <SidebarItem href="#" icon={HiUser}>
                Users
              </SidebarItem>
              <SidebarItem href="#" icon={HiShoppingBag}>
                Products
              </SidebarItem>
              <SidebarItem href="#" icon={HiArrowSmRight}>
                Sign In
              </SidebarItem>
              <SidebarItem href="#" icon={HiTable}>
                Sign Up
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
}
function Multi_level_dropdown_with_custom_chevron() {
  return (
    <>
      <div>
        <h2>Multi_level_dropdown_with_custom_chevron</h2>
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm"
        >
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarCollapse
                icon={HiShoppingBag}
                label="E-commerce"
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open
                    ? HiOutlineMinusSm
                    : HiOutlinePlusSm;

                  return (
                    <IconComponent
                      aria-hidden
                      className={twMerge(
                        theme.label.icon.open[open ? "on" : "off"]
                      )}
                    />
                  );
                }}
              >
                <SidebarItem href="#">Products</SidebarItem>
                <SidebarItem href="#">Sales</SidebarItem>
                <SidebarItem href="#">Refunds</SidebarItem>
                <SidebarItem href="#">Shipping</SidebarItem>
              </SidebarCollapse>
              <SidebarItem href="#" icon={HiInbox}>
                Inbox
              </SidebarItem>
              <SidebarItem href="#" icon={HiUser}>
                Users
              </SidebarItem>
              <SidebarItem href="#" icon={HiShoppingBag}>
                Products
              </SidebarItem>
              <SidebarItem href="#" icon={HiArrowSmRight}>
                Sign In
              </SidebarItem>
              <SidebarItem href="#" icon={HiTable}>
                Sign Up
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
}
function Content_separator() {
  return (
    <>
      <div className=" ">
        <h2>Content_separator</h2>
        <Sidebar
          aria-label="Sidebar with content separator example"
          className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm"
        >
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarItem href="#" icon={HiViewBoards}>
                Kanban
              </SidebarItem>
              <SidebarItem href="#" icon={HiInbox}>
                Inbox
              </SidebarItem>
              <SidebarItem href="#" icon={HiUser}>
                Users
              </SidebarItem>
              <SidebarItem href="#" icon={HiShoppingBag}>
                Products
              </SidebarItem>
              <SidebarItem href="#" icon={HiArrowSmRight}>
                Sign In
              </SidebarItem>
              <SidebarItem href="#" icon={HiTable}>
                Sign Up
              </SidebarItem>
            </SidebarItemGroup>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Upgrade to Pro
              </SidebarItem>
              <SidebarItem href="#" icon={HiViewBoards}>
                Documentation
              </SidebarItem>
              <SidebarItem href="#" icon={BiBuoy}>
                Help
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
}
function Sidebar_with_logo() {
  return (
    <>
      <div className=" ">
        <h2>Sidebar_with_logo</h2>
        <Sidebar aria-label="Sidebar with logo branding example" className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <SidebarLogo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
            Flowbite
          </SidebarLogo>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarItem href="#" icon={HiViewBoards}>
                Kanban
              </SidebarItem>
              <SidebarItem href="#" icon={HiInbox}>
                Inbox
              </SidebarItem>
              <SidebarItem href="#" icon={HiUser}>
                Users
              </SidebarItem>
              <SidebarItem href="#" icon={HiShoppingBag}>
                Products
              </SidebarItem>
              <SidebarItem href="#" icon={HiArrowSmRight}>
                Sign In
              </SidebarItem>
              <SidebarItem href="#" icon={HiTable}>
                Sign Up
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
}
//border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm
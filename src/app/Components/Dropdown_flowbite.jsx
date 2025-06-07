"use client";

import React from "react";

import {
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import Link from "next/link";
export default function Dropdown_flowbite() {
  return (
    <>
      <h1 className="text-center font-bold text-blue-600 text-[25px] underline decoration-dotted mb-[30px]">
        Dropdown_flowbite
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        <Default_dropdown />
        <Dropdown_divider />
        <Dropdown_header />
        <Dropdown_items_with_icon />
        <Inline_dropdown />
        <Dropdown_sizes />
        <Placement_options />
        <Click_event_handler />
        <Custom_trigger />
        <Custom_item />
      </div>
    </>
  );
}

function Default_dropdown() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Default_dropdown{" "}
      </h2>
      <Dropdown label="Dropdown button" dismissOnClick={false}>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    </div>
  );
}
function Dropdown_divider() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Dropdown_divider{" "}
      </h2>
      <Dropdown label="Dropdown button">
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Separated link</DropdownItem>
      </Dropdown>
    </div>
  );
}
function Dropdown_header() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Dropdown_header{" "}
      </h2>
      <Dropdown label="Dropdown button">
        <DropdownHeader>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">
            bonnie@flowbite.com
          </span>
        </DropdownHeader>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    </div>
  );
}
function Dropdown_items_with_icon() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Dropdown_items_with_icon{" "}
      </h2>
      <Dropdown label="Dropdown">
        <DropdownHeader>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">
            bonnie@flowbite.com
          </span>
        </DropdownHeader>
        <DropdownItem icon={HiViewGrid}>Dashboard</DropdownItem>
        <DropdownItem icon={HiCog}>Settings</DropdownItem>
        <DropdownItem icon={HiCurrencyDollar}>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={HiLogout}>Sign out</DropdownItem>
      </Dropdown>
    </div>
  );
}
function Inline_dropdown() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Inline_dropdown{" "}
      </h2>
      <Dropdown label="Dropdown" inline>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    </div>
  );
}
function Dropdown_sizes() {
  return (
    <div className="border rounded-lg shadow p-4  ">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Dropdown_sizes{" "}
      </h2>
      <div className="flex items-center gap-4">
        <Dropdown label="Small dropdown" size="sm">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Large dropdown" size="lg">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>
    </div>
  );
}
function Placement_options() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Placement_options{" "}
      </h2>
      <div className="flex flex-wrap gap-4">
        <Dropdown label="Dropdown top" placement="top">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Dropdown right" placement="right">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Dropdown bottom" placement="bottom">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Dropdown left" placement="left">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Dropdown left start" placement="left-start">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Dropdown right start" placement="right-start">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>
    </div>
  );
}
function Click_event_handler() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Click_event_handler
      </h2>
      <Dropdown label="Dropdown">
        <DropdownItem onClick={() => alert("Dashboard!")}>
          Dashboard
        </DropdownItem>
        <DropdownItem onClick={() => alert("Settings!")}>Settings</DropdownItem>
        <DropdownItem onClick={() => alert("Earnings!")}>Earnings</DropdownItem>
        <DropdownItem onClick={() => alert("Sign out!")}>Sign out</DropdownItem>
      </Dropdown>
    </div>
  );
}
function Custom_trigger() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Custom_trigger{" "}
      </h2>
      <Dropdown
        label=""
        dismissOnClick={false}
        renderTrigger={() => <span>My custom trigger</span>}
      >
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    </div>
  );
}
function Custom_item() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Custom_item{" "}
      </h2>
      <Dropdown dismissOnClick={false} label="My custom item">
        <DropdownItem as={Link} href="#">
          Home
        </DropdownItem>
        <DropdownItem as="a" href="https://flowbite.com/" target="_blank">
          External link
        </DropdownItem>
      </Dropdown>
    </div>
  );
}
// function Custom_trigger() {
//   return (
//     <div className="border rounded-lg shadow p-4">
//       <h2 className="text-center text-red-600 font-semibold mb-4">
//         Custom_trigger{" "}
//       </h2>
//       <Dropdown
//         label=""
//         dismissOnClick={false}
//         renderTrigger={() => <span>My custom trigger</span>}
//       >
//         <DropdownItem>Dashboard</DropdownItem>
//         <DropdownItem>Settings</DropdownItem>
//         <DropdownItem>Earnings</DropdownItem>
//         <DropdownItem>Sign out</DropdownItem>
//       </Dropdown>
//     </div>
//   );
// }
// function Custom_trigger() {
//   return (
//     <div className="border rounded-lg shadow p-4">
//       <h2 className="text-center text-red-600 font-semibold mb-4">
//         Custom_trigger{" "}
//       </h2>
//       <Dropdown
//         label=""
//         dismissOnClick={false}
//         renderTrigger={() => <span>My custom trigger</span>}
//       >
//         <DropdownItem>Dashboard</DropdownItem>
//         <DropdownItem>Settings</DropdownItem>
//         <DropdownItem>Earnings</DropdownItem>
//         <DropdownItem>Sign out</DropdownItem>
//       </Dropdown>
//     </div>
//   );
// }

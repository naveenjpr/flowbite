"use client";

import React from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";

import { Button, ButtonGroup, TabItem, Tabs, } from "flowbite-react";
import { useRef, useState } from "react";
import { MdDashboard } from "react-icons/md";
export default function React_Tabs() {
  return (
    <>
      <h1 className="text-center font-bold text-blue-600 text-[25px] underline decoration-dotted">
        Tabs - Flowbite
      </h1>
      <div className="grid grid-cols-1  gap-4">
        <Default_tabs />
        <Tabs_with_underline />
        <Tabs_with_icons />
        <Tabs_with_pills />
        <Full_width_tabs />
        <React_state_options />
      </div>
    </>
  );
}
function Default_tabs() {
  return (
    <>
      <div className="border-[1px]">
        <h2 className="text-center text-red-600 font-medium">Default_tabs</h2>
        <Tabs aria-label="Default tabs" variant="default">
          <TabItem active title="Profile" icon={HiUserCircle}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem title="Dashboard" icon={MdDashboard}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem title="Settings" icon={HiAdjustments}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem title="Contacts" icon={HiClipboardList}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem disabled title="Disabled">
            Disabled content
          </TabItem>
        </Tabs>
      </div>
    </>
  );
}
function Tabs_with_underline() {
  return (
    <>
      <div className="border-[1px]">
        <h2 className="text-center text-red-600 font-medium">
          Tabs_with_underline
        </h2>
        <Tabs aria-label="Tabs with underline" variant="underline">
          <TabItem active title="Profile" icon={HiUserCircle}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem title="Dashboard" icon={MdDashboard}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem title="Settings" icon={HiAdjustments}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem title="Contacts" icon={HiClipboardList}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem disabled title="Disabled">
            Disabled content
          </TabItem>
        </Tabs>
      </div>
    </>
  );
}
function Tabs_with_icons() {
  return (
    <>
      <div className="border-[1px]">
        <h2 className="text-center text-red-600 font-medium">
          Tabs_with_icons
        </h2>
        <Tabs aria-label="Tabs with icons" variant="underline">
          <TabItem active title="Profile" icon={HiUserCircle}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem title="Dashboard" icon={MdDashboard}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem title="Settings" icon={HiAdjustments}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem title="Contacts" icon={HiClipboardList}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </TabItem>
          <TabItem disabled title="Disabled">
            Disabled content
          </TabItem>
        </Tabs>
      </div>
    </>
  );
}
function Tabs_with_pills() {
  return (
    <>
      <div className="border-[1px]">
        <h2 className="text-center text-red-600 font-medium">
          Tabs_with_pills
        </h2>
        <Tabs aria-label="Pills" variant="pills">
          <TabItem active title="Tab 1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Content 1
            </p>
          </TabItem>
          <TabItem title="Tab 2">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Content 2
            </p>
          </TabItem>
          <TabItem title="Tab 3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Content 3
            </p>
          </TabItem>
          <TabItem title="Tab 4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Content 4
            </p>
          </TabItem>
          <TabItem disabled title="Tab 5">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Content 5
            </p>
          </TabItem>
        </Tabs>
      </div>
    </>
  );
}
function Full_width_tabs() {
  return (
    <>
      <div className="border-[1px]">
        <h2 className="text-center text-red-600 font-medium">
          Full_width_tabs
        </h2>
        <div className="overflow-x-auto">
          <Tabs aria-label="Full width tabs" variant="fullWidth">
            <TabItem active title="Profile" icon={HiUserCircle}>
              This is{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </TabItem>
            <TabItem title="Dashboard" icon={MdDashboard}>
              This is{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </TabItem>
            <TabItem title="Settings" icon={HiAdjustments}>
              This is{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </TabItem>
            <TabItem title="Contacts" icon={HiClipboardList}>
              This is{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </TabItem>
            <TabItem disabled title="Disabled">
              Disabled content
            </TabItem>
          </Tabs>
        </div>
      </div>
    </>
  );
}
function React_state_options() {
    const tabsRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="border-[1px]">
        <h2 className="text-center text-red-600 font-medium">
          React_state_options
        </h2>
        <div className="flex flex-col gap-3">
          <Tabs
            aria-label="Default tabs"
            variant="default"
            ref={tabsRef}
            onActiveTabChange={(tab) => setActiveTab(tab)}
          >
            <TabItem active title="Profile" icon={HiUserCircle}>
              This is{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </TabItem>
            <TabItem title="Dashboard" icon={MdDashboard}>
              This is{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </TabItem>
            <TabItem title="Settings" icon={HiAdjustments}>
              This is{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </TabItem>
            <TabItem title="Contacts" icon={HiClipboardList}>
              This is{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </TabItem>
            <TabItem disabled title="Disabled">
              Disabled content
            </TabItem>
          </Tabs>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Active tab: {activeTab}
          </div>
          <ButtonGroup>
            <Button
              color="gray"
              onClick={() => tabsRef.current?.setActiveTab(0)}
            >
              Profile
            </Button>
            <Button
              color="gray"
              onClick={() => tabsRef.current?.setActiveTab(1)}
            >
              Dashboard
            </Button>
            <Button
              color="gray"
              onClick={() => tabsRef.current?.setActiveTab(2)}
            >
              Settings
            </Button>
            <Button
              color="gray"
              onClick={() => tabsRef.current?.setActiveTab(3)}
            >
              Contacts
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
}

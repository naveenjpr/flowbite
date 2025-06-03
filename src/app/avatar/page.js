"use client";
import React from 'react';
import { Avatar, AvatarGroup, AvatarGroupCounter } from "flowbite-react";
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";

import Image from "next/image";


export default function ReactAvatarFlowbite() {
    return (
        <>
            <h1 className='text-center font-bold text-blue-600 text-[25px] underline decoration-dotted'>
                React Avatar - Flowbite
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>


                <Defaultavatar />
                <Avatarwithborder />
                <Avatarplaceholder />
                <Placeholderinitials />
                <Dotindicator />
                <Stackedlayout />
                <Avatarwithtext />
                <Avatardropdown />
                <Colors />
                <Sizes />
                <Overrideimageelement />
            </div>

        </>
    );
}

function Defaultavatar() {
    return (
        <>
            <div className='border-[1px]'>

                <h2 className='text-center text-red-600 font-medium'>Default Avatar</h2>
                <div className="flex flex-wrap gap-2">
                    <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
                    <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" />
                </div>
            </div>
        </>
    );
}

function Avatarwithborder() {
    return (
        <>
            <div className='border-[1px]'>

            <h2 className='text-center text-red-600 font-medium'>Avatar with Border</h2>
            <div className="flex flex-wrap gap-2">
                <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded bordered />
                <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" bordered />
            </div>
        </div>
        </>
    );
}

function Avatarplaceholder() {
    return (
        <>
            <div className='border-[1px]'>

                <h2 className='text-center text-red-600 font-medium'>Avatar Placeholder</h2>
                <div className="flex flex-wrap gap-2">
                    <Avatar />
                    <Avatar rounded />
                </div>
            </div>
        </>
    );
}

function Placeholderinitials() {
    return (
        <>
            <div className='border-[1px]'>

                <h2 className='text-center text-red-600 font-medium'>Placeholder Initials</h2>
                <div className="flex flex-wrap gap-2">
                    <Avatar placeholderInitials="RR" />
                    <Avatar placeholderInitials="RR" rounded />
                </div>
            </div>
        </>
    );
}

function Dotindicator() {
    return (
        <>
            <div className='border-[1px]'>

                <h2 className='text-center text-red-600 font-medium'>Dot Indicator</h2>
                <div className="flex flex-wrap gap-2">
                    <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" status="online" />
                    <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded status="busy" statusPosition="top-right" />
                    <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" status="offline" statusPosition="bottom-left" />
                    <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded status="away" statusPosition="bottom-right" />
                </div>
            </div>
        </>
    );
}

function Stackedlayout() {
    return (
        <>
            <div className='border-[1px]'>


                <h2 className='text-center text-red-600 font-medium'>Stacked Layout</h2>
                <div className="flex flex-wrap gap-2">
                    <AvatarGroup>
                        <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded stacked />
                        <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded stacked />
                        <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded stacked />
                        <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded stacked />
                        <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded stacked />

                    </AvatarGroup>
                    <AvatarGroup>
                        <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded stacked />
                        <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded stacked />
                        <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded stacked />
                        <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded stacked />
                        <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded stacked />
                        {/* <Avatar.Counter total={99} href="#" /> */}
                    </AvatarGroup>
                </div>
            </div>
        </>
    );
}
function Avatarwithtext() {
    return (
        <>
            <div className='border-[1px]'>

                <h2 className='text-center text-red-600 font-medium'>Avatar with text</h2>
                <Avatar img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded>
                    <div className="space-y-1 font-medium dark:text-white">
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                    </div>
                </Avatar>
            </div>
        </>
    );
}
function Avatardropdown() {
    return (
        <>
            <div className='border-[1px]'>


                <h2 className='text-center text-red-600 font-medium'>Avatar dropdown</h2>
                <Dropdown
                    label={<Avatar alt="User settings" img="https://flowbite-react.com/images/people/profile-picture-5.jpg" rounded />}
                    arrowIcon={false}
                    inline
                >
                    <DropdownHeader>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </DropdownHeader>
                    <DropdownItem>Dashboard</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Earnings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
            </div>
        </>
    );
}
function Colors() {
    return (
        <>
            <div className='border-[1px]'>


                <h2 className='text-center text-red-600 font-medium'>Colors</h2>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2">
                        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="gray" />
                        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="light" />
                        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="purple" />
                        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="success" />
                        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="pink" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="gray" />
                        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="light" />
                        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="purple" />
                        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="success" />
                        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="pink" />
                    </div>
                </div>
            </div>
        </>
    );
}
function Sizes() {
    return (
        <>
            <div className='border-[1px]'>
            <h2 className='text-center text-red-600 font-medium'>Sizes</h2>
                <div className="flex flex-wrap items-center gap-2">
                    <Avatar img="/images/people/profile-picture-5.jpg" size="xs" />
                    <Avatar img="/images/people/profile-picture-5.jpg" size="sm" />
                    <Avatar img="/images/people/profile-picture-5.jpg" size="md" />
                    <Avatar img="/images/people/profile-picture-5.jpg" size="lg" />
                    <Avatar img="/images/people/profile-picture-5.jpg" size="xl" />
                </div>
            </div>
        </>
    );
}
function Overrideimageelement() {
    return (
        <>
            <div className='border-[1px]'>


                <h2 className='text-center text-red-600 font-medium'>Override image element</h2>
                <div className="flex flex-wrap gap-2">
                    <Avatar
                        img={(props) => (
                            <Image
                                alt=""
                                height="48"
                                referrerPolicy="no-referrer"
                                src="/images/people/profile-picture-5.jpg"
                                width="48"
                                {...props}
                            />
                        )}
                    />
                    <Avatar
                        img={(props) => (
                            <picture>
                                <source media="(min-width: 900px)" srcSet="/images/people/profile-picture-3.jpg" />
                                <source media="(min-width: 480px)" srcSet="/images/people/profile-picture-4.jpg" />
                                <Image alt="" height="48" src="/images/people/profile-picture-5.jpg" width="48" {...props} />
                            </picture>
                        )}
                    />
                </div>
            </div>
        </>
    );
}

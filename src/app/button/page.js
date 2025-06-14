import React from 'react'
import { Badge, Button, Spinner } from "flowbite-react";
import Link from "next/link";

import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
export const metadata = {
    title: "Flowbite_button",
    description: "Generated by create next app",
  };
export default function Flowbite_button() {
    return (
        <>
            <h1 className='text-center font-bold text-blue-600 text-[25px] underline decoration-dotted'>
                React Button - Flowbite
            </h1>
            <div>
                <Default_buttons />
                <Button_pills />
                <Gradient_monochrome />
                <Gradient_duotone />
                <Outline_buttons />
                <Button_sizes />
                <Buttons_with_icon />
                <Button_with_label />
                <Button_with_only_icons />
                <Button_with_loading_state />
                <Disabled_buttons />
                <Override_Button_base_component />
            </div>
        </>
    )
}

function Default_buttons() {
    return (
        <>
            <h2 className='text-center text-red-600 font-medium'>Default buttons</h2>

            <div className=" flex flex-wrap gap-2 justify-center items-center my-4">
                <Button>Default</Button>
                <Button color="alternative">Alternative</Button>
                <Button color="dark">Dark</Button>
                <Button color="light">Light</Button>
                <Button color="green">Green</Button>
                <Button color="red">Red</Button>
                <Button color="yellow">Yellow</Button>
                <Button color="purple">Purple</Button>
            </div>
        </>
    )
}

function Button_pills() {
    return (
        <>
            <h2 className='text-center text-red-600 font-medium'>Button pills</h2>

            <div className="flex flex-wrap gap-2 justify-center my-4">
                <Button pill>Default</Button>
                <Button color="alternative" pill>
                    Alternative
                </Button>
                <Button color="dark" pill>
                    Dark
                </Button>
                <Button color="light" pill>
                    Light
                </Button>
                <Button color="green" pill>
                    Green
                </Button>
                <Button color="red" pill>
                    Red
                </Button>
                <Button color="yellow" pill>
                    Yellow
                </Button>
                <Button color="purple" pill>
                    Purple
                </Button>
            </div>
        </>
    )
}
function Gradient_monochrome() {
    return (
        <>
            <h2 className='text-center text-red-600 font-medium'>Gradient_monochrome</h2>

            <div className="flex flex-wrap gap-2">
                <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800">
                    Blue
                </Button>
                <Button className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800">
                    Green
                </Button>
                <Button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800">
                    Cyan
                </Button>
                <Button className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800">
                    Teal
                </Button>
                <Button className="bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800">
                    Lime
                </Button>
                <Button className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800">
                    Red
                </Button>
                <Button className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800">
                    Pink
                </Button>
                <Button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800">
                    Purple
                </Button>
            </div>
        </>
    )
}
function Gradient_duotone() {
    return (

        <>
            <h2 className='text-center text-red-600 font-medium'>Gradient_duotone</h2>

            <div className="flex flex-wrap gap-2">
                <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
                    Purple to Blue
                </Button>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800">
                    Cyan to Blue
                </Button>
                <Button className="bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800">
                    Green to Blue
                </Button>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800">
                    Purple to Pink
                </Button>
                <Button className="bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800">
                    Pink to Orange
                </Button>
                <Button className="bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700">
                    Teal to Lime
                </Button>
                <Button className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400">
                    Red to Yellow
                </Button>
            </div>
        </>
    )
}
function Outline_buttons() {
    return (

        <>
            <h2 className='text-center text-red-600 font-medium'>Outline_buttons</h2>

            <div className="flex flex-wrap gap-2">
                <Button outline>Default</Button>
                <Button color="dark" outline>
                    Dark
                </Button>
                <Button color="green" outline>
                    Green
                </Button>
                <Button color="red" outline>
                    Red
                </Button>
                <Button color="yellow" outline>
                    Yellow
                </Button>
                <Button color="purple" outline>
                    Purple
                </Button>
            </div>
        </>
    )
}
function Button_sizes() {
    return (

        <>
            <h2 className='text-center text-red-600 font-medium'>Button_sizes</h2>

            <div className="flex flex-wrap items-start gap-2">
                <Button size="xs">Extra small</Button>
                <Button size="sm">Small</Button>
                <Button size="md">Base</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra large</Button>
            </div>
        </>
    )
}
function Buttons_with_icon() {
    return (

        <>
            <h2 className='text-center text-red-600 font-medium'>Buttons_with_icon</h2>
            <div className="flex flex-wrap gap-2">
                <Button>
                    <HiShoppingCart className="mr-2 h-5 w-5" />
                    Buy now
                </Button>
                <Button>
                    Choose plan
                    <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </>
    )
}
function Button_with_label() {
    return (

        <>
            <h2 className='text-center text-red-600 font-medium'>Button_with_label</h2>
            <Button>
                Messages
                <Badge className="ms-2 rounded-full px-1.5">2</Badge>
            </Button>
        </>
    )
}
function Button_with_only_icons() {
    return (

        <>
            <h2 className='text-center text-red-600 font-medium'>Button_with_only_icons</h2>
            <div className="flex flex-wrap gap-2">
                <Button>
                    <HiOutlineArrowRight className="h-6 w-6" />
                </Button>
                <Button pill>
                    <HiOutlineArrowRight className="h-6 w-6" />
                </Button>
                <Button outline>
                    <HiOutlineArrowRight className="h-6 w-6" />
                </Button>
                <Button outline pill>
                    <HiOutlineArrowRight className="h-6 w-6" />
                </Button>
            </div>
        </>
    )
}
function Button_with_loading_state() {
    return (

        <>
            <h2 className='text-center text-red-600 font-medium'>Button_with_loading_state</h2>
            <div className="flex flex-wrap items-start gap-2">
                <Button>
                    <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
                    Loading...
                </Button>
                <Button color="alternative">
                    <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
                    Loading...
                </Button>
            </div>
        </>
    )
}
function Disabled_buttons() {
    return (

        <>
            <h2 className='text-center text-red-600 font-medium'>Disabled_buttons</h2>
            <Button disabled>Disabled button</Button>
        </>
    )
}
function Override_Button_base_component() {
    return (

        <>
            <h2 className='text-center text-red-600 font-medium'>Override_Button_base_component</h2>
            <div className="flex flex-wrap gap-2">
                <Button as="span" className="cursor-pointer">
                    Span Button
                </Button>
                <Button as={Link} href="#">
                    Next Link Button
                </Button>
            </div>        </>
    )
}
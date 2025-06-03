import React from 'react'
import Image from "next/image";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
export default function Faq() {
    return (
        <>
            <h1 className='text-center font-bold text-[blue] text-[25px] underline  decoration-dotted'> Flowbite Accordion</h1>
            <Accordion>
                <AccordionPanel>
                    <AccordionTitle>What is Flowbite?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                            dropdowns, modals, navbars, and more.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out this guide to learn how to&nbsp;



                            get started&nbsp;

                            and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>Is there a Figma file available?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                            has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the
                            Figma design system

                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                            components, whereas Tailwind UI offers sections of pages.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                            technical reason stopping you from using the best of two worlds.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                            <li>

                                Flowbite Pro
                            </li>
                            <li>

                                Tailwind UI
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>

        </>

    )
}

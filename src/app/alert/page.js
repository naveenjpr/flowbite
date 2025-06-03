"use client";
import React from 'react';
import { Alert } from "flowbite-react";
import { HiEye, HiInformationCircle } from "react-icons/hi";

export default function Flowbite_Default_alert() {
    return (
        <>
            <h1 className='text-center font-bold text-[blue] text-[25px] underline decoration-dotted'>
                Flowbite Default alert
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                <Defaultalert />
                <Alert_with_icon />
                <Dismissible_alert />
                <Rounded_alert />
                <Border_accent />
                <Additional_content />
                <All_options />
            </div>
        </>
    );
}

function Defaultalert() {
    return (
        <><div>


            <h2 className='text-center text-[red] font-medium'>Default alert</h2>
            <Alert color="info">
                <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
            </Alert>
        </div>
        </>
    );
}

function Alert_with_icon() {
    return (
        <>
            <div>

                <h2 className='text-center text-[red] font-medium'>Alert_with_icon</h2>


                <Alert color="failure" icon={HiInformationCircle}>
                    <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
                </Alert>
            </div>
        </>
    );
}

function Dismissible_alert() {
    return (
        <>
            <div>
                <h2 className='text-center text-[red] font-medium'>Dismissible_alert</h2>


                <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
                    <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
                </Alert>
            </div>
        </>
    );
}

function Rounded_alert() {
    return (
        <>
            <div>


                <h2 className='text-center text-[red] font-medium'>Rounded_alert</h2>

                <Alert color="warning" rounded>
                    <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
                </Alert>
            </div>
        </>
    );
}

function Border_accent() {
    return (
        <>
            <div>


                <h2 className='text-center text-[red] font-medium'>Border_accent</h2>

                <Alert color="warning" withBorderAccent>
                    <span>
                        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
                    </span>
                </Alert>
            </div>
        </>
    );
}

function Additional_content() {
    return (
        <>
            <div>


                <h2 className='text-center text-[red] font-medium'>Additional_content</h2>

                <Alert additionalContent={<ExampleAdditionalContent />} color="warning" icon={HiInformationCircle}>
                    <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
                </Alert>
            </div>
        </>
    );
}

function ExampleAdditionalContent() {
    return (
        <>
            <div>

                <h2 className='text-center text-[red] font-medium'>ExampleAdditionalContent</h2>

                <div className="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
                    More info about this alert can be found here. Please take a look at the documentation.
                </div>
            </div>
        </>
    );
}

function All_options() {


    return (


        <>
            <div>

                <h2 className='text-center text-[red] font-medium'>All_options</h2>

                <Alert
                    additionalContent={<ExampleAdditionalContent />}
                    color="success"
                    icon={HiInformationCircle}
                    onDismiss={() => alert('Alert dismissed!')}
                    rounded
                >
                    <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
                </Alert>
            </div>
        </>
    )
}
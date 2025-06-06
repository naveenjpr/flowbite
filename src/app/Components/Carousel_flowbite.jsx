"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // FontAwesome Icons

export default function Carousel_flowbite() {
  return (
    <>
      <h1 className="text-center font-bold text-blue-600 text-[25px] underline decoration-dotted mb-[200px]">
        React Carousel - Flowbite
      </h1>
      <div className="grid grid-cols-1 gap-12 px-4">
        <Default_carousel />
        <Static_carousel />
        <Sliding_interval />
        <Custom_controls />
        <Indicators />
        <Pause_On_Hover />
        <Slider_content />
        <Handle_onSlideChanged_event />
      </div>
    </>
  );
}
function Default_carousel() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Default Carousel
      </h2>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
        <Carousel>
          <img
            src="/logo.svg"
            alt="Slide 1"
            className="w-full h-full "
          />
          <img
            src="/logo.svg"
            alt="Slide 2"
            className="w-full h-full "
          />
          <img
            src="/logo.svg"
            alt="Slide 3"
            className="w-full h-full "
          />
          <img
            src="/logo.svg"
            alt="Slide 4"
            className="w-full h-full "
          />
          <img
            src="/logo.svg"
            alt="Slide 5"
            className="w-full h-full "
          />
        </Carousel>
      </div>
    </div>
  );
}
function Static_carousel() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Static Carousel
      </h2>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
        <Carousel slide={false}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="Slide 5"
            className="w-full h-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
}

function Sliding_interval() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Sliding Interval Carousel
      </h2>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
        <Carousel slideInterval={5000}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="Slide 5"
            className="w-full h-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
}
function Custom_controls() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Custom Controls
      </h2>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel leftControl="left" rightControl="right">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            className="w-full h-full object-cover"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            className="w-full h-full object-cover"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            className="w-full h-full object-cover"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            className="w-full h-full object-cover"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            className="w-full h-full object-cover"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
function Indicators() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Indicators{" "}
      </h2>
      <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            className="w-full h-full"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            className="w-full h-full"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            className="w-full h-full"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            className="w-full h-full"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            className="w-full h-full"
            alt="..."
          />
        </Carousel>
        <Carousel indicators={false}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            className="w-full h-full"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            className="w-full h-full"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            className="w-full h-full"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            className="w-full h-full"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            className="w-full h-full"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
function Pause_On_Hover() {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-center text-red-600 font-semibold mb-4">
        Pause_On_Hover{" "}
      </h2>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..." className="w-full h-full cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..." className="w-full h-full cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..." className="w-full h-full cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..." className="w-full h-full cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..." className="w-full h-full cover"
          />
        </Carousel>
      </div>
    </div>
  );
}
function Slider_content(){
    return (
        <div className="border rounded-lg shadow p-4">
          <h2 className="text-center text-red-600 font-semibold mb-4">
          Slider_content          </h2>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
        </div>
      );
}
function Handle_onSlideChanged_event(){
    return (
        <div className="border rounded-lg shadow p-4">
          <h2 className="text-center text-red-600 font-semibold mb-4">
          Handle_onSlideChanged_event          </h2>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log("onSlideChange()", index)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
        </div>
      );
}
// function Sliding_interval(){
//     return (
//         <div className="border rounded-lg shadow p-4">
//           <h2 className="text-center text-red-600 font-semibold mb-4">
//             Sliding Interval Carousel
//           </h2>
//           <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
//             <Carousel slideInterval={5000}>
//               <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Slide 1" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Slide 2" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Slide 3" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Slide 4" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Slide 5" className="w-full h-full object-cover" />
//             </Carousel>
//           </div>
//         </div>
//       );
// }
// function Sliding_interval(){
//     return (
//         <div className="border rounded-lg shadow p-4">
//           <h2 className="text-center text-red-600 font-semibold mb-4">
//             Sliding Interval Carousel
//           </h2>
//           <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
//             <Carousel slideInterval={5000}>
//               <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Slide 1" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Slide 2" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Slide 3" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Slide 4" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Slide 5" className="w-full h-full object-cover" />
//             </Carousel>
//           </div>
//         </div>
//       );
// }
// function Sliding_interval(){
//     return (
//         <div className="border rounded-lg shadow p-4">
//           <h2 className="text-center text-red-600 font-semibold mb-4">
//             Sliding Interval Carousel
//           </h2>
//           <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
//             <Carousel slideInterval={5000}>
//               <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Slide 1" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Slide 2" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Slide 3" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Slide 4" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Slide 5" className="w-full h-full object-cover" />
//             </Carousel>
//           </div>
//         </div>
//       );
// }
// function Sliding_interval(){
//     return (
//         <div className="border rounded-lg shadow p-4">
//           <h2 className="text-center text-red-600 font-semibold mb-4">
//             Sliding Interval Carousel
//           </h2>
//           <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
//             <Carousel slideInterval={5000}>
//               <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Slide 1" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Slide 2" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Slide 3" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Slide 4" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Slide 5" className="w-full h-full object-cover" />
//             </Carousel>
//           </div>
//         </div>
//       );
// }
// function Sliding_interval(){
//     return (
//         <div className="border rounded-lg shadow p-4">
//           <h2 className="text-center text-red-600 font-semibold mb-4">
//             Sliding Interval Carousel
//           </h2>
//           <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
//             <Carousel slideInterval={5000}>
//               <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Slide 1" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Slide 2" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Slide 3" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Slide 4" className="w-full h-full object-cover" />
//               <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Slide 5" className="w-full h-full object-cover" />
//             </Carousel>
//           </div>
//         </div>
//       );
// }

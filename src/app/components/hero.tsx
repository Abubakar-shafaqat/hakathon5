// Importing required modules and components
import Image from "next/image"; // For optimized images in Next.js
import Link from "next/link"; // For navigation between pages
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // For heart icons
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Custom card component

import Pickanddrop from "./Pick&Drop"; // Importing the PickandDrop component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // For FontAwesome icons
import { MdPeopleOutline } from "react-icons/md"; // For material design icons
import { faCar, faGasPump } from "@fortawesome/free-solid-svg-icons"; // Solid icons from FontAwesome

export default function Hero() {
  // Array containing car data
  const cars = [
    { name: "Koenigsegg", type: "Sport", image: "/car.png", liked: true },
    { name: "Nissan GT-R", type: "Sport", image: "/car1.png", liked: false },
    { name: "Rolls-Royce", type: "Sedan", image: "/car2.png", liked: true },
    { name: "All New Rush", type: "SUV", image: "/car3.png", liked: false },
    { name: "CR-V", type: "SUV", image: "/car4.png", liked: true },
    { name: "All New Terios", type: "SUV", image: "/car5.png", liked: false },
    { name: "MG ZX Exclusive", type: "SUV", image: "/car6.png", liked: true },
    { name: "New MG ZS", type: "SUV", image: "/car7.png", liked: false },
    { name: "Koenigsegg", type: "Sport", image: "/car.png", liked: true },
    { name: "Nissan GT-R", type: "Sport", image: "/car1.png", liked: false },
    { name: "Rolls-Royce", type: "Sedan", image: "/car2.png", liked: true },
    { name: "All New Rush", type: "SUV", image: "/car3.png", liked: false },
  ];

  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row gap-4 sm:gap-8 justify-center items-center">
        <img
          src="/bg2.png"
          alt="Background 1"
          className="w-full md:w-1/2 h-auto object-cover"
        />
        <img
          src="/bg1.png"
          alt="Background 2"
          className="w-full md:w-1/2 h-auto object-cover"
        />
      </section>

      {/* Adding Space Between Images and Header */}
      <div className="mt-6 sm:mt-10 md:mt-14 lg:mt-20"></div>

      {/* Pick and Drop Component */}
      <Pickanddrop />

      {/* Popular Cars Section */}
      <section className="w-full flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Cars</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline">
              View All
            </h1>
          </Link>
        </div>

        {/* Car Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <Card key={index} className="w-full max-w-sm mx-auto flex flex-col">
              {/* Card Header */}
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {car.name}
                  {car.liked ? (
                    <AiFillHeart className="text-red-500 cursor-pointer" />
                  ) : (
                    <AiOutlineHeart className="text-gray-500 cursor-pointer" />
                  )}
                </CardTitle>
                <CardDescription>{car.type}</CardDescription>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={220}
                  height={68}
                />
              </CardContent>

              {/* Additional Car Info */}
              <div className="flex items-center space-x-1 justify-center">
                <FontAwesomeIcon
                  icon={faGasPump}
                  className="text-gray-400"
                  style={{ width: "20px", height: "20px" }}
                />
                <span className="text-sm">80L</span>
                <FontAwesomeIcon
                  icon={faCar}
                  className="text-gray-400"
                  style={{ width: "20px", height: "20px" }}
                />
                <span className="text-sm">Manual</span>
                <MdPeopleOutline size={30} className="text-gray-400" />
                <span className="text-sm">2 People</span>
              </div>

              {/* Card Footer */}
              <CardFooter className="flex justify-between items-center">
                <p>
                  $99.00/<span className="text-gray-500">day</span>
                </p>
                <Link href="/details">
                  <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Show More Cars Button */}
      <section className="text-center">
        <Link href={"/othercars"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-6 sm:mt-10">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}

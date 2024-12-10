"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { faCar, faGasPump } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdPeopleOutline } from "react-icons/md";

import Sidebar from "../components/sidebar";
import Image from "next/image";

function MoreCars() {
  const cars = [
    { name: "Koenigsegg", type: "Sport", image: "/car.png", liked: true },
    { name: "Nissan GT-R", type: "Sport", image: "/car1.png", liked: false },
    { name: "Rolls-Royce", type: "Sedan", image: "/car2.png", liked: true },
    { name: "All New Rush", type: "SUV", image: "/car3.png", liked: false },
    { name: "CR-V", type: "SUV", image: "/car4.png", liked: true },
    { name: "All New Terios", type: "SUV", image: "/car5.png", liked: false },
    { name: "MG ZX Exclusive", type: "SUV", image: "/car6.png", liked: true },
    { name: "New MG ZS", type: "SUV", image: "/car7.png", liked: false },
  ];

  return (
    <div className="grid grid-cols-[20%_80%]">
      <div>
        <Sidebar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <section className="col-span-full w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
      <Image src={"/Pick - Up.png"} alt="" width={410} height={132} className="max-w-full" />
        <Image src={"/Switch.png"} alt="" width={60} height={60} className="max-w-full" />
        <Image src={"/Drop - Off.png"} alt="" width={410} height={132} className="max-w-full" />
</section>


        {cars.map((car, index) => (
          <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                {car.name}
                {car.liked ? (
                  <AiFillHeart className="text-red-500 cursor-pointer" size={20} />
                ) : (
                  <AiOutlineHeart className="text-gray-500 cursor-pointer" size={20} />
                )}
              </CardTitle>
              <CardDescription>{car.type}</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <img src={car.image} alt={`Image of ${car.name}`} width={220} height={68} />
              <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faGasPump} className="text-gray-400" style={{ width: "20px", height: "20px" }} />
<span className="text-sm">80L</span>
<FontAwesomeIcon icon={faCar} className="text-gray-400" style={{ width: "20px", height: "20px" }} />
<span className="text-sm">Manual</span>
<MdPeopleOutline size={30} className="text-gray-400" />
<span className="text-sm">2 People</span>

              </div>
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                <a href="/details">Rent Now</a>
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MoreCars;

import React from "react"
import Image, { ImageProps } from "next/image";

import { Cloud, HeroFloor, Sun, TreeLeft, TreeRight } from "@/lib/svg";

const CAROUSEL_DATA: ImageProps[] = [
    {
        src: "/carousel/Van.png",
        alt: "Van Image from storyset",
        width: 505,
        height: 279,
    },
    {
        src: "/carousel/Car.png",
        alt: "Car Image from storyset",
        width: 455,
        height: 279,
    },
    {
        src: "/carousel/MiniBus.png",
        alt: "Mini Bus Image from storyset",
        width: 605,
        height: 215,
    },
    {
        src: "/carousel/DoubleDecker.png",
        alt: "Double Decker Image from storyset",
        width: 665,
        height: 215,
    }
]

function HeroSection() {
    return (
        <section className="w-full relative h-screen flex items-start justify-center pt-16">

            <div className="flex flex-col items-center justify-center gap-3">
                <span className="text-md text-center">50 Years of Trusted Travel in Mumbai.</span>
                <h1
                    className="font-display text-7xl text-center font-black italic tracking-tight"
                >
                    <span className="text-primary">Shetty tours</span> <br /> & travels
                </h1>
            </div>

            <div className="absolute bottom-0">
                <Image 
                    {...CAROUSEL_DATA[3]}
                />
            </div>

            <div
                className="absolute left-18 bottom-0"
            >
                <TreeLeft />
            </div>
            <div 
                className="absolute right-18 bottom-0"
            >
                <TreeRight />
            </div>

            <Cloud className="absolute top-12 left-[20%] scale-50 -z-10" opacity={.5} />
            <Cloud className="absolute top-[25%] right-[15%] -z-10" opacity={.7} />
            <Cloud className="absolute top-[20%] left-36 -z-10" opacity={.8} />

            <Sun className="w-48 h-48 absolute top-12 right-20" />
            <HeroFloor className="w-full absolute bottom-0 -z-10" />
        </section>
    );
}

export default React.memo(HeroSection); 
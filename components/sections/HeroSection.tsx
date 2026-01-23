"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react"
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Cloud, HeroFloor, Sun, TreeLeft, TreeRight } from "@/lib/svg";

const CAROUSEL_DATA: ImageProps[] = [
    {
        src: "/carousel/Van.png",
        alt: "Van Image from storyset",
        width: 505,
        height: 279,
    },
    {
        src: "/carousel/MiniBus.png",
        alt: "Mini Bus Image from storyset",
        width: 605,
        height: 215,
    },
    {
        src: "/carousel/Car.png",
        alt: "Car Image from storyset",
        width: 455,
        height: 279,
    },
    {
        src: "/carousel/DoubleDecker.png",
        alt: "Double Decker Image from storyset",
        width: 635,
        height: 160,
    }
];

const CLOUD_COLORS = [
    "#87CEEB", // sky blue for Van
    "#FF6B6B", // coral red for Car
    "#FFD700", // golden yellow for MiniBus
    "#FF6347", // tomato red for DoubleDecker
];

const CloudAnimated = React.memo(({ className, opacity, color, delay = 0 }: {
    className: string;
    opacity: number;
    color: string;
    delay?: number;
}) => {
    return (
        <motion.div
            className={className}
            initial={{ x: -20, opacity: opacity * 0.5 }}
            animate={{
                x: [0, 20, 0],
                opacity: [opacity * 0.5, opacity, opacity * 0.5]
            }}
            transition={{
                duration: 8,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <div className="relative">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={color}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 3.5,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0"
                    >
                        <Cloud opacity={opacity} color={color} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
});

CloudAnimated.displayName = "CloudAnimated";


const SunAnimated = React.memo(() => {
    return (
        <motion.div
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 absolute top-8 sm:top-12 right-10 sm:right-20 scale-0 sm:scale-100"
            animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0]
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Sun />
        </motion.div>
    );
});

SunAnimated.displayName = "SunAnimated";

const TreeAnimated = React.memo(({
    Component,
    className,
    delay = 0
}: {
    Component: typeof TreeLeft | typeof TreeRight;
    className: string;
    delay?: number;
}) => {
    return (
        <motion.div
            className={className}
            animate={{
                rotate: [-1, 1, -1],
                y: [0, -5, 0]
            }}
            transition={{
                duration: 4,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Component />
        </motion.div>
    );
});

TreeAnimated.displayName = "TreeAnimated";

function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentColor = useMemo(() =>
        CLOUD_COLORS[currentIndex % CLOUD_COLORS.length],
        [currentIndex]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentVehicle = useMemo(() =>
        CAROUSEL_DATA[currentIndex],
        [currentIndex]
    );

    return (
        <section className="w-full relative h-[60vh] sm:h-screen flex items-start justify-center pt-16 sm:pt-26 overflow-hidden">

            <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 px-4">
                <motion.span
                    className="text-xs sm:text-sm md:text-base text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    50 Years of Trusted Travel in Mumbai.
                </motion.span>
                <motion.h1
                    className="font-display text-5xl md:text-6xl lg:text-7xl text-center font-black italic tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-primary">Shetty Tours</span> <br /> & Travels
                </motion.h1>
                <div className="w-[80%] flex items-center justify-center">
                    <motion.a
                        href="#get-in-touch"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-[80%] mt-2 bg-secondary text-foreground font-bold py-3 md:py-4 rounded-full text-xs md:text-lg cursor-pointer transition-shadow shadow-[3px_3px_0_var(--accent)] hover:shadow-[5px_5px_0_var(--accent)] inline-flex items-center justify-center"
                        aria-label="Get Pricings"
                    >
                        Get Pricings
                    </motion.a>
                </div>
            </div>

            <div className="absolute bottom-0 sm:bottom-16 md:bottom-20 lg:bottom-0 left-1/2 -translate-x-1/2 w-[80%] sm:w-[70%] md:w-auto z-30">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 1, x: "150%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        <Image
                            {...currentVehicle}
                            className="w-full h-auto"
                            loading="eager"
                            priority
                            fetchPriority="high"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <TreeAnimated
                Component={TreeLeft}
                className="absolute left-2 md:left-12 lg:left-18 bottom-0 w-24 sm:w-32 md:w-40 lg:w-auto origin-bottom scale-0 sm:scale-100"
                delay={0}
            />
            <TreeAnimated
                Component={TreeRight}
                className="absolute right-24 sm:right-18 bottom-0 w-24 sm:w-32 md:w-40 lg:w-auto origin-bottom scale-[0.5] md:scale-100"
                delay={0.5}
            />

            <CloudAnimated
                className="absolute top-8 sm:top-12 left-[15%] sm:left-[20%] scale-[0.3] sm:scale-50 -z-10"
                opacity={1}
                color={currentColor}
                delay={0}
            />
            <CloudAnimated
                className="absolute top-[15%] sm:top-[25%] right-[25%] sm:right-[25%] scale-[0.4] sm:scale-75 -z-10"
                opacity={1}
                color={currentColor}
                delay={1}
            />
            <CloudAnimated
                className="absolute top-[20%] sm:top-[20%] left-6 sm:left-36 scale-[0.5] sm:scale-100 -z-10"
                opacity={1}
                color={currentColor}
                delay={2}
            />

            <SunAnimated />

            <motion.div
                className="absolute bottom-0 w-full -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <HeroFloor />
            </motion.div>

            {/* Carousel Indicators */}
            {/* <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {CAROUSEL_DATA.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-6 sm:w-8" : "bg-foreground/30"
                            }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> */}
        </section>
    );
}

export default React.memo(HeroSection); 
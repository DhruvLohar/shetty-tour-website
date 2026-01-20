"use client";

import React, { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

/* ================= ANIMATION VARIANTS ================= */

const containerStagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const textVariant = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: easeOut },
    },
};

const imageContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

const imageVariant = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: easeOut },
    },
};

/* ================= GRADIENTS PER FLEET ================= */

const fleetGradients = [
    "from-orange-100/60 via-transparent to-transparent",
    "from-red-100/60 via-transparent to-transparent",
    "from-sky-100/60 via-transparent to-transparent",
    "from-emerald-100/60 via-transparent to-transparent",
];

function Fleet() {
    const [currentFleetIndex, setCurrentFleetIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imagesPerView, setImagesPerView] = useState(3);

    // Track screen size for responsive carousel
    React.useEffect(() => {
        const updateImagesPerView = () => {
            if (window.innerWidth >= 1024) {
                setImagesPerView(3); // lg: 3 images
            } else if (window.innerWidth >= 768) {
                setImagesPerView(2); // md: 2 images
            } else {
                setImagesPerView(1); // mobile: 1 image
            }
        };

        updateImagesPerView();
        window.addEventListener("resize", updateImagesPerView);
        return () => window.removeEventListener("resize", updateImagesPerView);
    }, []);

    const items = [
        {
            title: "Force Tempo Traveller",
            seats: "Seats 12–17",
            description: "Perfect medium groups.",
            carouselImages: [
                "/images/Traveller.jpeg",
                "/images/Traveller-1.jpeg",
                "/images/Traveller-2.jpeg",
                "/images/Traveller-3.jpeg",
            ],
        },
        {
            title: "Bus",
            seats: "Seats 40–50",
            description: "Large group comfort.",
            carouselImages: [
                "/images/Bus.jpeg",
                "/images/Bus-1.jpeg",
                "/images/Bus-3.jpeg",
                "/images/Bus-4.jpeg",
                "/images/Bus-5.jpeg",
                "/images/Bus-6.jpeg",
            ],
        },
        {
            title: "Innova Crysta",
            seats: "Seats 7",
            description: "Executive family comfort.",
            carouselImages: [
                "/images/Car.jpeg",
                "/images/Car-1.jpeg",
                "/images/Car-2.jpeg",
            ],
        },
        {
            title: "Red Bus",
            seats: "Seats 45–52",
            description: "Premium group travel.",
            carouselImages: ["/images/RedBus.jpeg", "/images/RedBus-1.jpeg"],
        },
    ];

    const currentFleet = items[currentFleetIndex];
    const totalImages = currentFleet.carouselImages.length;

    /* ================= NAV ================= */

    const handlePrevFleet = () => {
        setCurrentFleetIndex((p) => (p === 0 ? items.length - 1 : p - 1));
        setCurrentImageIndex(0);
    };

    const handleNextFleet = () => {
        setCurrentFleetIndex((p) => (p === items.length - 1 ? 0 : p + 1));
        setCurrentImageIndex(0);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((p) => (p === 0 ? totalImages - 1 : p - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((p) => (p === totalImages - 1 ? 0 : p + 1));
    };

    return (
        <section className="relative w-full min-h-screen py-12 overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20">
            {/* ================= BACKGROUND GRADIENT ================= */}
            <motion.div
                key={currentFleetIndex}
                className={`absolute inset-0 bg-linear-to-b ${fleetGradients[currentFleetIndex]}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            />

            {/* ================= HEADER ================= */}
            <div className="relative z-10 px-6 text-left md:text-center mb-12">
                <h1 className="text-6xl md:text-7xl font-black italic">
                    Our <span className="text-primary">Fleet.</span>
                </h1>

                {/* ✅ MAIN HEADER DESCRIPTION (PRESERVED) */}
                <p className="mt-4 md:max-w-3xl md:mx-auto text-foreground/70 text-sm sm:text-base">
                    Explore our fleet — <b>buses</b>, <b>red buses</b>, <b>Creta car</b>, and{" "}
                    <b>Force Travellers</b>. Drag the gallery below or{" "}
                    <a href="#get-in-touch" className="underline">
                        see booking options
                    </a>.
                </p>
            </div>

            {/* ================= FLEET NAV ================= */}
            <div className="relative z-10 flex gap-3 px-6 mb-6">
                <button
                    onClick={handlePrevFleet}
                    className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={handleNextFleet}
                    className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* ================= STAGGERED CONTENT ================= */}
            <motion.div
                key={currentFleetIndex}
                variants={containerStagger}
                initial="hidden"
                animate="show"
                className="relative z-10 px-6"
            >
                {/* Fleet Text */}
                <motion.h2 variants={textVariant} className="text-4xl md:text-7xl font-black text-left">
                    {currentFleet.title}
                </motion.h2>

                <motion.p variants={textVariant} className="text-xl font-semibold mt-2 text-left">
                    {currentFleet.seats}
                </motion.p>

                <motion.p
                    variants={textVariant}
                    className="text-lg text-foreground/60 mt-1 mb-6 text-left"
                >
                    {currentFleet.description}
                </motion.p>

                {/* ================= IMAGE CAROUSEL ================= */}
                <div className="relative overflow-hidden mb-10">
                    <motion.div
                        variants={imageContainer}
                        className="flex gap-3"
                        animate={{ x: `-${currentImageIndex * (100 / imagesPerView)}%` }}
                        transition={{ type: "spring", stiffness: 120, damping: 22 }}
                        drag="x"
                        dragElastic={0.08}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -100) handleNextImage();
                            if (info.offset.x > 100) handlePrevImage();
                        }}
                    >
                        {currentFleet.carouselImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                variants={imageVariant}
                                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] aspect-16/11 relative rounded-sm overflow-hidden bg-gray-200"
                            >
                                <Image
                                    src={img}
                                    alt={`${currentFleet.title} ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ================= PROGRESS BAR (PRESERVED) ================= */}
                <div className="flex items-center justify-center gap-6">
                    <button
                        onClick={handlePrevImage}
                        className="flex items-center gap-2 text-foreground/60 hover:text-foreground"
                    >
                        <ChevronLeft /> Prev
                    </button>

                    <div className="w-64 h-0.5 bg-foreground/10 overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            animate={{
                                width: `${((currentImageIndex + 1) / totalImages) * 100}%`,
                            }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                        />
                    </div>

                    <button
                        onClick={handleNextImage}
                        className="flex items-center gap-2 text-foreground/60 hover:text-foreground"
                    >
                        Next <ChevronRight />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}

export default React.memo(Fleet);

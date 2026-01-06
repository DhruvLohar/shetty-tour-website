"use client";

import { memo, useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal/ScrollReveal";
import Image from "next/image";

function AboutUs() {

    const containerRef = useRef(null);

    return (
        <motion.section 
            ref={containerRef} 
            className="w-full relative min-h-screen flex flex-col items-start justify-start px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >

            <ScrollReveal
                scrollContainerRef={containerRef.current}
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="mb-6 md:mb-8 hidden md:block"
            >
                With half a century of operational excellence, we understand Mumbai's roads, travel needs, and time sensitivities better than anyone else.
            </ScrollReveal>

            <div className="flex flex-col gap-3 md:gap-4 lg:transform-[translateY(30%)]">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black italic text-primary">50 Years of</h1>
                <p className="text-sm sm:text-base text-justify max-w-full sm:max-w-md md:max-w-xs font-medium">
                    For over 50 years, Shetty Tours and Travels has been a name synonymous with reliable, safe, and comfortable vehicle hire services in the Mumbai region.
                </p>
            </div>

            <div className="w-full h-auto lg:h-[40vw] flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-2 py-6 md:py-8">
                <Image
                    src={"https://images.pexels.com/photos/2486402/pexels-photo-2486402.jpeg"}
                    alt="Photo by Raphael Brasileiro: https://www.pexels.com/photo/inside-public-transportation-2486402/"
                    width={300}
                    height={300}
                    className="object-cover rounded-4xl rounded-se-xl w-full h-64 sm:h-80 md:h-96 lg:w-[30%] lg:h-full lg:transform-[translateY(12%)]"
                />
                <Image
                    src={"https://images.pexels.com/photos/416974/pexels-photo-416974.jpeg"}
                    alt="Photo by Pixabay: https://www.pexels.com/photo/gray-concrete-road-towards-green-mountain-416974/"
                    width={300}
                    height={300}
                    className="object-cover rounded-xl rounded-se-4xl rounded-bl-4xl w-full h-64 sm:h-80 md:h-96 lg:w-[36%] lg:h-full"
                />
                <Image
                    src={"https://images.pexels.com/photos/2464531/pexels-photo-2464531.jpeg"}
                    alt="Photo by Djordje Petrovic: https://www.pexels.com/photo/photo-of-vehicles-on-highway-2464531/"
                    width={300}
                    height={300}
                    className="object-cover rounded-4xl rounded-bl-xl w-full h-64 sm:h-80 md:h-96 lg:w-[30%] lg:h-full lg:transform-[translateY(-12%)]"
                />
            </div>

            <div className="flex flex-col items-start md:items-end gap-3 md:gap-4 text-left md:text-right self-start md:self-end lg:transform-[translateY(-30%)]">
                <p className="text-sm sm:text-base text-justify max-w-full sm:max-w-md md:max-w-xs font-medium">
                    From family outings and corporate travel to weddings, airport transfers, and outstation tours, we offer a wide range of vehicles on hire — Tempo Travellers, Buses, Cars, and more!
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black italic text-primary">Excellence</h1>
            </div>
        </motion.section>
    );
}

export default memo(AboutUs);
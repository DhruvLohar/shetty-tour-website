"use client";

import { memo, useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal/ScrollReveal";
import Image from "next/image";
import { Award, Bus, UserCheck, BadgeCheck, Clock, MapPin } from "lucide-react";

const whyChooseUsPoints = [
    {
        icon: Award,
        title: "50 years of proven experience"
    },
    {
        icon: Bus,
        title: "Well-maintained AC & Non-AC vehicles"
    },
    {
        icon: UserCheck,
        title: "Professional drivers with verified background"
    },
    {
        icon: BadgeCheck,
        title: "Transparent pricing with no hidden charges"
    },
    {
        icon: Clock,
        title: "On-time service you can depend on"
    },
    {
        icon: MapPin,
        title: "Local & outstation travel solutions"
    }
];

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
                Founded five decades ago, our journey began with a clear purpose: to make group travel smooth, dependable, and stress-free. Over the years, we have evolved with changing times, expanding our fleet, improving service standards, and embracing modern travel needs while staying true to the values we started with.
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

            {/* Why Choose Us Section */}
            <motion.div 
                className="w-full mt-12 md:mt-16 lg:mt-20 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Left Side - Title & Subtitle */}
                <div className="flex flex-col gap-4 lg:max-w-md">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic">
                        Why Choose <span className="text-primary">Us.</span>
                    </h2>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        When you book with us, you&apos;re not just hiring a vehicle—you&apos;re choosing decades of trust and dependable service. Travel with experience. Travel with confidence.
                    </p>
                </div>

                {/* Right Side - Points Grid */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-8">
                    {whyChooseUsPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                                <point.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                            </div>
                            <span className="text-sm sm:text-base font-medium pt-2">
                                {point.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}

export default memo(AboutUs);
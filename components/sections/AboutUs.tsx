"use client";

import { memo, useRef } from "react";
import ScrollReveal from "../ui/ScrollReveal/ScrollReveal";
import Image from "next/image";

function AboutUs() {

    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="w-full relative min-h-screen flex flex-col items-start justify-start px-20 py-12">
            <ScrollReveal
                scrollContainerRef={containerRef.current}
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="mb-8"
            >
                With half a century of operational excellence, we understand Mumbai’s roads, travel needs, and time sensitivities better than anyone else.
            </ScrollReveal>

            <div className="flex flex-col gap-4" style={{ transform: "translateY(30%)" }}>
                <h1 className="text-7xl font-black italic text-primary">50 Years of</h1>
                <p className="text-justify max-w-xs font-medium">
                    For over 50 years, Shetty Tours and Travels has been a name synonymous with reliable, safe, and comfortable vehicle hire services in the Mumbai region.
                </p>
            </div>

            <div className="w-full h-[40vw] flex items-center justify-between gap-2 py-8">
                <Image 
                    src={"https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg"}
                    alt="Photo by Te lensFix: https://www.pexels.com/photo/photo-of-woman-sitting-on-boat-spreading-her-arms-1371360/"
                    width={300}
                    height={300}
                    className="object-cover rounded-4xl rounded-se-xl w-[30%] h-full"
                    style={{ transform: "translateY(12%)" }}
                />
                <Image 
                    src={"https://images.pexels.com/photos/416974/pexels-photo-416974.jpeg"}
                    alt="Photo by Pixabay: https://www.pexels.com/photo/gray-concrete-road-towards-green-mountain-416974/"
                    width={300}
                    height={300}
                    className="object-cover rounded-xl rounded-se-4xl rounded-bl-4xl w-[36%] h-full"
                />
                <Image 
                    src={"https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg"}
                    alt="Photo by Josh Hild: https://www.pexels.com/photo/photo-of-tent-at-near-trees-2422265/"
                    width={300}
                    height={300}
                    className="object-cover rounded-4xl rounded-bl-xl w-[30%] h-full"
                    style={{ transform: "translateY(-12%)" }}
                />
            </div>

            <div className="flex flex-col items-end gap-4 text-right self-end" style={{ transform: "translateY(-30%)" }}>
                <p className="text-justify max-w-xs font-medium">
                    From family outings and corporate travel to weddings, airport transfers, and outstation tours, we offer a wide range of vehicles on hire — Tempo Travellers, Buses, Cars, and more!
                </p>
                <h1 className="text-7xl font-black italic text-primary">Excellence</h1>
            </div>
        </section>
    );
}

export default memo(AboutUs);
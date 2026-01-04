"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    fleet: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Outstanding service—well-maintained bus, punctual, and comfortable journey. The driver was professional and very helpful throughout the trip.",
        name: "Rajesh Kumar",
        fleet: "Bus - 45 Seater"
    },
    {
        id: 2,
        quote: "Excellent experience—spacious traveller, clean interiors, and exactly what we needed for our family trip. Highly recommend!",
        name: "Priya Sharma",
        fleet: "Traveller - 17 Seater"
    },
    {
        id: 3,
        quote: "Top-notch quality—comfortable Creta with premium features. The driver was courteous and the entire experience was smooth.",
        name: "Amit Patel",
        fleet: "Creta - 5 Seater"
    },
    {
        id: 4,
        quote: "Impressive service—luxury red bus, well-equipped, and perfect for our group tour. Customer support was superb and very responsive.",
        name: "Sneha Reddy",
        fleet: "Red Bus - 52 Seater"
    },
    {
        id: 5,
        quote: "Great product—reliable traveller, easy to book, and just as described. The team ensured a smooth and pleasant journey.",
        name: "Vikram Singh",
        fleet: "Traveller - 12 Seater"
    },
    {
        id: 6,
        quote: "Outstanding experience—clean bus, friendly driver, and exactly what we expected. The team went above and beyond to help us.",
        name: "Kavita Desai",
        fleet: "Bus - 40 Seater"
    },
    {
        id: 7,
        quote: "Excellent service—comfortable car, well-maintained, and perfect for our business trip. Driver was professional and on time.",
        name: "Arjun Menon",
        fleet: "Creta - 5 Seater"
    },
    {
        id: 8,
        quote: "Fantastic journey—spacious red bus with modern amenities. The staff was incredibly helpful and attentive to our needs.",
        name: "Deepika Iyer",
        fleet: "Red Bus - 45 Seater"
    },
    {
        id: 9,
        quote: "Premium quality—luxury traveller, smooth ride, and excellent customer care. Would definitely book again for future trips.",
        name: "Sanjay Gupta",
        fleet: "Traveller - 17 Seater"
    },
    {
        id: 10,
        quote: "Wonderful experience—punctual service, clean vehicle, and professional driver. Made our wedding guest transport hassle-free.",
        name: "Anita Verma",
        fleet: "Bus - 50 Seater"
    }
];

const TestimonialCard = React.memo(({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <motion.div
            className="shrink-0 w-75 sm:w-87.5 md:w-100 bg-amber-50 border-0 border-border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="mb-3 sm:mb-4">
                <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>
            <p className="text-sm sm:text-base text-foreground/80 mb-4 sm:mb-6 leading-relaxed">
                {testimonial.quote}
            </p>
            <div className="border-t border-border pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{testimonial.fleet}</p>
            </div>
        </motion.div>
    );
});

TestimonialCard.displayName = "TestimonialCard";

const InfiniteRow = React.memo(
    ({ items, direction = "left" }: { items: Testimonial[]; direction?: "left" | "right" }) => {
        const controls = useAnimationControls();

        const cardWidth = 400;
        const gap = 24;
        const totalWidth = (cardWidth + gap) * items.length;

        useEffect(() => {
            controls.start({
                x: direction === "left" ? [-totalWidth, 0] : [0, -totalWidth],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 50,
                        ease: "linear",
                    },
                },
            });
        }, [controls, direction, totalWidth]);

        const handlePause = useCallback(() => {
            controls.stop();
        }, [controls]);

        const handleResume = useCallback(() => {
            controls.start({
                x: direction === "left" ? [-totalWidth, 0] : [0, -totalWidth],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 50,
                        ease: "linear",
                    },
                },
            });
        }, [controls, direction, totalWidth]);

        return (
            <div
                className="overflow-hidden"
                onMouseEnter={handlePause}
                onMouseLeave={handleResume}
                onTouchStart={handlePause}
                onTouchEnd={handleResume}
            >
                <motion.div className="flex gap-4 sm:gap-6" animate={controls}>
                    {[...Array(4)].flatMap((_, setIndex) =>
                        items.map((testimonial, index) => (
                            <TestimonialCard
                                key={`${direction}-${testimonial.id}-${setIndex}-${index}`}
                                testimonial={testimonial}
                            />
                        ))
                    )}
                </motion.div>
            </div>
        );
    }
);


InfiniteRow.displayName = "InfiniteRow";

function Testimonials() {
    const topRowTestimonials = testimonials.slice(0, 5);
    const bottomRowTestimonials = testimonials.slice(5, 10);

    return (
        <motion.section
            className="w-full flex flex-col items-center min-h-screen py-12 sm:py-16 md:py-18 px-4 sm:px-6 md:px-12 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto w-full mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black italic text-center mb-4 sm:mb-6">
                    What Our <span className="text-primary">Clients</span> Say.
                </h2>
                <p className="text-sm sm:text-base text-center max-w-3xl mx-auto text-foreground/70 px-4">
                    Hear from our satisfied customers who have experienced our premium transportation services.
                </p>
            </div>

            <div className="relative w-full">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Top Row - Moving Left */}
                <div className="mb-4 sm:mb-6">
                    <InfiniteRow items={topRowTestimonials} direction="left" />
                </div>

                {/* Bottom Row - Moving Right */}
                <InfiniteRow items={bottomRowTestimonials} direction="right" />
            </div>
        </motion.section>
    );
}

export default React.memo(Testimonials);
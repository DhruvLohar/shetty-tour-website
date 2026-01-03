"use client";

import React from "react";
import { motion } from "framer-motion";
import InfiniteMenu from "../ui/InfiniteMenu/InfiniteMenu";

function Fleet() {

    const items = [
        {
            image: '/images/Bus-6.jpeg',
            link: '#',
            title: 'Bus',
            description: '<b>Seats 40-50.</b> Large group comfort.',
            carouselImages: [
                '/images/Bus.jpeg',
                '/images/Bus-1.jpeg',
                '/images/Bus-3.jpeg',
                '/images/Bus-4.jpeg',
                '/images/Bus-5.jpeg',
                '/images/Bus-6.jpeg'
            ]
        },
        {
            image: '/images/RedBus.jpeg',
            link: '#',
            title: 'Red Bus',
            description: '<b>Seats 45-52.</b> Premium group travel.',
            carouselImages: [
                '/images/RedBus.jpeg',
                '/images/RedBus-1.jpeg'
            ]
        },
        {
            image: '/images/Car-2.jpeg',
            link: '#',
            title: 'Creta',
            description: '<b>Seats 5.</b> Executive family comfort.',
            carouselImages: [
                '/images/Car.jpeg',
                '/images/Car-1.jpeg',
                '/images/Car-2.jpeg'
            ]
        },
        {
            image: '/images/Traveller.jpeg',
            link: '#',
            title: 'Traveller',
            description: '<b>Seats 12-17.</b> Perfect medium groups.',
            carouselImages: [
                '/images/Traveller.jpeg',
                '/images/Traveller-1.jpeg',
                '/images/Traveller-2.jpeg',
                '/images/Traveller-3.jpeg'
            ]
        }
    ];

    return (
        <section className="relative flex flex-col items-center w-full min-h-screen py-8 md:py-12">

            <div className="flex flex-col px-4 sm:px-6 md:px-8 items-start md:items-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black italic text-left md:text-center mb-4 md:mb-6">Our Fleet.</h1>
                <p className="text-sm sm:text-base text-left md:text-center max-w-full sm:max-w-2xl md:max-w-3xl md:mx-auto text-foreground/70 mb-8 md:mb-12 px-2 sm:px-4">
                    Discover our fleet — from spacious <b>buses</b> and <b>red buses</b> to executive <b>Creta car</b> and <b>Force Travellers</b> — built for comfort, safety, and group travel. Drag the gallery below to explore each vehicle or <a href="#get-in-touch" className="underline">see booking options</a>.
                </p>
            </div>

            <div className="w-full h-125 sm:h-150 md:h-175 lg:h-200">
                <InfiniteMenu items={items as any} />
            </div>
        </section>
    );
}

export default React.memo(Fleet);
"use client";

import React from "react";
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
        <section className="relative flex flex-col items-center w-full min-h-screen">

            <div className="flex flex-col">
                <h1 className="text-7xl font-black italic text-center mb-6">Our Fleet.</h1>
                <p className="text-center max-w-3xl mx-auto text-foreground/70 mb-12 px-4">
                    Discover our fleet — from spacious <b>buses</b> and <b>red buses</b> to executive <b>Creta car</b> and <b>Force Travellers</b> — built for comfort, safety, and group travel. Drag the gallery below to explore each vehicle or <a href="#get-in-touch" className="underline">see booking options</a>.
                </p>
            </div>

            <div className="h-150">
                <InfiniteMenu items={items as any} />
            </div>
        </section>
    );
}

export default React.memo(Fleet);
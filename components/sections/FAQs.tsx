"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What types of vehicles do you offer for hire?",
        answer: "We offer a wide range of vehicles including Tempo Travellers, Buses, Cars, and more—available in both AC and Non-AC options. All vehicles are regularly serviced and maintained to the highest standards to ensure your comfort and safety."
    },
    {
        question: "Do you provide services for outstation travel?",
        answer: "Yes, we provide both local Mumbai travel and outstation journey services. With 50 years of experience, we understand the routes and can ensure a smooth, safe journey whether you're traveling within the city or beyond."
    },
    {
        question: "Are your drivers professionally trained?",
        answer: "Absolutely. All our drivers are background-verified, professionally trained, and experienced. They are committed to delivering a smooth, respectful, and safe travel experience for all our customers."
    },
    {
        question: "What services do you specialize in?",
        answer: "We specialize in family and group travel, corporate transport, weddings and special events, airport transfers, and both local and outstation journeys. Whatever your travel need, we have the right solution for you."
    },
    {
        question: "Are there any hidden charges in your pricing?",
        answer: "No, we believe in complete transparency. Our pricing is upfront with no hidden charges. You'll know exactly what you're paying for when you book with us—honesty is one of our core values."
    },
    {
        question: "How long has Shetty Tours and Travels been in business?",
        answer: "We have proudly completed over 50 years of continuous service in the Mumbai region. Our longevity is built on honesty, punctuality, safety, and customer satisfaction—values that have earned us the trust of thousands of satisfied customers across generations."
    }
];

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
    const [isOpen, setIsOpen] = useState(index === 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-4 last:mb-0 border-b border-foreground/20 last:border-b-0 cursor-pointer"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between pb-4 text-left group cursor-pointer"
            >
                <span className="text-lg font-semibold text-foreground pr-8">
                    {item.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center"
                >
                    <span className="text-foreground text-xl leading-none">+</span>
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-foreground/70 pr-12">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function FAQS() {
    return (
        <section className="w-full relative flex flex-row items-start justify-between px-20 py-24 bg-secondary">
            <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-7xl font-black italic shrink-0"
            >
                FAQs.
            </motion.h1>
            <div className="flex-1 max-w-4xl">
                {faqData.map((item, index) => (
                    <FAQAccordion key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}

export default FAQS;
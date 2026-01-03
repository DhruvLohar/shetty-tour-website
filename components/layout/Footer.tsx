"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Landmark, Instagram, Youtube, Linkedin } from "lucide-react";

const contactUs = [
    { Icon: Mail, value: "ndroidstech0@gmail.com", url: "mailto:ndroidstech0@gmail.com" },
    // { Icon: Phone, value: "+91 93217 81063", url: "tel:+919321781063" },
    { Icon: MapPin, value: "Delhi, India.", url: "#" },
    { Icon: Landmark, value: "06AAVFN8299B1ZN", url: "#" },
]

const socialMedias = [
    { Icon: Instagram, url: "" },
    { Icon: Linkedin, url: "" },
]

function Footer() {
    return (
        <motion.footer 
            className="w-full bg-[#1F1F1F] text-background px-4 sm:px-6 md:px-12 py-8 md:py-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="w-full flex flex-col">
                {/* Title Section */}
                <div className="mb-6 md:mb-8">
                    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tight">
                        <span className="text-primary">Shetty tours</span>
                    </h1>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tight">
                        & travels
                    </h2>
                </div>

                {/* Bottom Section - Copyright and Social Icons */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 pt-4 border-t border-gray-700">
                    <span className="text-xs sm:text-sm text-gray-400">
                        Copyright © {new Date().getFullYear()} Shetty Tours & Travels. All rights reserved
                    </span>
                    
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        {socialMedias.map((item, idx) => (
                            <Link key={idx} href={item.url} className="text-gray-400 hover:text-white transition-colors">
                                <item.Icon size={20} className="sm:w-6 sm:h-6" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer;
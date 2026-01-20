"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Get Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar - Floating Glassy */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`hidden lg:block fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "top-4" : "top-6"
        }`}
      >
        <motion.div
          className={`backdrop-blur-md bg-white/70 rounded-full px-8 py-4 shadow-lg border border-white/20 transition-all duration-300 ${
            scrolled ? "bg-white/80 shadow-xl" : ""
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${
                    item.label === "Get Pricing"
                      ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white px-5 py-2.5 rounded-full hover:from-orange-500 hover:to-orange-600 shadow-md hover:shadow-lg"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item.label}
                  {item.label !== "Get Pricing" && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Button - Floating Circle */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden fixed top-6 right-6 z-50 backdrop-blur-lg rounded-full p-4 shadow-lg border transition-all duration-300 ${
          isOpen 
            ? "bg-orange-500/80 border-orange-300/30 text-white" 
            : "bg-white/70 border-white/20 text-gray-700"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu - Fullscreen Slide */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-0 z-40 bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 backdrop-blur-xl"
            >
              <div className="flex flex-col items-center justify-center h-full px-8">
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  className="flex flex-col items-center gap-8 w-full"
                >
                  {NAV_ITEMS.map((item) => (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ type: "spring", damping: 20, stiffness: 100 }}
                      className="w-full text-center"
                    >
                      <motion.a
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className={`block text-2xl font-semibold transition-all duration-300 ${
                          item.label === "Get Pricing"
                            ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full shadow-lg mx-auto inline-block"
                            : "text-gray-700 py-3 hover:text-orange-500"
                        }`}
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute top-20 right-20 w-32 h-32 bg-orange-300 rounded-full blur-3xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute bottom-32 left-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

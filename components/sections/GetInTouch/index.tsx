"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

import FloatingInput from "./FloatingInput";
import RadioButton from "./RadioButton";

interface FormData {
    tripType: "oneWay" | "roundTrip";
    fromDate: string;
    toDate: string;
    name: string;
    contactNumber: string;
    fromLocation: string;
    toLocation: string;
    interestedFleet: string;
    acType: "ac" | "nonAc";
}

interface FormErrors {
    [key: string]: string;
}

function GetInTouch() {
    // Get tomorrow's date in YYYY-MM-DD format
    const getNthDate = (days: number = 1) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + days);
        return tomorrow.toISOString().split('T')[0];
    };

    const [formData, setFormData] = useState<FormData>({
        tripType: "oneWay",
        fromDate: getNthDate(),
        toDate: getNthDate(2),
        name: "",
        contactNumber: "",
        fromLocation: "",
        toLocation: "",
        interestedFleet: "",
        acType: "ac"
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const updateField = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = "Contact number is required";
        } else if (!/^\+?[\d\s-()]+$/.test(formData.contactNumber)) {
            newErrors.contactNumber = "Invalid phone number";
        }
        if (!formData.fromDate) newErrors.fromDate = "From date is required";
        if (formData.tripType === "roundTrip" && !formData.toDate) {
            newErrors.toDate = "To date is required for round trip";
        }
        if (!formData.fromLocation.trim()) newErrors.fromLocation = "From location is required";
        if (!formData.toLocation.trim()) newErrors.toLocation = "To location is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        const message = `Hi Shetty Tours & Travels! 🚗

I would like to book a ${formData.tripType === "oneWay" ? "One Way" : "Round Trip"} ride:

📅 From Date: ${formData.fromDate}
${formData.tripType === "roundTrip" ? `📅 To Date: ${formData.toDate}` : ""}
👤 Name: ${formData.name}
📞 Contact: ${formData.contactNumber}
📍 From: ${formData.fromLocation}
📍 To: ${formData.toLocation}
${formData.interestedFleet ? `🚙 Fleet: ${formData.interestedFleet}` : ""}
❄️ AC Type: ${formData.acType === "ac" ? "A/C" : "Non A/C"}

Looking forward to your response!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "919820040392";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <motion.section 
            id="get-in-touch" 
            className="w-full relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 gap-8 md:gap-12 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Left Side - Form */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full lg:max-w-2xl"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic mb-2">Get In Touch</h2>
                <p className="text-sm sm:text-base text-foreground/60 mb-6 md:mb-8">
                    Let&apos;s explore together.<br />
                    Book your fleet now!
                </p>

                <form onSubmit={handleSubmit} className="space-y-8 md:space-y-8">
                    {/* Trip Type Radio Buttons */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <RadioButton
                            id="oneWay"
                            name="tripType"
                            label="One Way"
                            checked={formData.tripType === "oneWay"}
                            onChange={() => updateField("tripType", "oneWay")}
                        />
                        <RadioButton
                            id="roundTrip"
                            name="tripType"
                            label="Round Trip"
                            checked={formData.tripType === "roundTrip"}
                            onChange={() => updateField("tripType", "roundTrip")}
                        />
                    </div>

                    {/* Date Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FloatingInput
                            id="fromDate"
                            label="From Date"
                            type="date"
                            value={formData.fromDate}
                            onChange={(val) => updateField("fromDate", val)}
                            error={errors.fromDate}
                            required
                        />
                        <AnimatePresence mode="wait">
                            {formData.tripType === "roundTrip" ? (
                                <motion.div
                                    key="toDate"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    <FloatingInput
                                        id="toDate"
                                        label="To Date"
                                        type="date"
                                        value={formData.toDate}
                                        onChange={(val) => updateField("toDate", val)}
                                        error={errors.toDate}
                                        required
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full"
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Name and Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <FloatingInput
                            id="name"
                            label="Name"
                            value={formData.name}
                            onChange={(val) => updateField("name", val)}
                            error={errors.name}
                            required
                        />
                        <FloatingInput
                            id="contactNumber"
                            label="Contact Number"
                            type="tel"
                            value={formData.contactNumber}
                            onChange={(val) => updateField("contactNumber", val)}
                            error={errors.contactNumber}
                            required
                        />
                    </div>

                    {/* Locations */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <FloatingInput
                            id="fromLocation"
                            label="From Location"
                            value={formData.fromLocation}
                            onChange={(val) => updateField("fromLocation", val)}
                            error={errors.fromLocation}
                            required
                        />
                        <FloatingInput
                            id="toLocation"
                            label="To Location"
                            value={formData.toLocation}
                            onChange={(val) => updateField("toLocation", val)}
                            error={errors.toLocation}
                            required
                        />
                    </div>

                    {/* Interested Fleet */}
                    <FloatingInput
                        id="interestedFleet"
                        label="Interested Fleet"
                        type="select"
                        value={formData.interestedFleet}
                        onChange={(val) => updateField("interestedFleet", val)}
                        options={[
                            { value: "car-creta", label: "Car (Creta)" },
                            { value: "force-traveller", label: "Force Tempo Traveller" },
                            { value: "mini-bus", label: "Mini Bus" },
                            { value: "bus", label: "Bus" }
                        ]}
                    />

                    {/* AC Type Radio Buttons */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <RadioButton
                            id="ac"
                            name="acType"
                            label="A/C"
                            checked={formData.acType === "ac"}
                            onChange={() => updateField("acType", "ac")}
                        />
                        <RadioButton
                            id="nonAc"
                            name="acType"
                            label="Non A/C"
                            checked={formData.acType === "nonAc"}
                            onChange={() => updateField("acType", "nonAc")}
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-secondary text-foreground font-bold py-3 md:py-4 rounded-full text-base md:text-lg cursor-pointer transition-shadow shadow-[3px_3px_0_var(--accent)] hover:shadow-[5px_5px_0_var(--accent)]"
                    >
                        Get a Quote
                    </motion.button>
                </form>
            </motion.div>

            {/* Right Side - Map and Address */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full lg:max-w-xl space-y-4 md:space-y-6"
            >
                <div className="space-y-3 md:space-y-4">
                    <div>
                        <h3 className="text-sm sm:text-base font-semibold text-foreground/70 mb-1">Address:</h3>
                        <p className="text-foreground text-xs sm:text-sm">
                            Shop no 5, D-wing, EMP 48, bldg no 6,<br />
                            Evershine Haffley Towers Co-op.hsg. Soc.ltd, Mumbai,<br />
                            Maharashtra 400101
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm sm:text-base font-semibold text-foreground/70 mb-1">Phone:</h3>
                        <p className="text-sm sm:text-base text-foreground">+91 98200 40392</p>
                    </div>
                </div>

                {/* Map */}
                <div className="w-full h-64 sm:h-80 md:h-96 lg:h-120 rounded-md overflow-hidden shadow-lg border-2 border-foreground/10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.7354619635823!2d72.8729673!3d19.211262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7381ff38b41%3A0x26acdcb15cd22f7b!2sShetty%20Tours%20%26%20Travels%20%7C%20Rent-Hire%20a%20Bus%20Car%20Tempo%20Traveller%20%7C%20Minibus%20on%20Rent%20-%20Luxury%20bus%20on%20rent%20in%20Mumbai!5e1!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shetty Tours & Travels Location"
                    />
                </div>
            </motion.div>
        </motion.section>
    );
}

export default GetInTouch;
import { useState, FormEvent, memo } from "react";
import { motion } from "framer-motion";

interface FloatingInputProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    required?: boolean;
    options?: { value: string; label: string }[];
}

function FloatingInput({ id, label, type = "text", value, onChange, error, required = false, options }: FloatingInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value.length > 0;

    // Get today's date in YYYY-MM-DD format for min attribute
    const today = new Date().toISOString().split('T')[0];

    // Format date as "31st December, 2025"
    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString + 'T00:00:00');
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const year = date.getFullYear();
        
        const suffix = (day: number) => {
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };
        
        return `${day}${suffix(day)} ${month}, ${year}`;
    };

    const displayValue = type === 'date' && value && !isFocused ? formatDate(value) : value;

    return (
        <div className="relative w-full">
            {type === 'date' && value && !isFocused ? (
                <div
                    onClick={() => document.getElementById(id)?.focus()}
                    className={`w-full px-0 py-3 bg-transparent border-b-2 transition-colors duration-300 cursor-text text-foreground ${
                        error ? "border-destructive" : "border-foreground/30"
                    }`}
                >
                    {displayValue}
                </div>
            ) : null}
            {type === "select" && options ? (
                <select
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`w-full px-0 py-3 bg-transparent border-b-2 transition-colors duration-300 outline-none text-foreground cursor-pointer ${error ? "border-destructive" : "border-foreground/30 focus:border-foreground"
                        }`}
                    required={required}
                >
                    <option value="" disabled></option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    min={type === "date" ? today : undefined}
                    className={`w-full px-0 py-3 bg-transparent border-b-2 transition-colors duration-300 outline-none text-foreground ${error ? "border-destructive" : "border-foreground/30 focus:border-foreground"
                        } ${type === 'date' && value && !isFocused ? 'opacity-0 absolute' : ''}`}
                    required={required}
                />
            )}
            <motion.label
                htmlFor={id}
                animate={{
                    y: isFocused || hasValue ? -24 : 0,
                    scale: isFocused || hasValue ? 0.85 : 1,
                    color: error ? "#ef4444" : isFocused ? "#2A2A2A" : "#6b6b6b"
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-3 origin-left pointer-events-none font-medium"
            >
                {label} {required && "*"}
            </motion.label>
            {error && (
                <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-destructive mt-1 block"
                >
                    {error}
                </motion.span>
            )}
        </div>
    );
}

export default memo(FloatingInput);
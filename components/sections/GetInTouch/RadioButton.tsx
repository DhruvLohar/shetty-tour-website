import { motion } from "framer-motion";
import { memo } from "react";

interface RadioButtonProps {
    id: string;
    name: string;
    label: string;
    checked: boolean;
    onChange: () => void;
    icon?: string;
}

function RadioButton({ id, name, label, checked, onChange, icon }: RadioButtonProps) {
    return (
        <motion.label
            htmlFor={id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer flex items-center gap-2 sm:gap-3"
        >
            <div className="relative">
                <input
                    type="radio"
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    className="sr-only"
                />
                <motion.div
                    animate={{
                        boxShadow: checked ? "3px 3px 0 var(--accent)" : "0 0 0 0px var(--accent)"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center bg-secondary border border-accent`}
                >
                    <motion.div
                        initial={false}
                        animate={{
                            scale: checked ? 1 : 0,
                            opacity: checked ? 1 : 0
                        }}
                        transition={{ duration: 0.2 }}
                        className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-secondary"
                    />
                </motion.div>
            </div>
            <span className="text-sm sm:text-base text-foreground font-medium flex items-center gap-2">
                {label}
            </span>
        </motion.label>
    );
}

export default memo(RadioButton);
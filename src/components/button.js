import React from "react";
import { motion } from "framer-motion";

export default function Button({
    initial,
    animate,
    text,
    children,
    to = "#",
    outline = false,
    current = false,
    onClick = () => {}
}) {
    return <motion.a href={to} transition={{ when: "beforeChildren" }}>
        <motion.button
            initial={initial ?? { opacity: 0, y: '-100%' }}
            animate={animate ?? { opacity: 1, y: 0 }}
            exit={initial ?? { opacity: 0, y: '-100%' }}
            transition={{ duration: .5, ease: [.1, .1, .5, .6] }}
            className={`btn ${outline ? "" : "no-outline"} ${current ? "current" : ""}`}
            onClick={onClick}
        >
            {children ?? text}
        </motion.button>
    </motion.a>
}
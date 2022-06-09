import { motion } from "framer-motion"

export default function Section({children, id = ""}) {

    return <motion.section
        animate={{ y: 0 }}
        initial={{ y: '-25%' }}
        transition={{ ease: [.25, .25, .25, 1], duration: 1 }}
        className="home-section"
        id={id}
    >
        {children}
    </motion.section>
}
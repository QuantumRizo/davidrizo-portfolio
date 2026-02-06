import { motion } from "framer-motion";

const NeuralNetworkDiagram = () => {
    return (
        <div className="relative w-full h-full p-4 bg-transparent">
            <svg
                viewBox="0 0 200 160"
                className="w-full h-auto drop-shadow-xl overflow-visible"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* CONNECTIONS (Randomized chalk strokes) */}
                {/* Layer 1 to 2 */}
                <motion.path
                    d="M 40 40 L 100 60"
                    className="stroke-white/80 stroke-[3] fill-none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.path
                    d="M 40 40 L 100 100"
                    className="stroke-white/80 stroke-[3] fill-none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.path
                    d="M 40 80 L 100 60"
                    className="stroke-white/80 stroke-[3] fill-none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.path
                    d="M 40 80 L 100 100"
                    className="stroke-white/80 stroke-[3] fill-none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                    d="M 40 120 L 100 60"
                    className="stroke-white/80 stroke-[3] fill-none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.path
                    d="M 40 120 L 100 100"
                    className="stroke-white/80 stroke-[3] fill-none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                />

                {/* Layer 2 to 3 */}
                <motion.path
                    d="M 100 60 L 160 80"
                    className="stroke-white stroke-[3] fill-none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.path
                    d="M 100 100 L 160 80"
                    className="stroke-white stroke-[3] fill-none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                />

                {/* NODES */}
                {/* Input Layer */}
                <circle cx="40" cy="40" r="10" className="fill-white stroke-black stroke-2" />
                <circle cx="40" cy="80" r="10" className="fill-white stroke-black stroke-2" />
                <circle cx="40" cy="120" r="10" className="fill-white stroke-black stroke-2" />

                {/* Hidden Layer */}
                <circle cx="100" cy="60" r="12" className="fill-blue-100 stroke-black stroke-2" />
                <circle cx="100" cy="100" r="12" className="fill-blue-100 stroke-black stroke-2" />

                {/* Output Layer */}
                <motion.circle
                    cx="160" cy="80" r="14"
                    className="fill-yellow-300 stroke-black stroke-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: 1.2 }}
                />

            </svg>
        </div>
    );
};

export default NeuralNetworkDiagram;

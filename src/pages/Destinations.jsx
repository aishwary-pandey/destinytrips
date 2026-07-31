import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgvideo from "../assets/images/bgvideo.mp4";

function Destinations() {
    const navigate = useNavigate();
    function handleExplore(title) {
        const slug = title.toLowerCase().replace(/\s+/g, "-");

        navigate(`/destinations/${slug}`);
    }
    return (
        <section className="relative overflow-hidden px-6 pt-36 pb-20">
            <video
                className="absolute inset-0 h-full w-full object-cover -rotate-90 scale-125"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
            >
                <source src={bgvideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-900/60 to-slate-950/70" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-12 text-center"
                >
                    <h1 className="heading-font text-5xl font-bold text-white drop-shadow-lg">
                        Destinations
                    </h1>

                    <p className="mt-4 text-lg text-slate-100 drop-shadow-md">
                        Explore India's most beautiful destinations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                        >
                            <DestinationCard
                                title={destination.title}
                                image={destination.image}
                                description={destination.description}
                                onExplore={handleExplore}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}

export default Destinations;
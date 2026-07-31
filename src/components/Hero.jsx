import heroImage from "../assets/images/hero.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen">
      <img
        src={heroImage}
        alt="Travel Destination"
        className="absolute inset-0 w-full h-screen object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-r from-black/80 via-black/55 to-black/30 px-6 pt-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-font text-5xl font-extrabold leading-tight tracking-tight md:text-7xl"
        >
          Explore Incredible India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl"
        >
          Discover breathtaking destinations across Goa, Manali,
          Kashmir, Kerala, and Leh Ladakh with carefully crafted travel experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/packages")}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            Explore Packages →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="border-2 border-white px-8 py-4 rounded-xl font-semibold transition duration-300 hover:bg-white hover:text-black"
          >
            Contact Us
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >

          <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
            ⭐ 4.9/5 Rating
          </div>

          <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
            ✈️ 10,000+ Happy Travelers
          </div>

          <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
            🏆 Trusted Travel Partner
          </div>

      </motion.div>

    </div>
    </section >
  );
}

export default Hero;
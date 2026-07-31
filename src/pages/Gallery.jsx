import galleryItems from "../data/gallery";
import GalleryCard from "../components/GalleryCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import bggallery from "../assets/images/bggallery1.jpg";

const categories = [
  "All",
  "Beach",
  "Mountains",
  "Adventure",
  "Nature",
  "City",
];

function Gallery() {
  const navigate = useNavigate();

  function handleExplore(location) {
    const slug = location.toLowerCase().replace(/\s+/g, "-");

    navigate(`/destinations/${slug}`);
  }
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGallery =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter(
        (item) => item.category === selectedCategory
      );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="bg-slate-50 pt-26 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-14 h-80 overflow-hidden rounded-4xl bg-cover bg-center"
          style={{
            backgroundImage: `url(${bggallery})`,
          }}
        >
          <div className="absolute inset-0 bg-black/45"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white"
          >            <h1 className="heading-font text-5xl font-bold md:text-6xl">
              Explore Our Gallery
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-gray-200">
              Discover breathtaking destinations and unforgettable travel moments from across India.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 grid grid-cols-1 gap-6 text-center md:grid-cols-3"
        >
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-4xl font-bold text-blue-600">
              120+
            </h2>

            <p className="mt-2 text-gray-600">
              Travel Photos
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-4xl font-bold text-blue-600">
              15+
            </h2>

            <p className="mt-2 text-gray-600">
              Destinations
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-4xl font-bold text-blue-600">
              10K+
            </h2>

            <p className="mt-2 text-gray-600">
              Happy Travelers
            </p>
          </div>

        </motion.div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-6 py-2 transition-all duration-300 ${selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        {filteredGallery.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            No destinations found in this category.
          </p>
        )}
        <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
            >
              <GalleryCard
                item={item}
                onExplore={handleExplore}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main >
  );
}

export default Gallery;
import packages from "../data/packages";
import PackageCard from "../components/PackageCard";
import { useState } from "react";
import bgImage2 from "../assets/images/bgimage2.jpg";
import { motion } from "framer-motion";

function Packages() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPackages = packages.filter((pkg) => {
        const matchesSearch = pkg.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            pkg.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });
    const categories = ["All", "Beach", "Hill", "Adventure"];
    return (
        <section className="px-6 pt-36 pb-20"
            style={{
                backgroundImage: `url(${bgImage2})`,
                backgroundSize: "cover",
            }}>
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 text-center"
                >
                    <h1 className="heading-font text-5xl font-bold text-gray-800">
                        Tour Packages
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                        Choose your next unforgettable journey with Destiny Trips.
                    </p>
                </motion.div>
                <div className="mb-10 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search packages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-md rounded-xl border border-gray-300 bg-white px-5 py-3 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-full border px-6 py-2 transition-all duration-300 ${selectedCategory === category
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                {
                    filteredPackages.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                            {filteredPackages.map((pkg, index) => (
                                <motion.div
                                    key={pkg.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                    }}
                                >
                                    <PackageCard
                                        title={pkg.title}
                                        image={pkg.image}
                                        price={pkg.price}
                                        duration={pkg.duration}
                                        rating={pkg.rating}
                                        buttonText="Book Now →"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h2 className="text-3xl font-semibold text-gray-700">
                                No Packages Found
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Try searching for another destination.
                            </p>
                        </div>
                    )
                }

            </div>
        </section>
    );
}

export default Packages;
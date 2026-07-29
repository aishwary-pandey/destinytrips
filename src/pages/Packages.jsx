import packages from "../data/packages";
import PackageCard from "../components/PackageCard";
import { useState } from "react";

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
        <section className="pt-36 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800">
                        Tour Packages
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                        Choose your next unforgettable journey with Destiny Trips.
                    </p>
                </div>
                <div className="mb-10 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search packages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-md px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full border transition ${selectedCategory === category
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                {
                    filteredPackages.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {filteredPackages.map((pkg) => (
                                <PackageCard
                                    key={pkg.id}
                                    title={pkg.title}
                                    image={pkg.image}
                                    price={pkg.price}
                                    duration={pkg.duration}
                                    rating={pkg.rating}
                                    buttonText="View Details →"
                                />
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
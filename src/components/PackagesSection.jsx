import PackageCard from "./PackageCard";
import packages from "../data/packages";

function PackagesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center">
        Popular Packages
      </h2>

      <p className="text-center text-gray-600 mt-4 mb-12">
        Discover our most loved travel destinations.
      </p>

      <main className="flex flex-wrap gap-6 justify-center mt-10">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            title={pkg.title}
            image={pkg.image}
            price={pkg.price}
            duration={pkg.duration}
            rating={pkg.rating}
          />
        ))}
      </main>
    </section>
  );
}

export default PackagesSection;
import FeatureCard from "./FeatureCard";
import features from "../data/features";

function WhyChooseUs() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center">
                Why Choose Destiny Trips?
            </h2>

            <p className="text-center text-gray-600 mt-4 mb-12">
                We make every journey memorable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">        
                {features.map((feature) => (
                <FeatureCard
                    key={feature.id}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
            </div>
        </section>
    );
}

export default WhyChooseUs;
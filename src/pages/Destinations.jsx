import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import { useNavigate } from "react-router-dom";

function Destinations() {
    const navigate = useNavigate();
    function handleExplore(title) {
        const slug = title.toLowerCase().replace(/\s+/g, "-");

        navigate(`/destinations/${slug}`);
    }
    return (
        <section className="pt-36 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800">
                        Destinations
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                        Explore India's most beautiful destinations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            title={destination.title}
                            image={destination.image}
                            description={destination.description}
                            onExplore={handleExplore}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Destinations;
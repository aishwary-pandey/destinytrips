import { useParams } from "react-router-dom";
import destinations from "../data/destinations";
function DestinationDetails() {
    const { name } = useParams();
    const destination = destinations.find(
        (item) => item.title.toLowerCase().replace(/\s+/g, "-") === name
    );
    if (!destination) {
        return (
            <section className="pt-36 pb-20 text-center">
                <h1 className="text-4xl font-bold">
                    Destination Not Found
                </h1>

                <p className="mt-4 text-gray-600">
                    The destination you are looking for doesn't exist.
                </p>
            </section>
        );
    }
    return (
        <section className="pt-36 pb-20 px-6">
            <div className="max-w-5xl mx-auto">

                <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-96 object-cover rounded-xl"
                />

                <h1 className="text-5xl font-bold mt-8">
                    {destination.title}
                </h1>

                <p className="mt-6 text-lg text-gray-600">
                    {destination.description}
                </p>

            </div>
        </section>
    );
}

export default DestinationDetails;
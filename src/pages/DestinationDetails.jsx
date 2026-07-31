import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import destinations from "../data/destinations";
function DestinationDetails() {
    const { name } = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [name]);
    const destination = destinations.find(
        (item) => item.title.toLowerCase().replace(/\s+/g, "-") === name
    );

    if (loading) {
        return (
            <section className="flex min-h-screen flex-col items-center justify-center px-6">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

                <h1 className="mt-8 text-3xl font-bold">
                    Loading Destination...
                </h1>

                <p className="mt-3 text-gray-600">
                    Please wait while we prepare your travel experience.
                </p>
            </section>
        );
    }

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
        <section className="bg-slate-50 px-6 pt-36 pb-20">
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
function DestinationCard({
    title,
    image,
    description,
    onExplore,
}) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
                src={image}
                alt={title}
                className="h-56 w-full object-cover"
            />

            <div className="p-5">
                <h2 className="text-2xl font-semibold">
                    {title}
                </h2>

                <p className="text-gray-600 mt-3">
                    {description}
                </p>

                <button
                    onClick={() => onExplore(title)}
                    className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Explore →
                </button>
            </div>
        </div>
    );
}

export default DestinationCard;
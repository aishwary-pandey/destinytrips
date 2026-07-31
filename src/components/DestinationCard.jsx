function DestinationCard({
    title,
    image,
    description,
    onExplore,
}) {
    return (
        <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
            <div className="relative overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-blue-600 shadow">
                    📍 {title}
                </div>

            </div>

            <div className="p-5">
                <h2 className="heading-font text-2xl font-bold transition-colors duration-300 group-hover:text-blue-600">
                    {title}
                </h2>

                <p className="mt-3 text-base leading-7 text-gray-600">
                    {description}
                </p>

                <button
                    onClick={() => onExplore(title)}
                    className="mt-6 rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
                >
                    Explore →
                </button>
            </div>
        </div>
    );
}

export default DestinationCard;
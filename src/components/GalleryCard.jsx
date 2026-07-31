function GalleryCard({ item, onExplore }) {
    return (
        <div
            onClick={() => onExplore(item.location)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
            <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 shadow-md">
                📷 Featured
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent p-6 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">

                <div className="translate-y-5 transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="heading-font text-2xl font-bold">{item.title}</h2>

                    <p className="mt-2 text-sm text-gray-200">
                        {item.location}
                    </p>

                    <button
                        className="mt-4 w-fit rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700"
                    >
                        View Destination →
                    </button>
                </div>

            </div>
        </div>
    );
}

export default GalleryCard;
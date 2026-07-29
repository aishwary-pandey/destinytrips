function PackageCard({
  title,
  image,
  price,
  duration,
  rating,
  buttonText = "Book Now →",
}) {
  return (
    <div className="w-86 m-5 rounded-2xl overflow-hidden shadow-lg border bg-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-lg"
      />
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-2xl font-bold mt-2">
          📍 {title}
        </h2>

        <p>⭐ {rating}</p>

        <p className="text-gray-600">{duration}</p>

        <p className="text-lg font-bold text-grey-600">{price}</p>

        <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition ">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PackageCard;
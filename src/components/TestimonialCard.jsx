function TestimonialCard({
  name,
  location,
  rating,
  review,
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <p className="text-yellow-500 text-xl">
        {rating}
      </p>

      <p className="text-gray-600 italic leading-7 mt-4">
        "{review}"
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-bold">
          {name}
        </h3>

        <p className="text-gray-500">
          {location}
        </p>
      </div>

    </div>
  );
}

export default TestimonialCard;
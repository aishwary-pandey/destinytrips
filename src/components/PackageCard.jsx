import { useNavigate } from "react-router-dom";
function PackageCard({
  title,
  image,
  price,
  duration,
  rating,
  buttonText = "Book Now →",
}) {
  const navigate = useNavigate();
  return (
    <div className="group m-5 w-86 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

      </div>
      <div className="p-5 flex flex-col gap-3">
        <h2 className="heading-font text-2xl font-bold mt-2">
          📍 {title}
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-500">

          <span>⭐ {rating}</span>

          <span>{duration}</span>

        </div>

        <div>
          <p className="text-sm text-gray-500">
            Starting from
          </p>

          <p className="text-2xl font-extrabold text-blue-600">
            {price}
          </p>
        </div>

        <button
          onClick={() => navigate("/booking")}
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PackageCard;
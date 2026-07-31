import { useNavigate } from "react-router-dom";
function CallToAction() {
  const navigate = useNavigate();
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold">
          Ready for Your Next Adventure?
        </h2>

        <p className="mt-6 text-lg">
          Book your dream vacation today and create memories that last a lifetime.
        </p>

        <button
          onClick={() => navigate("/booking")}
          className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Book Now
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
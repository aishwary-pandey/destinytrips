import { useState } from "react";
function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    travelDate: "",
    travelers: 1,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setIsSubmitted(false);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.destination ||
      !formData.travelDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (formData.travelers < 1) {
      alert("Number of travelers must be at least 1.");
      return;
    }

    setIsSubmitted(true);
  }

  return (
    <section className="pt-36 pb-20 px-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8"
      >

        <h1 className="heading-font text-4xl font-bold text-center">
          Book Your Trip
        </h1>

        <p className="text-gray-600 text-center mt-3">
          Fill in the details below to reserve your adventure.
        </p>
        <div className="mt-8">
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6">
          <label className="block mb-2 font-medium">
            Destination
          </label>

          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Destination</option>
            <option value="Goa">Goa</option>
            <option value="Manali">Manali</option>
            <option value="Kashmir">Kashmir</option>
            <option value="Kerala">Kerala</option>
            <option value="Leh Ladakh">Leh Ladakh</option>
          </select>
        </div>
        <div className="mt-6">
          <label className="block mb-2 font-medium">
            Travel Date
          </label>

          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6">
          <label className="block mb-2 font-medium">
            Number of Travelers
          </label>

          <input
            type="number"
            name="travelers"
            min="1"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Book Now
        </button>
        {isSubmitted && (
          <div className="mt-6 p-4 rounded-lg bg-green-100 border border-green-400">
            <h2 className="text-green-700 font-semibold">
              Booking Successful!
            </h2>

            <p className="text-green-600 mt-2">
              Thank you, {formData.name}. Your trip to{" "}
              <strong>{formData.destination}</strong> has been booked.
            </p>
          </div>
        )}

      </form>
    </section>
  );
}

export default Booking;
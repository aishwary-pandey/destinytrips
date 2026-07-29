import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitted(true);
  }
  return (
    <section className="pt-28 pb-16 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-800 text-center">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mt-4">
          We'd love to hear from you. Feel free to reach out with any questions.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Contact Information */}

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-6">
              Contact Information
            </h2>

            <p className="mb-4">
              📍 Prayagraj, Uttar Pradesh
            </p>

            <p className="mb-4">
              📞 +91 98765 43210
            </p>

            <p>
              📧 support@destinytrips.com
            </p>
          </div>

          {/* Contact Form */}

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
              {isSubmitted && (
                <div className="mt-6 p-4 rounded-lg bg-green-100 border border-green-400">
                  <h3 className="text-green-700 font-semibold">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-green-600 mt-2">
                    Thank you, {formData.name}. We'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
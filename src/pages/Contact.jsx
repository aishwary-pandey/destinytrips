import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaCircleCheck,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import bgcontact from "../assets/images/bgcontact.png";
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
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat pt-32 pb-20"
      style={{
        backgroundImage: `url(${bgcontact})`,
        backgroundSize: "cover",
      }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6"
      >
        <h1 className="heading-font text-center text-5xl font-bold text-gray-900 md:text-6xl">
          Let's Plan Your Next Adventure
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-700">
          Have questions about a destination or need a custom travel package?
          Our travel experts are here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12 ">
          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/30 bg-white/75 p-8 shadow-xl backdrop-blur-md"
          >
            <h2 className="heading-font text-2xl font-semibold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <FaLocationDot className="text-xl text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Office
                  </h3>

                  <p className="text-gray-600">
                    Prayagraj, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <FaPhone className="text-xl text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <FaEnvelope className="text-xl text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    support@destinytrips.com
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl bg-white/70 p-8 shadow backdrop-blur-md"
          >
            <h2 className="heading-font text-2xl font-semibold mb-6">
              Send us a Message
            </h2>

            <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-4">

              <h3 className="font-semibold text-blue-800">
                Need help choosing a package?
              </h3>

              <p className="mt-2 text-sm text-blue-700">
                Our travel team usually responds within 24 hours.
              </p>

            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl active:scale-95"              >
                Send Message
              </button>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 rounded-xl border border-green-300 bg-green-50 p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="text-xl text-green-600" />
                      <h3 className="font-semibold text-green-700">
                        Message Sent Successfully!
                      </h3>
                    </div>

                    <p className="text-green-600 mt-2">
                      Thank you, {formData.name}. We'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section >
  );
}

export default Contact;
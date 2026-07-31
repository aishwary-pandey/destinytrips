import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-gray-900 py-12 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="heading-font text-3xl font-bold text-blue-400">
            Destiny Trips
          </h2>

          <p className="mt-4 text-gray-300">
            Your trusted travel partner for unforgettable journeys across India.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">

            <li>
              <NavLink
                to="/"
                className="transition hover:pl-2 hover:text-blue-400"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/packages"
                className="transition hover:pl-2 hover:text-blue-400"
              >
                Packages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className="transition hover:pl-2 hover:text-blue-400"
              >
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="transition hover:pl-2 hover:text-blue-400"
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <div className="flex items-center gap-3 text-gray-300">
            <FaLocationDot className="text-blue-400" />
            <span>Prayagraj, Uttar Pradesh</span>
          </div>

          <div className="mt-3 flex items-center gap-3 text-gray-300">
            <FaPhone className="text-blue-400" />
            <span>+91 98765 43210</span>
          </div>

          <div className="mt-3 flex items-center gap-3 text-gray-300">
            <FaEnvelope className="text-blue-400" />
            <span>info@destinytrips.com</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="mb-4 text-xl font-semibold">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-600"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-pink-600"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-black"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-700"
            >
              <FaLinkedin size={18} />
            </a>

          </div>
        </motion.div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2026 Destiny Trips. All Rights Reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
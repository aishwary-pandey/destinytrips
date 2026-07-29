function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Destiny Trips
          </h2>

          <p className="mt-4 text-gray-300">
            Your trusted travel partner for unforgettable journeys across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Packages</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <p className="text-gray-300">
            📍 Prayagraj, Uttar Pradesh
          </p>

          <p className="text-gray-300 mt-2">
            📞 +91 98765 43210
          </p>

          <p className="text-gray-300 mt-2">
            ✉️ info@destinytrips.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 Destiny Trips. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
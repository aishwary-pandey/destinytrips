import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="relative h-screen">
      <img
        src={heroImage}
        alt="Travel Destination"
        className="absolute inset-0 w-full h-screen object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Explore Incredible India
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-3xl leading-8">
          Discover breathtaking destinations across Goa, Manali,
          Kashmir, Kerala, and Leh Ladakh with carefully crafted travel experiences.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition duration-300">
            Explore Packages
          </button>

          <button className="border-2 border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
import heroImage from "../assets/images/hero.jpg";
import goaImage from "../assets/images/goa.webp";
import manaliImage from "../assets/images/Manali.jpeg";
import kashmirImage from "../assets/images/Kashmir.webp";
import keralaImage from "../assets/images/Kerala.jpg";
import ladakhImage from "../assets/images/Ladakh.webp";

const galleryItems = [
  {
    title: "Golden Beaches",
    location: "Goa",
    category: "Beach Escape",
    image: goaImage,
  },
  {
    title: "Snowy Peaks",
    location: "Manali",
    category: "Mountain Adventure",
    image: manaliImage,
  },
  {
    title: "Lakes & Gardens",
    location: "Kashmir",
    category: "Scenic Retreat",
    image: kashmirImage,
  },
  {
    title: "Backwaters Bliss",
    location: "Kerala",
    category: "Nature & Wellness",
    image: keralaImage,
  },
  {
    title: "High Desert Horizon",
    location: "Ladakh",
    category: "Epic Road Trip",
    image: ladakhImage,
  },
  {
    title: "Sunlit Horizons",
    location: "Rajasthan",
    category: "Royal Getaway",
    image: heroImage,
  },
  {
    title: "Palm-lined Shore",
    location: "Andaman",
    category: "Island Escape",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=736&q=80",
  },
  {
    title: "Cloudy Ridge Walk",
    location: "Munnar",
    category: "Hill Station",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=798&q=80",
  },
  {
    title: "Desert Sunset",
    location: "Jaisalmer",
    category: "Golden Desert",
    image: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Riverfront Calm",
    location: "Udaipur",
    category: "Royal Waters",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=862&q=80",
  },
  {
    title: "Forest Trails",
    location: "Coorg",
    category: "Nature Retreat",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Golden Temple Glow",
    location: "Amritsar",
    category: "Cultural Heritage",
    image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=703&q=80",
  },
];

function Gallery() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="pt-36 px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-gray-800">
            Our Latest Creations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
            A visual collection of our most recent works - each piece crafted with intention, emotion, and style.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-4">
          {galleryItems.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-56 object-cover object-top"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h2 className="text-xl font-medium">{item.title}</h2>
                <a href="#" className="mt-1 flex items-center gap-1 text-sm text-white/70">
                  Show More
                  <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Gallery;
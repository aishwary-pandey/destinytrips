import testimonials from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center">
        What Our Customers Say
      </h2>

      <p className="text-center text-gray-600 mt-4 mb-12">
        Hear from travelers who explored the world with us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            location={testimonial.location}
            rating={testimonial.rating}
            review={testimonial.review}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
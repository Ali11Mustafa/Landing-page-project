import { services } from "../../Data/services"; // Import array of service data
import ServiceCard from "./ServiceCard/ServiceCard"; // Import ServiceCard component to display individual service

const Services = () => (
  <section
    id="services"
    aria-labelledby="services-heading"
    className="px-4 py-20 md:py-20 flex flex-col items-center"
  >
    {/* Section header with title and description */}
    <header className="text-center max-w-3xl mb-16">
      <h2
        id="services-heading"
        className="text-2xl md:text-5xl font-bold text-white"
      >
        Our Services
      </h2>
      <p className="mt-4 text-lg text-[#646a69]">
        Transforming your online presence with innovative digital strategies.
      </p>
    </header>

    {/* Services list container - flex wraps cards, centers them with spacing */}
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-20 w-full max-w-7xl">
      {/* Map over the services array and render a ServiceCard for each service */}
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </section>
);

export default Services;

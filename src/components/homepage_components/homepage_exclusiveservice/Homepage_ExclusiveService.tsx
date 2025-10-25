import ExclusiveService_Card from "./ExclusiveService_Card";

const Homepage_ExclusiveService = () => {
  return (
    <section className="py-16 md:py-4 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center flex flex-col gap-4">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Elite Experiences</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Discover Our Exclusive Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the finest in hospitality with our exclusive range of services and luxurious amenities.
          </p>
        </div>

        <ExclusiveService_Card />

        {/* <div className="text-center mt-12">
          <a 
            href="/services" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition duration-300 shadow-md hover:shadow-lg"
          >
            View All Services
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Homepage_ExclusiveService;
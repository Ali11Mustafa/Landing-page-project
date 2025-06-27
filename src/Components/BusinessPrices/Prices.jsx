import PriceListing from "./priceList";
const Pricing = () => (
  <section className="flex flex-col mt-5 mb-6 pt-5 md:flex-row gap-8 px-6 md:px-22">
    <div className="flex flex-col gap-3 md:w-[723px]">
      <h2 className="text-2xl md:text-[67px] text-white font-bold text-center md:text-left md:w-[591px]">
        Simple pricing for your Business
      </h2>
      <p className="text-md md:text-lg text-white opacity-70 text-center md:text-left">
        We have several powerful plans to showcase your business and get
        discovered as a creative entrepreneurs. Everything you need.
      </p>
    </div>
    <PriceListing />
  </section>
);

export default Pricing;

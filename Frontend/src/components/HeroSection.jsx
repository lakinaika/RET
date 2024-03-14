import React from "react";
import heroBg from "../assets/hero.img.png"

const HeroSection = () => {
  return (
    <section
      className="hero-section md:p-16 px-10 sm:py-32 py-24 flex flex-col md:flex-row items-center md:justify-between justify-center md:gap-24 w-full md:min-h-screen"
      id="home"
    >
      <div className="md:w-1/2 w-full text-white z-10">
        <h1 className="md:text-3xl text-xl font-bold">
          Revolutionize Your Business:
          Unleash Growth with Next-Gen CRM Solutions
        </h1>
        <p className="md:mt-5 mt-2 md:text-xl">
          we specialize in personalized CRM solutions to fuel your business
          growth. With our tailored approach and expert support, we ensure
          you're equipped to thrive in today's fast-paced market.
        </p>
      </div>
      <div className="img-icons md:relative md:w-1/2 top-5 z-0 w-full mx-auto text-center">
        <img
          src={heroBg}
          alt="hero-icons"
          className="md:relative w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div
      id="hero"
      className="px-4 py-4 flex lg:justify-between justify-center items-center flex-wrap gap-2 lg:mx-80"
    >
      <div className="">
        <h1 className="lg:text-7xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 lg:font-semibold animate-fade-right animate-once animate-duration-1000 animate-delay-100 animate-ease-linear">
          PHONEPAL,
          <br />
          THE GREATEST
          <br />
          PHONE SHOP
        </h1>
        <div className="py-2 flex gap-4 px-1">
          <Link to="/products">
            <Button label="Products"></Button>
          </Link>
          <a href="#contact-us">
            <Button label="Contact Us"></Button>
          </a>
        </div>
      </div>
      <div className="h-fit w-[500px] shadow-2xl rounded-lg justify-center items-center overflow-hidden animate-fade-up animate-once animate-duration-2000 animate-delay-200 animate-ease-linear bg-transparent">
        <img src="/assets/phone.jpg" alt="" className="object cover" />
      </div>
    </div>
  );
};

export default Hero;

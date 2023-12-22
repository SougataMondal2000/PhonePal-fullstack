import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const OurChoice = () => {
  return (
    <div id="our-choice">
      <div className="text-center">
        <h2 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 text-center pb-2">
          Our Choice
        </h2>
      </div>
      <div className="w-full flex max-lg:flex-wrap justify-center items-center gap-4 px-4 py-4 lg:px-8">
        <IoIosArrowBack className="w-8 h-auto bg-transparent cursor-pointer max-lg:hidden"/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <IoIosArrowForward className="w-8 h-auto bg-transparent cursor-pointer max-lg:hidden"/>
      </div>
      <div className="flex justify-center items-center pt-4">
        <Link to="/products">
          <Button label="Browse More"></Button>
        </Link>
      </div>
    </div>
  );
};

export default OurChoice;

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
      <div className="flex flex-wrap lg:justify-start justify-center gap-4 px-4 py-4 lg:px-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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

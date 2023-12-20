import { Link } from "react-router-dom";
import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="w-[300px] rounded-md border shadow-xl">
      <img
        src="/assets/phone-2.jpg"
        alt=""
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          About Macbook
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Macbook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
        </div>
        <div className="">
          <Link to="/product">
            <Button label="Buy Now"></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import { Link } from "react-router-dom";
import Button from "./Button";

const ProductCard = ({ product }) => {
  return (
    <div>
      <ul className="w-[300px] border shadow-xl">
        <li key={product.id}>
          <img
            src={product.image}
            alt=""
            className="h-[200px] w-full rounded-t-lg object-cover"
          />
          <div className="p-4">
            <h2 className="inline-flex items-center text-lg font-semibold">
              {product.model}
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Price: ${product.price}
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Processor: {product.processor}
            </p>
            <p className="mt-3 text-sm text-gray-600">OS: {product.os}</p>
            <p className="mt-3 text-sm text-gray-600">RAM: {product.ram} GB</p>
            <div className="mt-2">
              <Link to={`/product?id=${product.id}`}>
                <Button label="Buy Now"></Button>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductCard;

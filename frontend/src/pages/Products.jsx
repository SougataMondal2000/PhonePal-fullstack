import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
const filters = [
  {
    id: "OS",
    name: "OS",
    options: [
      { value: "android", label: "Android" },
      { value: "ios", label: "iOS" },
    ],
  },
  {
    id: "RAM",
    name: "RAM",
    options: [
      { value: "4GB", label: "4GB" },
      { value: "6GB", label: "6GB" },
      { value: "8GB", label: "8GB" },
      { value: "12GB", label: "12GB" },
    ],
  },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionToggle = (option) => {
    const newSelectedOptions = selectedOption.includes(option)
      ? selectedOption.filter((o) => o !== option)
      : [selectedOption, option];
    setSelectedOption(newSelectedOptions);
  };

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  //   setIsDropdownOpen(false);
  //   console.log("Sorting by:", option);
  // };

  products.forEach((product) => {
    console.log("Product ID:", product.id);
    // ... use the ID as needed
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/dummyproducts");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-full px-2 py-10 lg:px-20">
        <div className="md:flex md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 p-3">
              Products
            </h1>
          </div>
          <div className="mt-6 flex justify-between items-center pt-2 md:mt-0 md:space-x-4  md:pt-0">
            <div className="dropdown">
              <button
                type="button"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={handleButtonClick}
              >
                Sort <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <ul className="text-sm">
                  <li key="price-low-to-high">
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedOption.includes("price: low to high")}
                        onChange={() =>
                          handleOptionToggle("price: low to high")
                        }
                      />
                      Price: Low to High
                    </label>
                  </li>
                  <li key="price-high-to-low">
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedOption.includes("price: high to low")}
                        onChange={() =>
                          handleOptionToggle("price: high to low")
                        }
                      />
                      Price: High to Low
                    </label>
                  </li>
                </ul>
              )}
            </div>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              OS
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              RAM <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <hr className="my-8" />
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
            {filters.map((filter) => (
              <div key={filter.id} className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {filter.name}
                </h3>
                <ul className="mt-2">
                  {filter.options.map((option) => (
                    <li
                      key={option.value}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center">
                        <input
                          id={`${filter.id}-${option.value}`}
                          name={`${filter.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                        />
                        <label
                          htmlFor={`${filter.id}-${option.value}`}
                          className="ml-3 text-sm font-medium text-gray-900"
                        >
                          {option.label}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="h-auto rounded-t-lg px-4 py-2 lg:col-span-9 lg:h-full flex flex-wrap lg:justify-start max-md:justify-center lg:gap-10 gap-4">
            <div>
              {isLoading ? (
                <p>Loading products...</p>
              ) : error ? (
                <p>Error fetching products: {error.message}</p>
              ) : (
                <div className="flex justify-center lg:justify-start items-center flex-wrap gap-4">
                  {products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

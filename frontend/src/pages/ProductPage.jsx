import { useEffect, useState } from "react";
import Button from "../components/Button";
import TestimonialCard from "../components/TestimonialCard";
const ProductPage = () => {
  const isLoggin = localStorage.getItem("user");
  console.log(isLoggin);

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const increaseProductCount = () => {
    setProductCount(productCount + 1);
  };

  const decreaseProductCount = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

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

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    try {
      if (!isLoggin || isLoggin == null) {
        window.location.replace("/signin");
        return;
      }
      await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      const options = {
        key: "rzp_test_0202rN36C3r3rq",
        currency: "INR",
        amount: 100 * 100,
        name: "PHONEPAL",
        description: "Thanks for purchasing",

        handler: async function (response) {
          await response.razorpay_payment_id;
          setPaymentSuccess(true);
        },
        prefill: {
          name: "TSX PIZZARIA",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <div className="pt-8"></div>
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-5 grid grid-cols-2 gap-2.5">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="col-span-1 transition duration-150 ease-in hover:opacity-90"
            >
              <img
                src="/assets/phone.jpg"
                alt="Apple iPhone 14--0"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
              iPhone 14 Pro
            </h2>
            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
              The iPhone 14 is a great option if you're looking for a small,
              powerful phone. It has a 5.4-inch OLED display with a resolution
              of 1080 x 2340 pixels, which is sharp and bright. The A14 Bionic
              chip is one of the fastest processors on the market, so you'll be
              able to handle even the most demanding tasks with ease. The rear
              camera system is also excellent, with two 12MP lenses that can
              take great photos and videos in both bright and low-light
              conditions.
            </p>
            <div className="mt-5 flex items-center ">
              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                $1040.00
              </div>
            </div>
          </div>
          <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
            <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
              <button
                onClick={decreaseProductCount}
                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
              >
                -
              </button>
              <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                {productCount}
              </span>
              <button
                onClick={increaseProductCount}
                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
              >
                +
              </button>
            </div>
            <div className="px-3 py-2">
              <Button label="Buy now" onClick={displayRazorpay}></Button>
            </div>
          </div>
          <div className="py-6 ">
            <ul className="space-y-5 pb-1 text-sm">
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">
                  OS:
                </span>
                <a
                  className="hover:text-heading transition hover:underline"
                  href="#"
                >
                  iOS
                </a>
              </li>
              <li className="productTags">
                <span className="text-heading inline-block pr-2 font-semibold">
                  RAM:
                </span>
                <a
                  className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                  href="#"
                >
                  4 GB
                </a>
              </li>
              <li className="productTags">
                <span className="text-heading inline-block pr-2 font-semibold">
                  Tags:
                </span>
                <a
                  className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                  href="#"
                >
                  Phones
                </a>
              </li>
            </ul>
          </div>
          <div className="shadow-sm ">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Additional Information
              </h2>
              <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                <div className="bg-heading h-0.5 w-full rounded-sm" />
                <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
              </div>
            </header>
            <div>
              <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                Our Customer Experience Team is available 7 days a week and we
                offer 2 ways to get in contact.Email and Chat . We try to reply
                quickly, so you need not to wait too long for a response!.
              </div>
            </div>
          </div>
          <div className="">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Customer Reviews
              </h2>
            </header>
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

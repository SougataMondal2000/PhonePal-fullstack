import { Link } from "react-router-dom";
import Button from "../components/Button";
const attr = [
  {
    icon: "/assets/fast-delivery.png",
    text: "Fast Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    icon: "/assets/customer-care.png",
    text: "24*7 Customer Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    icon: "/assets/cashback.png",
    text: "No Question Refund",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
];

const WhyUs = () => {
  return (
    <div id="why-us" className="px-4 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-200 animate-ease-linear">
      <h2 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 text-center">
        Why us?
      </h2>
      <div className="">
        <ul className="flex justify-center items-center gap-4 py-4">
          {attr.map((elem) => (
            <li key={elem.icon} className="lg:w-80">
              <img src={elem.icon} alt="" className="mx-auto py-4" />
              <h3 className="font-semibold lg:text-xl text-lg text-center pb-2">
                {elem.text}
              </h3>
              <p className="lg:text-lg text-sm text-center">{elem.desc}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <Link to="/products">
          <Button label="Start Shopping"></Button>
        </Link>
      </div>
    </div>
  );
};

export default WhyUs;

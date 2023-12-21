import { Link } from "react-router-dom";
import Button from "./Button";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "#why-us", label: "Why Us?" },
  // { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

const Nav = () => {
  return (
    <div>
      <header className="px-4 lg:px-10 py-4 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <Link to="/">
            <img
              src="/assets/Logo.png"
              alt="logo"
              className="m-0 w-[50px] h-[50px] rounded-full"
            />
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-lg text-slate-gray hover:underline hover:text-gray-600 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-2 max-lg:hidden">
            <Link to="/signup">
              <Button label="Sign Up"></Button>
            </Link>
            <Link to="/signin">
              <Button label="Sign In"></Button>
            </Link>
          </div>
          <div className="hidden max-lg:block cursor-pointer">
            <img
              src="/assets/hamburger.svg"
              alt="hamburger icon"
              width={25}
              height={25}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;

import Button from "../components/Button";
import TestimonialCard from "../components/TestimonialCard";

const ContactUs = () => {
  return (
    <div id="contact-us" className="flex flex-wrap lg:justify-around justify-center items-center px-10 gap-4 py-8">
      <div>
        <TestimonialCard/>
      </div>
      <div>
      <div className="text-center">
        <h2 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 text-center pb-2">Get in Touch!</h2>
      </div>
      <div className="px-4 flex justify-center items-center">
      <form action="">
        <input
          type="text"
          placeholder="Name"
          className="p-2 mt-2 mb-4 border-2 rounded-md outline-none lg:w-[30vw] w-full "
        />
        <br />
        <input
          type="text"
          placeholder="Email ID"
          className="p-2 mb-4 border-2 rounded-md outline-none lg:w-[30vw] w-full "
        />
        <br />
        <input
          type="text"
          placeholder="Phone No"
          className="p-2 mb-4 border-2 rounded-md outline-none lg:w-[30vw] w-full"
        />
        <div className="flex justify-center items-center gap-2">
            <Button label="Contact Us"></Button>
          </div>
      </form>
      </div>
      </div>
      
      
    </div>
  );
};

export default ContactUs;

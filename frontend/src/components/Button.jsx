

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}
      className="h-10 bg-gradient-to-br from-black to-gray-500 px-2 py-1 text-white hover:from-gray-500 hover:to-black hover:shadow-3xl rounded-md"      
    >
      {label}
    </button>
  );
};

export default Button; 
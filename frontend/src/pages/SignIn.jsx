import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {

   const[email, setEmail] = useState("") 
   const[password, setPassword] = useState("") 
   const [error, setError] = useState(false);
   
   const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("http://localhost:3000/server/auth/login", {
        email,
        password,
      });
      if (res.status == 200) {
        localStorage.setItem("user", res.data.username)
      }
      window.location.replace("/")
    } catch (err) {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <img src="/assets/Logo.png" alt="Logo" className="w-auto h-14 mb-4 rounded-full bg-transparent" />
      <div className="w-full max-w-md rounded-md lg:shadow-md p-8">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign In</h2>

        <form action="/login" method="post" className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600 mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2">Invalid email or password</p>
          )}
          <button
            className="h-10 bg-gradient-to-br from-black to-gray-500 px-2 py-1 text-white hover:from-gray-500 hover:to-black hover:shadow-3xl rounded-md w-full"
            type="submit"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
            <Link to="/signup" className="block text-center mt-4 text-gray-500 hover:text-blue-500">
              <p>Already have an account? Sign Up</p>
            </Link>
      </div>
    </main>
  );
};

export default SignIn;

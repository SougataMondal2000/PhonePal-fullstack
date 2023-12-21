// import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(false);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/server/auth/register",
//         {
//           username,
//           email,
//           password,
//         }
//       );
//       res.data && window.location.replace("/login");
//     } catch (err) {
//       setError(true);
//     }
//   };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <img
        src="/assets/Logo.png"
        alt="Logo"
        className="w-auto h-14 mb-4"
      />
      <div className="w-full max-w-md rounded-md shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Sign Up</h2>

        <form action="/signup" method="post" className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600 mb-2" htmlFor="username">
              Username:
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

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

          <div className="flex justify-center items-center"><Button label="Sign Up"></Button></div>
          
        </form>

        <a
          href="/login"
          className="block text-center mt-4 text-gray-500 hover:text-blue-500"
        >
          Already have an account? Sign In
        </a>
      </div>
    </main>
  );
};

export default SignUp;

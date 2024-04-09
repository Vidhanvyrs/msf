import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Create a free account to</h1>
      <p className=" text-gray-600 mb-12">
        discover your personalized learning path
      </p>
      <div className=" flex justify-between mb-12">
        <button className=" facebook bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700">
          Join using Facebook
        </button>
        <button className=" google bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-700">
          Join using Google
        </button>
      </div>
      <div className=" flex items-center mb-8">
        <span className=" px-4 py-2 bg-white font-bold text-gray-700">OR</span>
      </div>
      <form onSubmit={handleSubmit} className=" flex flex-col w-96">
        <label htmlFor="email" className=" text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className=" border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
        <label htmlFor="password" className=" text-gray-700 font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className=" border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className=" bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700"
        >
          Sign up
        </button>
      </form>
      <p className=" text-gray-600 text-sm">
        Existing user? <a href="#">Log in</a>
      </p>
    </div>
  );
}

export default Login;

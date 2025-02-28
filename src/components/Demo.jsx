import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [input, setInput] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(input), [input]);

  return (
    <div
      className={`w-96 h-96 border border-green-800 m-auto p-5 rounded-lg shadow-lg transition-all duration-300 ${
        darkTheme ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        className="border p-2 px-4 m-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        Toggle Theme
      </button>

      {/* Input Section */}
      <div className="p-3 flex flex-col gap-3">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-black w-full p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a number"
        />

        <button className="border bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition">
          Find
        </button>

        {/* Result Display */}
        <h1 className="font-bold text-xl text-center mt-3">
          The nth prime number is: <span className="text-blue-500">{prime}</span>
        </h1>
      </div>
    </div>
  );
};

export default Demo;

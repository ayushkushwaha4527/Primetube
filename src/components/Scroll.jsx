import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scrolling behavior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Scroll to Top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
};

export default Scroll;

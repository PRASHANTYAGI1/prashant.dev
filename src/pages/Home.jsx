import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Galaxy from "../components/Galaxy"; // Your Galaxy background component

const Home = () => {
  const navigate = useNavigate(); // ✅ Correctly use navigate inside Home component

  const handleButtonClick = () => {
    navigate("/projects"); // ✅ Navigate to /projects when button clicked
  };

  return (
    <div className="relative flex flex-col min-h-screen p-5 -mt-20 overflow-hidden bg-black lg:flex-row lg:gap-12 md:flex-col">
      <Galaxy />

      {/* Left Section */}
      <div className="z-10 flex flex-col items-center justify-center w-full py-10 mt-20 md:items-start md:p-10 lg:w-1/2">
        <button className="px-4 py-2 mb-6 text-xs font-bold text-white capitalize sm:text-sm bg-blue-500/35 rounded-xl">
          (❁´◡`❁) a portfolio website
        </button>

        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left sm:gap-8">
          <h1 className="text-3xl font-bold leading-tight text-white capitalize sm:text-5xl md:text-4xl">
            Hi, I’m Prashant a{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
              designer and web developer
            </span>{" "}
            creating
          </h1>

          <p className="px-2 text-sm text-gray-300 sm:text-lg md:text-xl md:px-0">
            "Simple. Smart. Beautiful web experiences."
          </p>

          <button
            onClick={handleButtonClick} // ✅ Button navigates
            className="px-4 py-2 mt-6 text-sm font-bold text-white capitalize sm:text-lg md:text-xl bg-blue-500/20 hover:bg-blue-600 rounded-xl md:mt-10"
          >
            Let's see <span className="text-2xl">🙈</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex md:w-full md:items-center md:justify-end md:gap-3 lg:flex lg:flex-row lg:justify-baseline lg:items-end-safe lg:gap-10 lg:w-1/2 lg:py-10">
        <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:hidden lg:block">◔ ◡ ◔</h1>
        <img src="bg2.png" alt="Background" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default Home;

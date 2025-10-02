import clsx from "clsx";
import { useState } from "react";
import { ClockLoader } from "react-spinners";

const Loader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleColor = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        "flex h-screen flex-col items-center justify-center gap-12",
        isDarkMode ? "bg-black" : "bg-white",
      )}
    >
      <ClockLoader
        color={isDarkMode ? "white" : "black"}
        size={240}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <button
        onClick={handleToggleColor}
        className={clsx(
          "w-[220px] rounded-2xl border-2 px-4 py-2 transition",
          isDarkMode
            ? "border-white text-white hover:bg-white hover:text-black"
            : "border-black text-black hover:bg-black hover:text-white",
        )}
      >
        Click to change color
      </button>
    </div>
  );
};

export default Loader;

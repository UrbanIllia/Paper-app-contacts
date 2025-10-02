import clsx from "clsx";
import React, { useState } from "react";
import { GiRotaryPhone } from "react-icons/gi";

const Home = () => {
  const [color, setColor] = useState(false);
  const handleChange = () => {
    setColor((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        "flex h-screen flex-col items-center rounded pt-[100px]",
        color ? "bg-black" : "bg-white",
      )}
    >
      <h2
        className={clsx(
          "text-center text-[100px]",
          !color ? "text-black" : "text-white",
        )}
      >
        Phone Book
      </h2>
      <GiRotaryPhone size={230} color={!color ? "black" : "white"} />
      <button
        onClick={handleChange}
        className={clsx(
          "rounded-xl px-5 py-2 text-xl transition hover:scale-110",
          color
            ? "border-2 border-black bg-white text-black hover:shadow-xl hover:shadow-white"
            : "border-2 border-white bg-black text-white hover:shadow-xl hover:shadow-black",
        )}
      >
        Change color
      </button>
    </div>
  );
};

export default Home;

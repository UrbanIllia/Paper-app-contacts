import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectorAuth";

const WellcomUser = () => {
  const { name } = useSelector(selectUser);
  return (
    <div className="absolute right-1/2 translate-x-1/2 rounded-lg bg-black px-3 py-1">
      <p className="text-white">
        Wellcom <span className="font-bold capitalize">{name}</span>!
      </p>
    </div>
  );
};

export default WellcomUser;

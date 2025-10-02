import { useDispatch } from "react-redux";
import { logOutThunk } from "../redux/auth/operationsAuth";
import { toast } from "react-toastify";

const NavLogOut = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutThunk()).unwrap();
    toast.success("Log out is success");
  };
  return (
    <button
      onClick={handleLogOut}
      type="button"
      className="rounded-2xl px-2 font-semibold transition hover:text-red-500"
    >
      Log Out
    </button>
  );
};

export default NavLogOut;

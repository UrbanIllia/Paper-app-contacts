import clsx from "clsx";
import LoginForm from "../components/LoginForm";
import { loginUserThunk } from "../redux/auth/operationsAuth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("Login:", values);
    dispatch(loginUserThunk(values)).unwrap();
    toast.success("Login is success");
  };

  return (
    <div
      className={clsx(
        "mx-auto mt-[40px] w-full px-[20px] py-[80px]",
        "sm:max-w-[375px] sm:px-[30px]",
        "md:max-w-[768px] md:px-[40px]",
        "lg:max-w-[1028px] lg:px-[80px]",
        "xl:max-w-[1440px] xl:px-[100px]",
      )}
    >
      <h2 className="mb-10 text-center text-3xl font-bold">Login</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;

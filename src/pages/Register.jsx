import clsx from "clsx";
import RegisterForm from "../components/RegisterForm";
import { registerUserThunk } from "../redux/auth/operationsAuth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("Register:", values);
    dispatch(registerUserThunk(values)).unwrap();
    toast.success("Register is success");
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
      <h2 className="mb-10 text-center text-3xl font-bold">Register</h2>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;

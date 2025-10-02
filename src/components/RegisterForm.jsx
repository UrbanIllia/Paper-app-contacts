import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchemaRegister } from "../validation/validationSchema";
import clsx from "clsx";

const RegisterForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    onSubmit(values);
    options.resetForm();
  };

  return (
    <div className="mx-auto flex w-fit items-center justify-center rounded border-2 border-black p-6 shadow-2xl shadow-black">
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchemaRegister}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col">
            <label className="relative mb-5 flex flex-col gap-2">
              <span>Name</span>
              <Field
                name="name"
                type="text"
                autoComplete="name"
                className={clsx(
                  "rounded bg-black px-2 py-2 text-white focus:border-dotted focus:border-white",
                  errors.name && touched.name && "border-2 border-red-500",
                )}
                placeholder="Enter name ..."
              ></Field>
              <ErrorMessage
                component="div"
                name="name"
                className="absolute bottom-[-22px] left-0 text-sm font-semibold text-red-500"
              />
            </label>
            <label className="relative mb-5 flex flex-col gap-2">
              <span>Email:</span>
              <Field
                name="email"
                type="email"
                autoComplete="email"
                className={clsx(
                  "rounded bg-black px-2 py-2 text-white focus:border-dotted focus:border-white",
                  errors.email && touched.email && "border-2 border-red-500",
                )}
                placeholder="Enter email ..."
              ></Field>
              <ErrorMessage
                component="div"
                name="email"
                className="absolute bottom-[-22px] left-0 text-sm font-semibold text-red-500"
              />
            </label>
            <label className="relative mb-8 flex flex-col gap-2">
              <span>Password:</span>
              <Field
                name="password"
                type="password"
                autoComplete="current-password"
                className={clsx(
                  "rounded bg-black px-2 py-2 text-white focus:border-dotted focus:border-white",
                  errors.password &&
                    touched.password &&
                    "border-2 border-red-500",
                )}
                placeholder="Enter password ..."
              ></Field>
              <ErrorMessage
                component="div"
                name="password"
                className="absolute bottom-[-22px] left-0 text-sm font-semibold text-red-500"
              />
            </label>
            <button
              type="submit"
              className="rounded border-2 border-dotted border-black bg-slate-100 transition hover:bg-red-500"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;

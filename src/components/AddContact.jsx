// import clsx from "clsx";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { validationSchemaContact } from "../validation/validationSchema";

// const AddContact = ({ onSubmit }) => {
//   const initialValues = {
//     name: "",
//     number: "",
//   };

//   const handleSubmit = (values, options) => {
//     console.log(values);
//     onSubmit(values);
//     options.resetForm();
//   };

//   return (
//     <div className="mx-auto flex w-fit items-center justify-center rounded border-2 border-black p-6 shadow-2xl shadow-black">
//       <Formik
//         onSubmit={handleSubmit}
//         initialValues={initialValues}
//         validationSchema={validationSchemaContact}
//       >
//         {({ errors, touched }) => (
//           <Form className="flex flex-col">
//             <label className="relative mb-5 flex flex-col gap-2">
//               <span>Name:</span>
//               <Field
//                 name="name"
//                 type="text"
//                 autoComplete="name"
//                 placeholder="Enter name ..."
//                 className={clsx(
//                   "rounded bg-black px-2 py-2 text-white focus:border-dotted focus:border-white",
//                   errors.name && touched.name && "border-2 border-red-500",
//                 )}
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="absolute bottom-[-22px] left-0 text-sm font-semibold text-red-500"
//               />
//             </label>
//             <label className="relative mb-10 flex flex-col gap-2">
//               <span>Number:</span>
//               <Field
//                 name="number"
//                 type="text"
//                 autoComplete="number"
//                 placeholder="Enter number ..."
//                 className={clsx(
//                   "rounded bg-black px-2 py-2 text-white focus:border-dotted focus:border-white",
//                   errors.name && touched.name && "border-2 border-red-500",
//                 )}
//               />
//               <ErrorMessage
//                 name="number"
//                 component="div"
//                 className="absolute bottom-[-22px] left-0 text-sm font-semibold text-red-500"
//               />
//             </label>
//             <button
//               button="submit"
//               className="rounded border-2 border-dotted border-black bg-slate-100 transition hover:bg-red-500"
//             >
//               Add to phone book
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AddContact;
import clsx from "clsx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchemaContact } from "../validation/validationSchema";

const AddContact = ({ onSubmit, initialValues }) => {
  const defaultValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <div className="mx-auto flex w-fit items-center justify-center rounded border-2 border-black p-6 shadow-2xl shadow-black">
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues || defaultValues}
        validationSchema={validationSchemaContact}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col">
            <label className="relative mb-5 flex flex-col gap-2">
              <span>Name:</span>
              <Field
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter name ..."
                className={clsx(
                  "rounded bg-black px-2 py-2 text-white focus:border-dotted focus:border-white",
                  errors.name && touched.name && "border-2 border-red-500",
                )}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="absolute bottom-[-22px] left-0 text-sm font-semibold text-red-500"
              />
            </label>
            <label className="relative mb-10 flex flex-col gap-2">
              <span>Number:</span>
              <Field
                name="number"
                type="text"
                autoComplete="number"
                placeholder="Enter number ..."
                className={clsx(
                  "rounded bg-black px-2 py-2 text-white focus:border-dotted focus:border-white",
                  errors.number && touched.number && "border-2 border-red-500",
                )}
              />
              <ErrorMessage
                name="number"
                component="div"
                className="absolute bottom-[-22px] left-0 text-sm font-semibold text-red-500"
              />
            </label>
            <button
              type="submit"
              className="rounded border-2 border-dotted border-black bg-slate-100 transition hover:bg-red-500"
            >
              {initialValues ? "Update contact" : "Add to phone book"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddContact;

import clsx from "clsx";
import React, { useEffect } from "react";
import AddContact from "../components/AddContact";
import { useDispatch } from "react-redux";
import {
  getAllContactsThunk,
  postContactThunk,
} from "../redux/contacts/operationsCon";

import ContactsItems from "../components/ContactsItems";
import { toast } from "react-toastify";

const Contacts = () => {
  // const allContacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  const handleAddPost = (values) => {
    dispatch(postContactThunk(values))
      .unwrap()
      .then(() => toast.success("Contact posted successfully"))
      .catch((error) =>
        toast.error(
          `Failed to post contact: ${error.message || "Unknown error"}`,
        ),
      );
  };

  return (
    <div
      className={clsx(
        "mx-auto px-[20px] pb-[40px] pt-[100px]",
        "sm:max-w-[375px] sm:px-[30px]",
        "md:max-w-[768px] md:px-[40px]",
        "lg:max-w-[1028px] lg:px-[80px]",
        "xl:max-w-[1440px] xl:px-[100px]",
      )}
    >
      <h2 className="mb-10 text-center text-3xl font-bold">Contacts</h2>
      <AddContact onSubmit={handleAddPost} />
      <ContactsItems />
    </div>
  );
};

export default Contacts;

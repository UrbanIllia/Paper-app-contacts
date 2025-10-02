import { useDispatch, useSelector } from "react-redux";
import { selectAllContacts } from "../redux/contacts/selectorsCon";
import { deleteContactById } from "../redux/contacts/operationsCon";
import { toast } from "react-toastify";
import { useState } from "react";
import ModalEdit from "./ModalEdit";

const ContactsItems = () => {
  const allContacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setIsOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteContactById(id))
      .unwrap()
      .then(() => toast.success("Deleting is success"))
      .catch(() => toast.error("Failed to delete contact"));
  };

  if (!allContacts || allContacts.length === 0) {
    return (
      <div>
        <p className="mt-10 text-center text-2xl font-semibold text-black">
          Contacts is empty
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-[375px] rounded border-2 border-black p-6 shadow-2xl shadow-black sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[1000px]">
      <ul className="space-y-4">
        {allContacts.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between rounded bg-black p-4 text-white shadow-md"
          >
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-300">{item.number}</p>
            </div>
            <div className="flex flex-row gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="rounded border-2 border-dotted border-white px-3 py-1 text-sm font-medium text-white transition hover:border-red-500 hover:bg-red-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="rounded border-2 border-dotted border-white px-3 py-1 text-sm font-medium text-white transition hover:border-red-500 hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isOpen && <ModalEdit item={selectedContact} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default ContactsItems;

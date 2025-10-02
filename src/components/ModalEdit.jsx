import { useDispatch } from "react-redux";
import AddContact from "./AddContact";
import { editContactByIdThunk } from "../redux/contacts/operationsCon";
import { toast } from "react-toastify";

const ModalEdit = ({ item, setIsOpen }) => {
  const dispatch = useDispatch();

  const handleEditContact = (values) => {
    const updatedData = {
      name: values.name,
      number: values.number,
    };
    dispatch(editContactByIdThunk({ id: item.id, updatedData }))
      .unwrap()
      .then(() => {
        toast.success("Contact updated successfully");
        setIsOpen(false);
      })
      .catch(() => {
        toast.error("Failed to update contact");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-auto w-fit rounded border-2 border-black bg-white p-12 shadow-2xl shadow-black sm:w-[400px] md:w-[500px]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 rounded-full border-2 border-dotted border-black px-2 py-1 text-sm font-medium text-black transition hover:bg-red-500 hover:text-white"
        >
          X
        </button>
        <AddContact onSubmit={handleEditContact} initialValues={item} />
      </div>
    </div>
  );
};

export default ModalEdit;

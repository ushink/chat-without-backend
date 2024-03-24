import { CheckOutlined, EditOutlined } from "@ant-design/icons";
import "./update.css";
import useStore from "@/src/store/store";

export default function ButtonUpdate({ isEditMode, setIsEditMode, id, value }) {
  const updateMessage = useStore((state) => state.updateMessage);

  return (
    <>
      {isEditMode === id ? (
        <button
          aria-label="Save"
          className="user-message__buttons_save"
          onClick={() => {
            setIsEditMode("");
            updateMessage(id, value);
          }}
        >
          <CheckOutlined />
        </button>
      ) : (
        <button
          aria-label="Update"
          className="user-message__buttons_update"
          onClick={() => {
            setIsEditMode(id);
          }}
        >
          <EditOutlined />
        </button>
      )}
    </>
  );
}

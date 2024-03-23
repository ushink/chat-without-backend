import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./buttonMessage.css";
import useStore from "@/src/store/store";

export default function ButtonMessage({
  isEditMode,
  setIsEditMode,
  id,
  value,
}) {
  const removeMessage = useStore((state) => state.removeMessage);
  const updateMessage = useStore((state) => state.updateMessage);

  return (
    <div className="user-message__buttons">
      {isEditMode ? (
        <button aria-label="Save" className="user-message__buttons_save">
          <CheckOutlined />
        </button>
      ) : (
        <button
          aria-label="Update"
          className="user-message__buttons_update"
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          <EditOutlined />
        </button>
      )}

      <button
        aria-label="Delete"
        className="user-message__buttons_delete"
        onClick={() => {
          removeMessage(id);
        }}
      >
        <DeleteOutlined />
      </button>
    </div>
  );
}

import { DeleteOutlined } from "@ant-design/icons";
import "./delete.css";
import useStore from "@/src/store/store";

export default function ButtonDelete({ id }) {
  const removeMessage = useStore((state) => state.removeMessage);

  return (
    <button
      aria-label="Delete"
      className="user-message__buttons_delete"
      onClick={() => {
        removeMessage(id);
      }}
    >
      <DeleteOutlined />
    </button>
  );
}

import Image from "next/image";
import "./bubbleMessage.css";
import useStore from "@/src/store/store";
import { useEffect, useRef, useState } from "react";

export default function BubbleMessage({
  isEditMode,
  setIsEditMode,
  sender,
  id,
  text,
  time,
}) {
  const [value, setValue] = useState(text);

  const updateMessage = useStore((state) => state.updateMessage);

  const editTextRef = useRef(null);

  useEffect(() => {
    if (isEditMode) {
      editTextRef?.current?.focus();
    }
  }, [isEditMode]);

  return (
    <div className={sender === "user" ? "chat__message" : "chat__message-bot"}>
      <div className="chat__message-content">
        {sender === "bot" && (
          <div className="name">
            Janet <span className="role">Bot</span>
          </div>
        )}

        {isEditMode && sender === "user" ? (
          <input
            className="chat__message-input"
            value={value}
            ref={editTextRef}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateMessage(id, value);
                setIsEditMode(false);
              }
            }}
          />
        ) : (
          <div className="chat__message-text">{text}</div>
        )}
      </div>
      <div className="chat__message-time">
        {time}
        {sender === "user" && (
          <span>
            <Image
              src="/read-receipt.svg"
              width={16}
              height={8}
              alt="receipt"
            />
          </span>
        )}
      </div>
    </div>
  );
}

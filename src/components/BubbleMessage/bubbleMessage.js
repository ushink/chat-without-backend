import Image from "next/image";
import "./bubbleMessage.css";
import useStore from "@/src/store/store";
import { useEffect, useRef, useState } from "react";
import ButtonUpdate from "../buttonsMessage/ButtonUpdate/update";
import ButtonDelete from "../buttonsMessage/ButtonDelete/delete";

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
    <div>
      <div
        className={sender === "user" ? "chat__message" : "chat__message-bot"}
      >
        <label className="chat__message-content">
          {sender === "bot" && (
            <div className="name">
              Janet <span className="role">Bot</span>
            </div>
          )}

          {isEditMode === id && sender === "user" ? (
            <input
              className="chat__message-input"
              type="text"
              value={value}
              ref={editTextRef}
              onChange={(e) => {
                e.stopPropagation();
                setValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateMessage(id, value);
                  setIsEditMode("");
                }
              }}
            />
          ) : (
            <div className="chat__message-text">{text}</div>
          )}
        </label>

        <div className="chat__message-time">
          {time}
          {sender === "user" && (
            <Image
              src="/read-receipt.svg"
              width={16}
              height={8}
              alt="receipt"
            />
          )}
        </div>
      </div>

      {sender === "user" && (
        <div className="user-message__buttons">
          <ButtonUpdate
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            id={id}
            value={value}
          />
          <ButtonDelete id={id} />
        </div>
      )}
    </div>
  );
}

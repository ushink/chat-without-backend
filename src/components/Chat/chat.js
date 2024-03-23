"use client";
import Image from "next/image";
import "./chat.css";
import dayjs from "dayjs";
import useStore from "../../store/store";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default function Chat({ setIsOpenList }) {
  const chatNewDate = dayjs().format("MM/DD/YYYY");

  const messages = useStore((state) => state.messages);
  const removeMessage = useStore((state) => state.removeMessage);

  return (
    <div className="chat__content" onClick={() => setIsOpenList(false)}>
      <div className="chat__content-date">{chatNewDate}</div>
      {messages?.map((message) => (
        <div
          key={Math.random()}
          className={message.sender === "user" ? "user-message" : "bot-message"}
        >
          {message.sender === "bot" && (
            <Image
              src="/avatar-bot.svg"
              width={32}
              height={32}
              alt="Avatar bot"
              className="bot-avatar"
            />
          )}
          <div className="user-message__wrapper">
            <div
              className={
                message.sender === "user"
                  ? "chat__message"
                  : "chat__message-bot"
              }
            >
              <div className="chat__message-content">
                {message.sender === "bot" && (
                  <div className="name">
                    Janet <span className="role">Bot</span>
                  </div>
                )}
                <div className="chat__message-text">{message.text}</div>
              </div>
              <div className="chat__message-time">
                {message.time}{" "}
                {message.sender === "user" && (
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
            {message.sender === "user" && (
              <div className="user-message__buttons">
                <button className="user-message__buttons_update">
                  <EditOutlined />
                </button>
                <button
                  className="user-message__buttons_delete"
                  onClick={() => {
                    removeMessage(message.id);
                  }}
                >
                  <DeleteOutlined />
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";
import Image from "next/image";
import "../styles/chat.css";
import dayjs from "dayjs";
import useStore from "../store";

export default function Chat() {
  const chatNewDate = dayjs().format("MM/DD/YYYY");

  const messages = useStore((state) => state.messages);
  const removeMessage = useStore((state) => state.removeMessage);

  return (
    <div className="chat__content">
      <div className="chat__content-date">{chatNewDate}</div>
      {messages?.map((message, index) => (
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
                      alt="Avatar bot"
                    />
                  </span>
                )}
              </div>
            </div>
            {message.sender === "user" && (
              <div className="user-message__buttons">
                <button className="user-message__buttons_update">
                  &#128394;
                </button>
                <button
                  className="user-message__buttons_delete"
                  onClick={() => {
                    removeMessage(message.id);
                  }}
                >
                  &#129530;
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

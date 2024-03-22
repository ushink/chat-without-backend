"use client";
import Image from "next/image";
import "../styles/chat.css";
import dayjs from "dayjs";
import useStore from "../store";
import { useEffect, useState } from "react";

export default function Chat() {
  const [dialog, setDialog] = useState([]);

  const chatNewDate = dayjs().format("MM/DD/YYYY");

  const messages = useStore((state) => state.messages);

  // Сохранение данных в localStorage при изменении состояния
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem("messages", JSON.stringify(dialog.concat(messages)));
    }
  }, [messages, dialog]);

  //  Загрузка данных из localStorage при монтировании компонента
  useEffect(() => {
    const savedDialog = JSON.parse(localStorage.getItem("messages"));
    if (savedDialog) {
      setDialog(savedDialog);
    }
  }, []);

  console.log(messages);
  console.log("dialog", dialog);
  console.log(JSON.parse(localStorage.getItem("messages")));

  return (
    <div className="chat__content">
      <div className="chat__content-date">{chatNewDate}</div>
      {dialog?.map((message, index) => (
        <div
          key={index}
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
          <div
            className={
              message.sender === "user" ? "chat__message" : "chat__message-bot"
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
        </div>
      ))}
    </div>
  );
}

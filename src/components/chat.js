import Image from "next/image";
import "../styles/chat.css";
import dayjs from "dayjs";

let messages = [
  { sender: "user", text: "Hi team 👋", time: "11:31 AM" },
  { sender: "user", text: "Anyone on for lunch today", time: "11:31 AM" },
  { sender: "bot", text: "I’m down! Any ideas??", time: "11:35 AM" },
];

export default function Chat() {
  const chatNewDate = dayjs().format("MM/DD/YYYY");

  return (
    <div className="chat__content">
      <div className="chat__content-date">{chatNewDate}</div>
      {messages?.map((message, index) => (
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

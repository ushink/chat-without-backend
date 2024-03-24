"use client";
import Image from "next/image";
import "./chat.css";
import dayjs from "dayjs";
import useStore from "../../store/store";
import ButtonMessage from "../ButtonMessage/buttonMessage";
import BubbleMessage from "../BubbleMessage/bubbleMessage";
import { useState } from "react";
import ScrollableFeed from "react-scrollable-feed";

export default function Chat({ setIsOpenList }) {
  const chatNewDate = dayjs().format("MM/DD/YYYY");

  const messages = useStore((state) => state.messages);

  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="chat__content" onClick={() => setIsOpenList(false)}>
      <div className="chat__content-date">{chatNewDate}</div>
      {!messages.length && <p>There is no messages...</p>}

      <ScrollableFeed>
        {messages?.map((message) => (
          <div
            key={message.id}
            className={
              message.sender === "user" ? "user-message" : "bot-message"
            }
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

            {message.type ? (
              <Image
                src={message?.src}
                width={100}
                height={100}
                alt="uplo"
                className="bot-avatar"
              />
            ) : (
              <label className="user-message__wrapper">
                <BubbleMessage
                  isEditMode={isEditMode}
                  setIsEditMode={setIsEditMode}
                  id={message.id}
                  sender={message.sender}
                  text={message.text}
                  time={message.time}
                  src={message.content}
                />
                {message.sender === "user" && (
                  <ButtonMessage
                    isEditMode={isEditMode}
                    setIsEditMode={setIsEditMode}
                    id={message.id}
                    value={message.text}
                  />
                )}
              </label>
            )}
          </div>
        ))}
      </ScrollableFeed>
    </div>
  );
}

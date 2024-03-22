"use client";
import "../styles/footer.css";
import { useState } from "react";
import dayjs from "dayjs";
import useStore from "../store";

export default function Footer() {
  const [input, setInput] = useState("");

  const createMessage = useStore((state) => state.createMessage);

  const handleSend = () => {
    if (input.trim()) {
      const message = {
        text: input,
        sender: "user",
        time: dayjs().format("HH:mm"),
      };

      createMessage(message);

      const botMessage = {
        text: "Hello World!",
        sender: "bot",
        time: dayjs().format("HH:mm"),
      };

      createMessage(botMessage);

      setInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <form className="footer" onSubmit={handleSubmit}>
      <div className="footer__input">
        <button className="footer__input-emoji">&#128578;</button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start typing..."
        />
      </div>
      <div className="footer__button">
        <button className="footer__button-upload">@</button>
        <button
          className="footer__button-send"
          type="submit"
          onClick={handleSend}
        >
          &#9992;
        </button>
      </div>
    </form>
  );
}

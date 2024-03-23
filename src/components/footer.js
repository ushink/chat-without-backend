"use client";
import "../styles/footer.css";
import { useEffect, useState } from "react";
import useStore from "../store";
import {
  PaperClipOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const [input, setInput] = useState("");
  const [isActiveButton, setIsActiveButton] = useState(false);

  const createMessage = useStore((state) => state.createMessage);

  const handleSend = () => {
    if (input.trim()) {
      const message = {
        text: input,
        sender: "user",
      };
      createMessage(message);

      const botMessage = {
        text: "Hello World!",
        sender: "bot",
      };
      createMessage(botMessage);

      setInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  useEffect(() => {
    if (input.trim()) {
      setIsActiveButton(true);
    } else {
      setIsActiveButton(false);
    }
  }, [input]);

  return (
    <form className="footer" onSubmit={handleSubmit}>
      <div className="footer__input">
        <button className="footer__input-emoji">
          <SmileOutlined />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start typing..."
        />
      </div>
      <div className="footer__button">
        <button className="footer__button-upload">
          <PaperClipOutlined />
        </button>
        <button
          className={
            isActiveButton
              ? "footer__button-send"
              : "footer__button-send_disable"
          }
          disabled={!isActiveButton}
          type="submit"
          onClick={handleSend}
        >
          <SendOutlined />
        </button>
      </div>
    </form>
  );
}

"use client";
import "./footer.css";
import { useEffect, useRef, useState } from "react";
import useStore from "../../store/store";
import {
  PaperClipOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const [input, setInput] = useState("");
  const [isActiveButton, setIsActiveButton] = useState(false);

  const fileImage = useRef(null);

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

  const handleImageChange = (e) => {
    e.preventDefault();

    const file = fileImage.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        createMessage({
          sender: "user",
          type: "image",
          src: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }

    setTimeout(() => {
      createMessage({
        text: "Hello World!",
        sender: "bot",
      });
    }, 500);
  };

  const handleUpload = () => {
    fileImage.current.click();
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
      <div className="footer__input-box">
        <button className="footer__input-emoji">
          <SmileOutlined />
        </button>
        <input
          className="footer__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start typing..."
        />
      </div>
      <div className="footer__button">
        <input
          id="imgAds"
          type="file"
          hidden
          accept="image/*,.png,.jpg,.gif,.web,"
          ref={fileImage}
          onChange={handleImageChange}
        />
        <button className="footer__button-upload" onClick={handleUpload}>
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

"use client";
import { useState } from "react";
import Chat from "../components/Chat/chat";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

export default function Home() {
  const [isOpenList, setIsOpenList] = useState(false);

  return (
    <div className="chat">
      <Header isOpenList={isOpenList} setIsOpenList={setIsOpenList} />
      <Chat setIsOpenList={setIsOpenList} />
      <Footer />
    </div>
  );
}

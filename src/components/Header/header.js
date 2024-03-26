"use client";
import Image from "next/image";
import "./header.css";
import { MoreOutlined } from "@ant-design/icons";
import useStore from "@/src/store/store";

export default function Header({ isOpenList, setIsOpenList }) {
  const deleteEverything = useStore((state) => state.deleteEverything);

  return (
    <div className="header">
      <Image
        src="/avatar-group.svg"
        width={84}
        height={26}
        alt="Avatars of the chat"
      />
      <div className="header-box">
        <h1 className="title">🦄 Team Unicorns</h1>
        <p className="time">last seen 45 minutes ago</p>
      </div>
      <button className="nav-burger" onClick={() => setIsOpenList(!isOpenList)}>
        <MoreOutlined rotate={90} />
      </button>
      <div
        className={isOpenList ? "nav-burger__list" : "nav-burger__list-close"}
      >
        <button
          className="nav-burger__list_item"
          disabled={!isOpenList}
          onClick={() => {
            deleteEverything();
            setIsOpenList(false);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";
import "./header.css";

export default function Header() {
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
      <div className="nav-burger">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

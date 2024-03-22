import Chat from "../components/chat";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="chat">
      <Header />
      <Chat />
      <Footer />
    </div>
  );
}

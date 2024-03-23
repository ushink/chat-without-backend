import Chat from "../components/Chat/chat";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

export default function Home() {
  return (
    <div className="chat">
      <Header />
      <Chat />
      <Footer />
    </div>
  );
}

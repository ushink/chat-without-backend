import { create } from "zustand";

const useStore = create((set, get) => ({
  messages: [],
  createMessage: ({ sender, text, time }) => {
    const { messages } = get();
    const newMessage = {
      sender,
      text,
      time,
    };
    
    // asyns await ???
    set({
      messages: [newMessage].concat(messages),
    });
  },
}));

export default useStore;

import { persist } from "zustand/middleware";
import { create } from "zustand";

const useStore = create(
  persist(
    (set, get) => ({
      messages: [],

      createMessage: ({ sender, text, time }) => {
        const { messages } = get();
        const newMessage = {
          id: Math.random(),
          sender,
          text,
          time,
        };

        set({
          messages: [newMessage].concat(messages),
        });
      },

      removeMessage: (id) => {
        const { messages } = get();
        
        set({
          messages: messages.filter((message) => message.id !== id),
        });
      },
    }),
    {
      name: "messages",
    }
  )
);

export default useStore;

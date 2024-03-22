import { persist } from "zustand/middleware";
import { create } from "zustand";

const useStore = create(
  persist(
    (set, get) => ({
      messages: [],
      createMessage: ({ sender, text, time }) => {
        const { messages } = get();
        const newMessage = {
          sender,
          text,
          time,
        };

        set({
          messages: [newMessage].concat(messages),
        });
      },
    }),
    {
      name: "messages",
    }
  )
);

export default useStore;

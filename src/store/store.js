import { persist } from "zustand/middleware";
import { create } from "zustand";
import dayjs from "dayjs";

const useStore = create(
  persist(
    (set, get) => ({
      messages: [],

      createMessage: ({ sender, text, type, src }) => {
        const { messages } = get();
        const newMessage = {
          id: Math.random(),
          sender,
          text,
          time: dayjs().format("HH:mm A"),
          type,
          src,
        };

        set({
          messages: [...messages, newMessage],
        });
      },

      removeMessage: (id) => {
        const { messages } = get();

        set({
          messages: messages.filter((message) => message.id !== id),
        });
      },

      updateMessage: (id, text) => {
        const { messages } = get();

        set({
          messages: messages.map((message) => ({
            ...message,
            text: message.id === id ? text : message.text,
          })),
        });
      },

      deleteEverything: () => {
        set({ messages: [] });
      },
    }),
    {
      name: "messages",
    }
  )
);

export default useStore;

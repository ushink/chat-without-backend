import { create } from "zustand";

// Использую Middleware чтобы перехватывать изменения и сохранять в localStorage
const localStorageUpdate = (config) => (set, get, api) =>
  config(
    (nextState, ...args) => {
      if (nextState) {
        window.localStorage.setItem(
          "messages",
          JSON.stringify(nextState.messages)
        );
      }

      set(nextState, ...args);
    },
    get,
    api
  );

// Вытаскиваю сообщения при перезагрузке из localStorage
const getCurrentState = () => {
  try {
    const currentState = JSON.parse(
      window.localStorage.getItem("messages") || "[]"
    );

    return currentState;
  } catch (error) {
    window.localStorage.setItem("messages", "[]");
  }
  
  return [];
};

const useStore = create(
  localStorageUpdate((set, get) => ({
    messages: getCurrentState(),
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
  }))
);

export default useStore;

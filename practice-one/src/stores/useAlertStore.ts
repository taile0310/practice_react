import { create } from "zustand";

interface ConfirmStore {
  message: string;
  isAlertVisible: boolean;

  showAlert: (message: string) => void;
  hideAlert: () => void;
}

export const useAlertStore = create<ConfirmStore>((set) => ({
  message: "",
  isAlertVisible: false,
  showAlert: (message) => set({ message, isAlertVisible: true }),
  hideAlert: () => set({ isAlertVisible: false }),
}));

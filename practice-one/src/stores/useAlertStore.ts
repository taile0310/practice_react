// Library
import { create } from "zustand";

// Define props for AlertStore
type AlertStore = {
  message: string;
  isAlertVisible: boolean;
  showAlert: (message: string) => void;
  hideAlert: () => void;
};

// Create store using Zustand
export const useAlertStore = create<AlertStore>((set) => ({
  message: "",
  isAlertVisible: false,
  /**
   * The function displays the message
   * @param message
   * @returns
   */
  showAlert: (message) => set({ message, isAlertVisible: true }),
  // Function to hide notification
  hideAlert: () => set({ isAlertVisible: false }),
}));

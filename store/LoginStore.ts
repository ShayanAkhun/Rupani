import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface User {
  email: string;
  name: string;
}


interface AuthState {
  user: User | null;
  isLoading: boolean;
  loadUser: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}


const useLoginAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,

  loadUser: async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        set({ user: JSON.parse(userData) as User });
      }
    } catch (error) {
      console.error("Failed to load user:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (email: string, password: string) => {
    try {
      const fakeUser: User = { email, name: "Shayan Ghori" };

      await AsyncStorage.setItem("user", JSON.stringify(fakeUser));

      set({ user: fakeUser });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem("user");

      set({ user: null });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));

export default useLoginAuthStore;

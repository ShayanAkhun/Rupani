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
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const useSignUpAuthStore = create<AuthState>((set) => ({
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
      const storedUser = await AsyncStorage.getItem(email);

      if (storedUser) {
        const user: User = JSON.parse(storedUser);
        await AsyncStorage.setItem("user", JSON.stringify(user));
        set({ user });
      } else {
        console.error("User not found. Please register first.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  },

  register: async (name: string, email: string, password: string) => {
    try {
      const newUser: User = { email, name };

      await AsyncStorage.setItem(email, JSON.stringify(newUser));
      await AsyncStorage.setItem("user", JSON.stringify(newUser));

      set({ user: newUser });
    } catch (error) {
      console.error("Registration failed:", error);
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

export default useSignUpAuthStore;

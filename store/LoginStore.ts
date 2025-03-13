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

  // Load logged-in user from AsyncStorage
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

  // Login function: Find user in AsyncStorage
  login: async (email: string, password: string) => {
    try {
      const usersData = await AsyncStorage.getItem("users");
      const users: User[] = usersData ? JSON.parse(usersData) : [];

      // Find user by email
      const foundUser = users.find((user) => user.email === email);

      if (!foundUser) {
        console.error("User not found. Please register first.");
        return;
      }

      // Save logged-in user separately
      await AsyncStorage.setItem("user", JSON.stringify(foundUser));

      // Update Zustand state
      set({ user: foundUser });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },

  // Logout function: Remove logged-in user
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

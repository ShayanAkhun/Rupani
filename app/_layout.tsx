import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, Slot, Redirect } from "expo-router";

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLogin = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      setIsLoggedIn(!!userToken);
    };
    checkLogin();
  }, []);

  if (isLoggedIn === null) {
    return <Slot />; // 🔥 Ensure Slot is always rendered
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isLoggedIn ? <Slot /> : <Redirect href="/(auth)/Login" />} 
    </Stack>
  );
}

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, Redirect } from "expo-router";

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLogin = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      setIsLoggedIn(!!userToken);
    };

    checkLogin();
  }, []);

  // Prevent flashing of an empty screen until login status is checked
  if (isLoggedIn === null) {
    return null;
  }

  return (
    <>
     
      {!isLoggedIn && <Redirect href="/(auth)/Login" />}

     
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)/Login" />
        <Stack.Screen name="(auth)/SignUp" />
        <Stack.Screen name="(drawer)" />
      </Stack>
    </>
  );
}

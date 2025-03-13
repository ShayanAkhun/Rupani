import { Drawer } from "expo-router/drawer";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useLoginAuthStore from "@/store/LoginStore";

function DrawerLayout() {
  const { logout, user } = useLoginAuthStore()

  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Dashboard",
            title: `Welcome, ${user?.name || "Guest"}`,
          }}
        />

        <Drawer.Screen
          name="maternal"
          options={{
            drawerLabel: "Maternal",
            title: "Maternal",
          }}
        />

        <Drawer.Screen
          name="parental"
          options={{
            drawerLabel: "Parental",
            title: "Parental",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}


export default DrawerLayout;

import { Drawer } from "expo-router/drawer";
import "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler";

function DrawerLayout() {
  return (
    <GestureHandlerRootView>

      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Dashboard",
            title: "Dashboard",
          }}
        />

        <Drawer.Screen
          name="Maternal"
          options={{
            drawerLabel: "Maternal",
            title: "Maternal",
          }}
        />
        <Drawer.Screen
          name="Parental"
          options={{
            drawerLabel: "Parental",
            title: "Parental",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>

  );
}

export default DrawerLayout
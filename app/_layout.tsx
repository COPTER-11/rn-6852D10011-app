import {
  Kanit_400Regular,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  //โหลด Google Font ที่ติดตั้งไป ---------
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  //-----------------------------------

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="taxi_fare"
        options={{
          title: "Taxi Fare",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#ffce2f",
          },
          headerTitleStyle: {
            color: "#ffffff",
            fontFamily: "Kanit_400Regular",
            fontSize: 28,
          },
        }}
      />
    </Stack>
  );
}

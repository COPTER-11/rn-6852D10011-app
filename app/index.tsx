import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/taxi_fare");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/taxi-logo.png")}
        style={styles.imglogo}
      />
      <Text style={styles.txtAppName}>Taxi Fare Calculator</Text>
      <Text style={styles.txtApp}>คำนวนค่าโดยสารแท็กซี่</Text>
      <ActivityIndicator size="large" color="#ddbc00" />
      <View style={styles.profile}>
        <Image
          source={require("@/assets/images/me.jpg")}
          style={styles.imgme}
        />
        <Text style={styles.txtprofile}>พัฒนาโดย</Text>
        <Text style={styles.txtprofile}>6852D10011 จิรายุ นิติเรืองเวชกุล</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtprofile: {
    fontSize: 16,
    color: "#000000",
    fontFamily: "Kanit_400Regular",
  },
  profile: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
  },
  imgme: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 10,
  },
  txtApp: {
    fontSize: 20,
    color: "#00ccff",
    marginBottom: 20,
    fontFamily: "Kanit_400Regular",
  },
  imglogo: {
    width: 150,
    height: 150,
    marginBottom: 25,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txtAppName: {
    fontSize: 28,
    color: "#00ccff",
    fontFamily: "Kanit_700Bold",
  },
});

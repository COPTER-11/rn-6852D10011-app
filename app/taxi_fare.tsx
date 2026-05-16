import React from "react";
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Taxi_fare() {
  const [distance, setdistance] = React.useState("");
  const [time, settime] = React.useState("");
  const [fare, setFare] = React.useState("0.00");

  const CalculateFareClick = () => {
    if (!distance || !time) {
      Alert.alert("คำเตือน", "กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    let distKm = parseFloat(distance);
    let jamMin = parseFloat(time);

    if (isNaN(distKm) || isNaN(jamMin) || distKm < 0 || jamMin < 0) {
      Alert.alert("คำเตือน", "กรุณากรอกตัวเลขที่ถูกต้อง (ไม่ติดลบ)");
      return;
    }

    let totalFare = 0.0;

    if (distKm <= 0) {
      setFare("0.00");
      return;
    }

    totalFare += 35.0;
    let remainingKm = distKm - 1.0;

    if (remainingKm > 0) {
      let tierKm = Math.min(remainingKm, 9.0);
      totalFare += tierKm * 6.5;
      remainingKm -= tierKm;
    }

    if (remainingKm > 0) {
      let tierKm = Math.min(remainingKm, 10.0);
      totalFare += tierKm * 7.0;
      remainingKm -= tierKm;
    }

    if (remainingKm > 0) {
      let tierKm = Math.min(remainingKm, 20.0);
      totalFare += tierKm * 8.0;
      remainingKm -= tierKm;
    }

    if (remainingKm > 0) {
      let tierKm = Math.min(remainingKm, 20.0);
      totalFare += tierKm * 8.5;
      remainingKm -= tierKm;
    }

    if (remainingKm > 0) {
      let tierKm = Math.min(remainingKm, 20.0);
      totalFare += tierKm * 9.0;
      remainingKm -= tierKm;
    }

    if (remainingKm > 0) {
      totalFare += remainingKm * 10.5;
    }

    totalFare += jamMin * 3.0;

    setFare(totalFare.toFixed(2));
  };

  const ResetClick = () => {
    setdistance("");
    settime("");
    setFare("0.00");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headertaix}>
        <Image
          source={require("@/assets/images/taxi-logo.png")}
          style={styles.imglogo}
        />
        <Text style={styles.headerTitle}>คำนวณค่าโดยสารแท็กซี่</Text>
      </View>
      <View style={styles.taxititle}>
        <Text style={styles.txtsection}>ระยะทาง (กิโลเมตร) 🛣️</Text>
        <TextInput
          style={styles.tinput}
          keyboardType="numeric"
          placeholder="กรุณากรอกระยะทาง"
          value={distance}
          onChangeText={setdistance}
        />
        <Text style={styles.txtsection}>เวลารถติด (นาที) ⏰</Text>
        <TextInput
          style={styles.tinput}
          keyboardType="numeric"
          placeholder="กรุณากรอกเวลารถติด"
          value={time}
          onChangeText={settime}
        />
      </View>

      <TouchableOpacity style={styles.bttexi} onPress={CalculateFareClick}>
        <Text style={styles.txtBttexi}>คํานวณค่าโดยสาร</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.bttexi, { backgroundColor: "#727272" }]}
        onPress={ResetClick}
      >
        <Text style={styles.txtBttexi}>ยกเลิก</Text>
      </TouchableOpacity>

      <View style={styles.resultBox}>
        <Text style={styles.resultTitle1}>ค่าโดยสารแท็กซี่</Text>
        <Text style={styles.resultTitle2}>{fare}</Text>
        <Text style={styles.resultTitle3}>บาท</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  resultTitle1: {
    fontFamily: "Kanit_700Bold",
    fontSize: 20,
  },
  resultTitle2: {
    fontFamily: "Kanit_700Bold",
    fontSize: 40,
    color: "#ed175e",
  },
  resultTitle3: {
    fontFamily: "Kanit_400Regular",
    color: "#2c2c2c",
    fontSize: 20,
  },
  resultBox: {
    marginVertical: 15,
    alignItems: "center",
    backgroundColor: "#ffebc6",
    borderRadius: 10,
    paddingVertical: 25,
    shadowColor: "#5b5b5b",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  txtBttexi: {
    textAlign: "center",
    fontFamily: "Kanit_700Bold",
    fontSize: 20,
    color: "#ffffff",
  },
  bttexi: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffce2f",
    justifyContent: "center",
    borderRadius: 10,
    marginBlock: 8,
  },
  txtsection: {
    fontFamily: "Kanit_700Bold",
    fontSize: 20,
    marginBottom: 5,
  },
  tinput: {
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#7a7a7a",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  taxititle: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: "Kanit_700Bold",
    fontSize: 28,
    color: "#000000",
  },
  imglogo: {
    width: 150,
    height: 150,
    marginBottom: 25,
  },
  headertaix: {
    marginBottom: 30,
    marginTop: 10,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 30,
  },
});

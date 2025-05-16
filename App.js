import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BotonMas from "./componentes/Botones/BotonMas.js";
import BotonMenos from "./componentes/Botones/BotonMenos.js";
import PomodoroText from "./componentes/Textos/PomodoroText.js";
import BreakText from "./componentes/Textos/BreakText.js";
import PomodoroTimer from "./componentes/Cronometro/Cronometro.js"

export default function App() {
  return (
    <View style={styles.container}>
      <PomodoroTimer />
      <View style={styles.botones}>
        <PomodoroText />
        <BotonMas />
        <BotonMenos />
      </View>
      <View style={styles.botones}>
        <BreakText />
        <BotonMas />
        <BotonMenos />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    gap: 20,
  },

});

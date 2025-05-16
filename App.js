import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BotonStart from "./componentes/Botones/BotonStart.js";
import BotonReset from "./componentes/Botones/BotonReset.js";
import BotonPause from "./componentes/Botones/BotonPause.js";
import BotonMas from "./componentes/Botones/BotonMas.js";
import BotonMenos from "./componentes/Botones/BotonMenos.js";
import PomodoroText from "./componentes/Textos/PomodoroText.js";
import BreakText from "./componentes/Textos/BreakText.js";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.botones}>
        <BotonStart />
        <BotonReset />
        <BotonPause />
      </View>
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

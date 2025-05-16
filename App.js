import React, { useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import BotonMas from "./componentes/Botones/BotonMas.js";
import BotonMenos from "./componentes/Botones/BotonMenos.js";
import PomodoroTimer from "./componentes/Cronometro/Cronometro.js";
import NumeroConImagenes from "./componentes/Estilos/NumeroConImagenes.js";

export default function App() {
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const incrementPomodoro = () => setPomodoroTime((t) => Math.min(t + 1, 25));
  const decrementPomodoro = () => setPomodoroTime((t) => Math.max(t - 1, 1));

  const incrementBreak = () => setBreakTime((t) => Math.min(t + 1, 5));
  const decrementBreak = () => setBreakTime((t) => Math.max(t - 1, 1));

  return (
    <View style={styles.container}>
      <PomodoroTimer initialMinutes={pomodoroTime} />

      <View style={styles.botones}>
        <Image
          source={require("./assets/textos/pomodoroText.png")}
          style={{ width: 150, height: 100 }}
          resizeMode="contain"
        />
        <BotonMenos onPress={decrementPomodoro} />
        <NumeroConImagenes numero={pomodoroTime} />
        <BotonMas onPress={incrementPomodoro} />
      </View>

      <View style={styles.botones}>
        <Image
          source={require("./assets/textos/breakText.png")}
          style={{ width: 120, height: 100 }}
          resizeMode="contain"
        />
        <BotonMenos onPress={decrementBreak} />
        <NumeroConImagenes numero={breakTime} />
        <BotonMas onPress={incrementBreak} />
      </View>
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
    alignItems: "center",
    marginTop: 20,
    gap: 20,
  },
  numero: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

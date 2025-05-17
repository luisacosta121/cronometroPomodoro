import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import BotonMas from "./componentes/Botones/BotonMas.js";
import BotonMenos from "./componentes/Botones/BotonMenos.js";
import PomodoroTimer from "./componentes/Cronometro/Cronometro.js";
import NumeroConImagenes from "./componentes/Estilos/NumeroConImagenes.js";
import { StatusBar } from "expo-status-bar";

export default function App() {
  //-----------------------------------------------------
  //    ESTADOS Y FUNCIONES PARA AJUSTAR LOS TIEMPOS
  //-----------------------------------------------------
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const incrementoPomodoro = () => setPomodoroTime((prev) => Math.min(prev + 1, 25));
  const decrementoPomodoro = () => setPomodoroTime((prev) => Math.max(prev - 1, 1));

  const incrementoBreak = () => setBreakTime((prev) => Math.min(prev + 1, 5));
  const decrementoBreak = () => setBreakTime((prev) => Math.max(prev - 1, 1));
  //-----------------------------------------------------

  return (
    <View style={styles.container}>
      <PomodoroTimer pomodoroTime={pomodoroTime} breakTime={breakTime} />
      <View>
        <Image
          source={require("./assets/textos/pomodoroText.png")}
          style={{ width: 200, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.botones}>
        <BotonMenos onPress={decrementoPomodoro} />
        <NumeroConImagenes numero={pomodoroTime} />
        <BotonMas onPress={incrementoPomodoro} />
      </View>
      <View>
        <Image
          source={require("./assets/textos/breakText.png")}
          style={{ width: 150, height: 100 }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.botones}>
        <BotonMenos onPress={decrementoBreak} />
        <NumeroConImagenes numero={breakTime} />
        <BotonMas onPress={incrementoBreak} />
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
    alignItems: "center",
    marginTop: 20,
    gap: 20,
  },
  numero: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

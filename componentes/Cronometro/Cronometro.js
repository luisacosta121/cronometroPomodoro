import React, { useState, useEffect, useRef } from "react";
import { View, Image, ImageBackground, StyleSheet } from "react-native";
import BotonStart from "../Botones/BotonStart.js";
import BotonPause from "../Botones/BotonPause.js";
import BotonReset from "../Botones/BotonReset.js";

const imageMap = {
  0: require("../../assets/numeros/cero.png"),
  1: require("../../assets/numeros/uno.png"),
  2: require("../../assets/numeros/dos.png"),
  3: require("../../assets/numeros/tres.png"),
  4: require("../../assets/numeros/cuatro.png"),
  5: require("../../assets/numeros/cinco.png"),
  6: require("../../assets/numeros/seis.png"),
  7: require("../../assets/numeros/siete.png"),
  8: require("../../assets/numeros/ocho.png"),
  9: require("../../assets/numeros/nueve.png"),
  ":": require("../../assets/numeros/dosPuntos.png"),
};

const PomodoroTimer = ({ pomodoroTime, breakTime }) => {
  const [secondsLeft, setSecondsLeft] = useState(pomodoroTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isPomodoro, setIsPomodoro] = useState(true); // true = pomodoro, false = break
  const intervalRef = useRef(null);

  // Actualiza el tiempo cuando cambia pomodoro/break o los tiempos config
  useEffect(() => {
    setSecondsLeft((isPomodoro ? pomodoroTime : breakTime) * 60);
  }, [pomodoroTime, breakTime, isPomodoro]);

  // Controla el conteo del timer
  useEffect(() => {
  if (isRunning) {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);

          const nextIsPomodoro = !isPomodoro;
          setIsPomodoro(nextIsPomodoro);
          const nextTime = (nextIsPomodoro ? pomodoroTime : breakTime) * 60;
          setSecondsLeft(nextTime);

          // ⚠️ Reiniciar el cronómetro automáticamente
          setIsRunning(true);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  } else {
    clearInterval(intervalRef.current);
  }

  return () => clearInterval(intervalRef.current);
}, [isRunning, isPomodoro, pomodoroTime, breakTime]);

  // Funciones para botones
  const startTimer = () => {
    if (!isRunning) setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft((isPomodoro ? pomodoroTime : breakTime) * 60);
  };

  // Formateo para mostrar con imágenes
  const formatTime = (totalSeconds) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`.split("");
  };

  const timeArray = formatTime(secondsLeft);

  return (
    
<ImageBackground source={require('../../assets/fondo/fondoHoja.jpg')} style={styles.fondo}>
     
   
    
    <View style={styles.container}>
    {/* Imagen del tipo de intervalo */}
    <Image
      source={
        isPomodoro
          ? require("../../assets/textos/pomodoroText.png")
          : require("../../assets/textos/breakText.png")
      }
      style={styles.intervalTypeImage}
      
      resizeMode="contain"
    />

    <View style={styles.timerContainer}>
      {timeArray.map((char, index) => (
        <Image
          key={index}
          source={imageMap[char]}
          style={styles.number}
          resizeMode="contain"
        />
      ))}
    </View>

    <View style={styles.buttonContainer}>
      <BotonStart onPress={startTimer} />
      <BotonPause onPress={pauseTimer} />
      <BotonReset onPress={resetTimer} />
    </View>
  </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  timerContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  number: {
    width: 40,
    height: 60,
    marginHorizontal: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  intervalTypeImage: {
  width: 300,
  height: 150,
  marginBottom: 20,},
  fondo: {
  resizeMode: "cover",
  position: "static"}
});

export default PomodoroTimer;
export { PomodoroTimer, imageMap };

import React, { useState, useEffect, useRef } from "react";
import { View, Image, ImageBackground, StyleSheet } from "react-native";
import BotonStart from "../Botones/BotonStart.js";
import BotonPause from "../Botones/BotonPause.js";
import BotonReset from "../Botones/BotonReset.js";
import { Vibration } from "react-native";

/*
  const [segundosRestantes, setSegundosRestantes] = useState(pomodoroTime * 60): SEGUNDOS RESTANTES DEL TEMPORIZADOR
  const [enMarcha, setEnMarcha] = useState(false): INDICA SI EL TEMPORIZADOR ESTA FUNCIONANDO O NO
  const [enPomodoro, setEnPomodoro] = useState(true): SI ES TRUE ESTA EN PODOMORO, SI ES FALSE EN BREAK
  const intervalo = useRef(null): REFERENCIA PARA DETENER setIntervalo
  *useEffect(() => {
    setSegundosRestantes((enPomodoro ? pomodoroTime : breakTime) * 60);
    }, [pomodoroTime, breakTime, enPomodoro]): ACTUALIZA EL TIEMPO CUANDO CAMBIA EL MODO
  *useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        ... (MAS CODIGO)
       return () => clearInterval(intervalRef.current);
        }, [isRunning, isPomodoro, pomodoroTime, breakTime]): CUANDO EnMarcha ES TRUE INICIA UN INTERVALO
        DE 1 SEGUNDO, AL LLEGAR A 0 CAMBIA A POMODORO O BREAK Y REINICIA EL TIEMPO CON NUEVO CONTADOR.
  *const formatTime = (totalSeconds): DA FORMATO A LOS NUMEROS 
  RESUMEN: MUESTRA EL CRONOMETRO CON IMAGENES PERSONALIZADAS, PERMITE EMPEZAR, PAUSAR Y RESETEAR EL CONTADOR.
           ALTERNA AUTOMATICAMENTE ENTRE POMODORO Y BREAK Y PERMITE ELEGIR EL TIEMPO DE AMBOS
           CON MINIMO DE 1 MINUTOS PARA AMBOS Y MAXIMO 25 MINUTOS PARA POMODORO Y 5 MINUTOS PARA BREAK
*/

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
  const [segundosRestantes, setSegundosRestantes] = useState(pomodoroTime * 60);
  const [enMarcha, setEnMarcha] = useState(false);
  const [enPomodoro, setEnPomodoro] = useState(true); // true = pomodoro, false = break
  const intervalo = useRef(null);

  useEffect(() => {
    setSegundosRestantes((enPomodoro ? pomodoroTime : breakTime) * 60);
  }, [pomodoroTime, breakTime, enPomodoro]);

  useEffect(() => {
    if (enMarcha) {
      intervalo.current = setInterval(() => {
        setSegundosRestantes((prev) => {
          if (prev <= 1) {
            clearInterval(intervalo.current);

            const siguePomodoro = !enPomodoro;
            setEnPomodoro(siguePomodoro);
            const proximo = (siguePomodoro ? pomodoroTime : breakTime) * 60;
            setSegundosRestantes(proximo);
            Vibration.vibrate(200)
            setEnMarcha(true);

            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalo.current);
    }

    return () => clearInterval(intervalo.current);
  }, [enMarcha, enPomodoro, pomodoroTime, breakTime]);

  const startTimer = () => {
    if (!enMarcha) setEnMarcha(true);
  };

  const pauseTimer = () => {
    setEnMarcha(false);
  };

  const resetTimer = () => {
    setEnMarcha(false);
    setSegundosRestantes((enPomodoro ? pomodoroTime : breakTime) * 60);
  };

  const formatTime = (totalSeconds) => {
    const minutos = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const segundos = String(totalSeconds % 60).padStart(2, "0");
    return `${minutos}:${segundos}`.split("");
  };

  const timeArray = formatTime(segundosRestantes);

  return (
    <ImageBackground
      source={require("../../assets/fondo/fondoHoja.jpg")}
      style={styles.fondo}
    >
      <View style={styles.container}>
        {/* Imagen del tipo de intervalo */}
        <Image
          source={
            enPomodoro
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
    marginBottom: 20,
  },
  fondo: {
    resizeMode: "cover",
    position: "static",
  },
});

export default PomodoroTimer;
export { PomodoroTimer, imageMap };

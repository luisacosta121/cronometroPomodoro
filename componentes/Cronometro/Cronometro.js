import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';


const imageMap = {
  '0': require('../../assets/numeros/cero.png'),
  '1': require('../../assets/numeros/uno.png'),
  '2': require('../../assets/numeros/dos.png'),
  '3': require('../../assets/numeros/tres.png'),
  '4': require('../../assets/numeros/cuatro.png'),
  '5': require('../../assets/numeros/cinco.png'),
  '6': require('../../assets/numeros/seis.png'),
  '7': require('../../assets/numeros/siete.png'),
  '8': require('../../assets/numeros/ocho.png'),
  '9': require('../../assets/numeros/nueve.png'),
  ':': require('../../assets/numeros/dosPuntos.png'),
};

const PomodoroTimer = () => {
  const initialTime = 25 * 60;
  const [secondsLeft, setSecondsLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSecondsLeft(initialTime);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (totalSeconds) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`.split('');
  };

  const timeArray = formatTime(secondsLeft);

  return (
    <View style={styles.container}>
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
        <TouchableOpacity onPress={startTimer} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pauseTimer} style={styles.button}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={resetTimer} style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  number: {
    width: 40,
    height: 60,
    marginHorizontal: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#ff6347',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PomodoroTimer;

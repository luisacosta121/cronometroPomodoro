import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { imageMap } from "../Cronometro/Cronometro";

const NumeroConImagenes = ({ numero }) => {
  const digits = numero.toString().padStart(2, "0").split("");

  return (
    <View style={styles.container}>
      {digits.map((digit, index) => (
        <Image
          key={index}
          source={imageMap[digit]}
          style={styles.digit}
          resizeMode="contain"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  digit: {
    width: 30,
    height: 45,
    marginHorizontal: 1,
  },
});

export default NumeroConImagenes;

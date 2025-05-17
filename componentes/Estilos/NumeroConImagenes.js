import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { imageMap as mapaDeImagenes } from "../Cronometro/Cronometro";

/*
  numero.toString(): CONVIERTE EL NUMERO EN STRING
  .padStart(2, "0"): SI ES NUMERO DE UN DIGITO AGREGA 0 AL PRINCIPIO
  .split(""): SEPARA LOS MINUTOS CON UNA COMA, POR EJEMPLO "05" EN [0, 5]
  digitos.map: RECORRE CADA DIGITO Y MUESTRA LA IMAGEN QUE CORRESPONDE
  source={imageMap[digit]}: ACCEDE A LA IMAGEN CORRESPONDE QUE SE ENCUENTRA EN mapaDeImagenes
*/

const NumeroConImagenes = ({ numero }) => {
  const digitos = numero.toString().padStart(2, "0").split("");

  return (
    <View style={styles.container}>
      {digitos.map((digit, index) => (
        <Image
          key={index}
          source={mapaDeImagenes[digit]}
          style={styles.digito}
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
  digito: {
    width: 30,
    height: 45,
    marginHorizontal: 1,
  },
});

export default NumeroConImagenes;

import { StyleSheet } from "react-native";

/*
  StyleSheet: HERRAMIENTA DE REACT NATIVE PARA CREAR ESTILOS (SIMILAR A CSS PERO EN FORMATO JS) 
  resizeMode contain: MUESTRA LAS IMAGENES COMPLETAS Y SIN DEFORMACIONES, DE ADAPTAN AL ESPACIO ASIGNADO
  RESUMEN: ES UN COMPONENTE DE ESTILO PARA QUIEN LO IMPLEMENTE
*/

const styles = StyleSheet.create({
  imagen: {
    width: 250,
    height: 100,
    resizeMode: "contain",
  },
});

export default styles;

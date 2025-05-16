import {  Image } from "react-native";
import EstilosTexto from "../Estilos/EstilosTexto.js"

const TextoBreak = () => {
  return (
      <Image
        source={require("../../assets/textos/breakText.png")}
        style={EstilosTexto.imagen}
        width={200}
      />
  );
};

export default TextoBreak;





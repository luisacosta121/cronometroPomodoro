import { Image } from "react-native";
import EstilosTexto from "../Estilos/EstilosTexto.js";

/*
  Image: MUESTRA UNA IMAGEN PARA EL TouchableOpacity
  source: ES LA RUTA HACIA LA IMAGEN DEL BOTON
  style: IMPORTA LOS ESTILOS PARA EL BOTON DESDE EL COMPONENTE EstiloBoton.js
  RESUMEN: ES UNA IMAGEN REUTILIZABLE A SER USADA POR QUIEN LA INVOQUE
*/

const TextoPomodoro = () => {
  return (
    <Image
      source={require("../../assets/textos/pomodoroText.png")}
      style={EstilosTexto.imagen}
    />
  );
};

export default TextoPomodoro;

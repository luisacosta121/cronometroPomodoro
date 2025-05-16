import { Image } from "react-native";
import EstilosTexto from "../Estilos/EstilosTexto.js"

const TextoPomodoro = () => {
  return (
      <Image
        source={require("../../assets/textos/pomodoroText.png")}
        style={EstilosTexto.imagen}
      />
  );
};

export default TextoPomodoro;



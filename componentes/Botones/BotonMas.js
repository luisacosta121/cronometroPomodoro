import { TouchableOpacity, Image } from "react-native";
import EstiloBoton from "../Estilos/EstilosBoton.js";

const BotonMas = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require("../../assets/botones/botonMas.png")}
        style={EstiloBoton.imagen}
      />
    </TouchableOpacity>
  );
};

export default BotonMas;

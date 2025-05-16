import { TouchableOpacity, Image } from "react-native";
import EstiloBoton from "../Estilos/EstilosBoton.js";

const BotonMenos = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require("../../assets/botones/botonMenos.png")}
        style={EstiloBoton.imagen}
      />
    </TouchableOpacity>
  );
};

export default BotonMenos;

import { TouchableOpacity, Image } from "react-native";
import EstiloBoton from "../Estilos/EstilosBoton.js"

const BotonMas = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require("../../assets/botones/botonMas.png")}
        style={EstiloBoton.imagen}
      />
    </TouchableOpacity>
  );
};

export default BotonMas;
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import EstiloBoton from "../Estilos/EstilosBoton.js"

const BotonPause = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require("../../assets/botones/botonPause.png")}
                style={EstiloBoton.imagen}
      />
    </TouchableOpacity>
  );
};

export default BotonPause;


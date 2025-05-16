import {  TouchableOpacity, Image } from "react-native";
import EstiloBoton from "../Estilos/EstilosBoton.js"

const BotonReset = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require("../../assets/botones/botonReset.png")}
          style={EstiloBoton.imagen}
        

      />
    </TouchableOpacity>
  );
};

export default BotonReset;

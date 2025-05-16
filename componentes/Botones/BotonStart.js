import { TouchableOpacity, Image } from "react-native";
import EstiloBoton from "../Estilos/EstilosBoton.js"



const BotonStart = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require("../../assets/botones/botonStart.png")}
        style={EstiloBoton.imagen}

      
      />
    </TouchableOpacity>
  );
};

export default BotonStart;


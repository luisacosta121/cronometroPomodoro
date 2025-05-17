import { TouchableOpacity, Image } from "react-native";
import EstiloBoton from "../Estilos/EstilosBoton.js";
import { Vibration } from "react-native";

/*
  TouchableOpacity: BOTON VISUAL QUE REDUCE SU OPACIDAD AL PRESIONARLO
  Image: MUESTRA UNA IMAGEN PARA EL TouchableOpacity
  const BotonStart = ({ onPress }): onPress SE EJECUTARA AL PRESION EL BOTON
  source: ES LA RUTA HACIA LA IMAGEN DEL BOTON
  style: IMPORTA LOS ESTILOS PARA EL BOTON DESDE EL COMPONENTE EstiloBoton.js
  RESUMEN: ES UN BOTON DE IMAGEN REUTILIZABLE QUE EJECUTA UNA FUNCION (onPress) AL TOCARLO
*/

const BotonStart = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={() => { Vibration.vibrate(50); onPress(); }}>
      <Image
        source={require("../../assets/botones/botonStart.png")}
        style={EstiloBoton.imagen}
      />
    </TouchableOpacity>
  );
};

export default BotonStart;

import { TouchableOpacity, Image } from "react-native";
import EstiloBoton from "../Estilos/EstilosBoton.js";

/*
  TouchableOpacity: BOTON VISUAL QUE REDUCE SU OPACIDAD AL PRESIONARLO
  Image: MUESTRA UNA IMAGEN PARA EL TouchableOpacity
  const BotonStart = ({ onPress }): onPress SE EJECUTARA AL PRESION EL BOTON
  source: ES LA RUTA HACIA LA IMAGEN DEL BOTON
  style: IMPORTA LOS ESTILOS PARA EL BOTON DESDE EL COMPONENTE EstiloBoton.js
  RESUMEN: ES UN BOTON DE IMAGEN REUTILIZABLE QUE EJECUTA UNA FUNCION (onPress) AL TOCARLO
*/

const BotonPause = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require("../../assets/botones/botonPause.png")}
        style={EstiloBoton.imagen}
      />
    </TouchableOpacity>
  );
};

export default BotonPause;

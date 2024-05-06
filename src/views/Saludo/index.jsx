import Boton from "../../components/Boton"

const Saludo = (props) =>{
  return(
      <div>
        <h1 style={{textDecoration: "underline", color:"darkgreen"}}>Hello hello</h1>
        <h2>Cómo anda todo {props.nombre}?</h2>
        <Boton/>
      </div>

)};

export default Saludo;
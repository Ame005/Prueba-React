import { Fragment } from 'react';
import './App.css';
import Inicio from "./views/Inicio"
import Saludo from "./views/Saludo"
// import Contacto from "./views/Contacto"

const App = () => {
  /*Lo ideal es que en App.jsx solo esten las tags de las otras páginas*/
  /*Si yo tengo js que no tiene que retornar nada, puedo sacar el return, y pongo directo los tags a las otras pags. También hay que cambiar el function a const*/
  /*<Fragment> también se puede poner como <> y al final </>*/
  const nombre = "Juan";
  return(
  <>
    <Saludo nombre={nombre}/>{/*así se pasan los props por "parámetro"*/}
    <Inicio nombre={nombre}/>
  </>
  )};

export default App;

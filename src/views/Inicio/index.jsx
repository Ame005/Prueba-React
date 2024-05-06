const Inicio = (props) => (
    <>    
        <h1>Estoy en Inicio {props.nombre}. Funciono. Eureka!</h1>
        <button onClick={() => alert("Hola")}></button>
    </>
);

export default Inicio;
import React from 'react'; // Importa React desde la librería de React

// Define y exporta el componente funcional 'FourthComponent'
export const FourthComponent = () => {

  // Define la función 'handleClicked' que se ejecuta cuando se hace clic en el botón
  const handleClicked = (e) => {
    alert("Has hecho click al botón!!"); // Muestra una alerta cuando se hace clic en el botón
  }

  // Define la función 'handleDoubleClicked' que se ejecuta cuando se hace doble clic en el botón
  const handleDoubleClicked = (e) => {
    alert("Has hecho doble click al botón"); // Muestra una alerta cuando se hace doble clic en el botón
  }

  // Define la función 'handleMouseEnter' que se ejecuta cuando el mouse entra en la caja
  const handleMouseEnter = (e) => {
    console.log("Has entrado a mi caja con el Mouse!! "); // Muestra un mensaje en la consola cuando el mouse entra en la caja
  }

  // Define la función 'handleMouseLeave' que se ejecuta cuando el mouse sale de la caja
  const handleMouseLeave = (e) => {
    console.log("Has salido de mi caja!! "); // Muestra un mensaje en la consola cuando el mouse sale de la caja
  }

  // Define una función 'handleMouse' que se ejecuta tanto para entrar como para salir de la caja con una alerta
  const handleMouse = (e, action) => {
    alert(`Has ${action}  la caja`); // Muestra una alerta cuando el mouse entra o sale de la caja
  }

  // Define una función 'handleMouseCl' que se ejecuta tanto para entrar como para salir de la caja con un mensaje en la consola
  const handleMouseCl = (e, action) => {
    console.log(`Has ${action}  la caja`); // Muestra un mensaje en la consola cuando el mouse entra o sale de la caja
  }

  // Define la función 'insideInput' que se ejecuta cuando el input recibe el foco
  const insideInput = (e) => {
    console.log("Estás dentro del input, escribe tu nombre!!"); // Muestra un mensaje en la consola cuando el input recibe el foco
  }

  // Define la función 'outsideInput' que se ejecuta cuando el input pierde el foco
  const outsideInput = (e) => {
    console.log("Estás FUERA del input, Adiós!!"); // Muestra un mensaje en la consola cuando el input pierde el foco
  }

  // El componente retorna un bloque JSX que se renderizará en la interfaz de usuario
  return (
    <div>
        <h1>Eventos en React</h1> {/* Título del componente */}
        
        {/* Evento Click */}
        <div>
          <button onClick={() => {
              console.log("Hola, soy un evento Click!!"); // Muestra un mensaje en la consola cuando se hace clic en el botón
          }}>Haz Click!!</button>
        </div>
        <div>
          <button onClick={handleClicked}>Aquí también haz Click!!</button> {/* Ejecuta la función 'handleClicked' cuando se hace clic en el botón */}
        </div>

        {/* Evento Doble Click */}
        <div>
          <button onDoubleClick={handleDoubleClicked}>Haz doble click!!</button> {/* Ejecuta la función 'handleDoubleClicked' cuando se hace doble clic en el botón */}
        </div>

        {/* Evento Mouse Enter y Mouse Leave */}
        <hr />
        <div id="box">
          <div id="box1"
            onMouseEnter={handleMouseEnter} // Ejecuta la función 'handleMouseEnter' cuando el mouse entra en la caja
            onMouseLeave={handleMouseLeave} // Ejecuta la función 'handleMouseLeave' cuando el mouse sale de la caja
          >
            <p>Pasa el Mouse por encima!!!</p>
          </div>
          <div id="box2"
            onMouseEnter={e => handleMouse(e, "entrado a")} // Ejecuta la función 'handleMouse' con la acción "entrado a" cuando el mouse entra en la caja
            onMouseLeave={e => handleMouse(e, "salido de")} // Ejecuta la función 'handleMouse' con la acción "salido de" cuando el mouse sale de la caja
          >
            <p>Pasa el Mouse por encima!!!</p>
          </div>
          <div id="box3"
            onMouseEnter={e => handleMouseCl(e, "entrado a")} // Ejecuta la función 'handleMouseCl' con la acción "entrado a" cuando el mouse entra en la caja
            onMouseLeave={e => handleMouseCl(e, "salido de")} // Ejecuta la función 'handleMouseCl' con la acción "salido de" cuando el mouse sale de la caja
          >
            <p>Pasa el Mouse por encima!!!</p>
          </div>
        </div>
        
        {/* Evento Focus y Blur se usan en el input */}
        <div className='mt-3'>
          <input type="text"
            onFocus={insideInput} // Ejecuta la función 'insideInput' cuando el input recibe el foco
            onBlur={outsideInput} // Ejecuta la función 'outsideInput' cuando el input pierde el foco
            placeholder='Escribe tu nombre' // Placeholder del input
          />
        </div>
    </div>
  )
}

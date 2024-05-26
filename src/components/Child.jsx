import React from 'react'; // Importa React desde la librería de React

// Define y exporta el componente funcional 'Child'
export const Child = ({ name, setName, addMessage }) => {

  // Define una función 'sendMessage' que llama a 'addMessage' con un mensaje específico
  const sendMessage = () => {
    addMessage("Este es el mensaje del HIJO"); // Llama a 'addMessage' pasando un mensaje como argumento
  }

  // Define una función 'changeName' que llama a 'setName' con un nuevo nombre
  const changeName = () => {
    setName("Nuevo Nombre Hijo"); // Llama a 'setName' pasando el nuevo nombre como argumento
  }

  // El componente retorna un bloque JSX que se renderizará en la interfaz de usuario
  return (
    <div> {/* Un contenedor div para el contenido del componente */}
      {name} {/* Muestra el valor de la prop 'name' */}
      <div>
        <button
          onClick={ sendMessage } // Ejecuta la función 'sendMessage' cuando se hace clic en el botón
        >
          Enviar Mensaje {/* Texto que se muestra dentro del botón */}
        </button>
        <button 
          onClick={ changeName } // Ejecuta la función 'changeName' cuando se hace clic en el botón
        >
          Cambiar Nombre {/* Texto que se muestra dentro del botón */}
        </button>
      </div>
    </div>
  )
}



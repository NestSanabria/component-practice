import React from 'react';

export const MyComponent = () => {
  // Definición de variables y objetos
  const name = "Inés María Oliveros";
  const repository = "https://github.com/inesmariao/component-practice";

  const student = {
    name: "Nestor",
    lastName: "Sanabria",
    mobile: "******2625",
    linkRepository: "https://github.com/NestSanabria/component-practice "
  };

  // Mostrar el objeto 'student' en la consola
  console.log(student);

  return (
    <div>
      <hr />
      
      {/* Título para los temas de React */}
      <h1>Temas vistos de React</h1>
      
      {/* Lista de temas de React */}
      <ul className="list">
        <li className="list-item">Componentes</li>
        <li className="list-item">Eventos</li>
        <li className="list-item">Estados - Hooks</li>
        <li className="list-item">Comunicación</li>
      </ul>
      
      {/* Separador */}
      <hr />
      
      {/* Datos del docente */}
      <h2>Datos del Docente</h2>
      <p>Nombre: {name}</p>
      <p>Repositorio:</p>
      <p><a href={repository} target="_blank" rel="noopener noreferrer">{repository}</a></p>
      
      {/* Separador */}
      <hr />
      
      {/* Datos del estudiante */}
      <h2>Datos del estudiante</h2>
      <p>Nombre: {student.name}</p>
      <p>Apellido: {student.lastName}</p>
      <p>Celular: {student.mobile}</p>
      <p>Link repositorio:</p>
      <p><a href={student.linkRepository} target="_blank" rel="noopener noreferrer">{student.linkRepository}</a></p>
    </div>
  );
};

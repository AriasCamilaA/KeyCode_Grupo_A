import React from 'react'; // Importamos React
import ReactDOM from 'react-dom'; // Importamos ReactDOM para renderizar la app
import './index.css'; // Importamos los estilos de Tailwind
import App from './App'; // Importamos el componente principal de la aplicación

// Renderizamos la aplicación dentro del elemento con id "root"
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Componente principal */}
  </React.StrictMode>,
  document.getElementById('root')
);
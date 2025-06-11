// import React, { useEffect, useState } from 'react'; // Importamos React y los hooks useState y useEffect
// import axios from 'axios'; // Importamos axios para hacer peticiones HTTP

// // Componente RecipeDetail que muestra los detalles de una receta
// function RecipeDetail({ recipe }) {
//   const [details, setDetails] = useState(null); // Estado para almacenar los detalles de la receta

//   // Hook useEffect para obtener los detalles de la receta cuando cambia la receta seleccionada
//   useEffect(() => {
//     if (recipe) {
//       // Petición a la API para obtener los detalles de la receta seleccionada
//       axios
//         .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`)
//         .then((response) => {
//           // Guardamos los detalles de la receta en el estado
//           setDetails(response.data.meals[0]); 
//         });
//     }
//   }, [recipe]); // Este efecto se ejecuta cada vez que cambia la receta seleccionada

//   // Si no hay detalles aún, no mostramos nada
//   if (!details) {
//     return null;
//   }

//   return (
//     <div>
//       {/* Nombre del plato */}
//       <h2 className="text-lg font-bold mb-4">{details.strMeal}</h2> 
//       {/* Instrucciones para preparar el plato */}
//       <p>{details.strInstructions}</p> 
//     </div>
//   );
// }

// export default RecipeDetail; // Exportamos el componente RecipeDetail

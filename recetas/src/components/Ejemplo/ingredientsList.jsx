// import React from 'react'; // Importamos React

// // Componente IngredientsList que muestra la lista de ingredientes
// function IngredientsList({ recipe }) {
//   return (
//     <div>
//       {/* Título de la sección de ingredientes */}
//       <h2 className="text-lg font-bold mb-4">Ingredientes</h2> 
      
//       {/* Mostramos la lista de ingredientes en formato de lista */}
//       <ul className="list-disc ml-5">
//         {/* Recorremos los ingredientes de la receta */}
//         {[...Array(20)].map((_, i) => {
//           const ingredient = recipe[`strIngredient${i + 1}`]; // Obtenemos el nombre del ingrediente
//           const measure = recipe[`strMeasure${i + 1}`]; // Obtenemos la medida del ingrediente
//           return ingredient ? (
//             // Si el ingrediente existe, lo mostramos en la lista
//             <li key={i}>
//               {ingredient} - {measure}
//             </li>
//           ) : null;
//         })}
//       </ul>
//       {/* Aquí podrías añadir más información, como alertas de alergias o contenido calórico */}
//     </div>
//   );
// }

// export default IngredientsList; // Exportamos el componente IngredientsList

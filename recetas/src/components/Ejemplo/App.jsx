// import React, { useState } from 'react'; // Importamos React y el hook useState
// import Sidebar from './components/Sidebar'; // Importamos el componente de la barra lateral
// import RecipesList from './components/RecipesList'; // Importamos el componente que muestra las recetas
// import RecipeDetail from './components/RecipeDetail'; // Importamos el componente que muestra los detalles de una receta
// import IngredientsList from './components/IngredientsList'; // Importamos el componente que muestra la lista de ingredientes

// function App() {
//   // Estado para almacenar la receta seleccionada
//   const [selectedRecipe, setSelectedRecipe] = useState(null); 
  
//   // Estado para almacenar el ingrediente seleccionado
//   const [selectedIngredient, setSelectedIngredient] = useState(null); 

//   return (
//     // Estructura principal de la aplicación
//     <div className="flex h-screen"> 
//       {/* Barra lateral donde seleccionamos un ingrediente */}
//       <Sidebar setSelectedIngredient={setSelectedIngredient} /> 
      
//       {/* Contenedor principal con las secciones */}
//       <div className="flex flex-col flex-1 p-4"> 
//         <div className="grid grid-cols-3 gap-4"> 
//           {/* Primera columna: lista de recetas */}
//           <div className="col-span-1"> 
//             {/* Mostramos la lista de recetas filtradas por ingrediente */}
//             <RecipesList selectedIngredient={selectedIngredient} setSelectedRecipe={setSelectedRecipe} /> 
//           </div>
          
//           {/* Segunda columna: detalles de la receta */}
//           <div className="col-span-1"> 
//             {/* Si hay una receta seleccionada, mostramos sus detalles */}
//             {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />} 
//           </div>
          
//           {/* Tercera columna: lista de ingredientes */}
//           <div className="col-span-1"> 
//             {/* Si hay una receta seleccionada, mostramos los ingredientes */}
//             {selectedRecipe && <IngredientsList recipe={selectedRecipe} />} 
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App; // Exportamos el componente App

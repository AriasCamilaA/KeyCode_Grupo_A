import React, { useState, useEffect } from 'react'; // Importamos React y los hooks useState y useEffect
import axios from 'axios'; // Importamos axios para hacer peticiones HTTP

// Componente RecipesList que muestra las recetas según el ingrediente seleccionado
function RecipesList({ selectedIngredient, setSelectedRecipe }) {
  const [recipes, setRecipes] = useState([]); // Estado para almacenar la lista de recetas

  // Hook useEffect para realizar la petición a la API cuando cambie el ingrediente seleccionado
  useEffect(() => {
    if (selectedIngredient) {
      // Hacemos una petición a la API de TheMealDB filtrando por ingrediente
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`)
        .then((response) => {
          // Guardamos las recetas obtenidas en el estado
          setRecipes(response.data.meals); 
        });
    }
  }, [selectedIngredient]); // Este efecto se ejecuta cada vez que cambia el ingrediente seleccionado

  return (
    <div>
      {/* Título de la lista de recetas */}
      <h2 className="font-bold text-lg mb-4">Recetas</h2> 
      
      {/* Mostramos las recetas en una grilla */}
      <div className="grid grid-cols-1 gap-4">
        {/* Recorremos las recetas y mostramos cada una */}
        {recipes && recipes.map((recipe) => (
          <div
            key={recipe.idMeal} // Clave única para cada receta
            className="bg-gray-200 p-4 rounded-lg cursor-pointer"
            // Cuando hacemos clic en una receta, actualizamos la receta seleccionada
            onClick={() => setSelectedRecipe(recipe)} 
          >
            {/* Imagen de la receta */}
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            {/* Nombre de la receta */}
            <h3 className="text-lg font-semibold">{recipe.strMeal}</h3> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipesList; // Exportamos el componente RecipesList
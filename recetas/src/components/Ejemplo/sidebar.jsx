import React from 'react'; // Importamos React

// Lista de ingredientes que mostramos en la barra lateral
const ingredients = ['Chicken', 'Beef', 'Pork', 'Vegetarian']; 

// Componente Sidebar
function Sidebar({ setSelectedIngredient }) {
  return (
    // Contenedor de la barra lateral
    <div className="w-1/6 bg-gray-100 p-4"> 
      {/* Título de la barra lateral */}
      <h2 className="font-bold text-lg mb-4">Ingredientes</h2> 
      
      {/* Mostramos los botones para seleccionar cada ingrediente */}
      <div className="space-y-2">
        {ingredients.map((ingredient) => (
          <button
            key={ingredient} // La clave debe ser única para cada ingrediente
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
            // Al hacer clic, seleccionamos el ingrediente y actualizamos el estado
            onClick={() => setSelectedIngredient(ingredient)} 
          >
            {ingredient} {/* Mostramos el nombre del ingrediente */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar; // Exportamos el componente Sidebar

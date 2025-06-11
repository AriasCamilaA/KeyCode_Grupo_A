import React from 'react';
import { useRecipeById } from '../hooks/useRecipeById';
import { useParams } from 'react-router-dom';

export const Ingredientes = () => {
  const {IdReceta} = useParams()
  const { recipe, error, loading } = useRecipeById(IdReceta);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>No se encontró ninguna receta</p>;

  return (
    <div className="flex flex-col flex-grow overflow-auto p-4">
      <h2 className="text-center text-4xl font-bold mb-4">{recipe?.name}</h2>
      <div className='bg-amber-100 p-6 rounded-lg shadow-lg'>
      <h3 className="text-xl font-semibold mb-2">Ingredientes</h3>
      <ul className='ist-disc list-inside space-y-3 text-gray-900'>
        {recipe?.ingredients.map((ingredient, index) => (
          <li key={index} className="pl-1">
            {ingredient}       --------------------        {recipe.measures[index]}
          </li>
            ))}
      </ul>
      </div>
    </div>
  );
};


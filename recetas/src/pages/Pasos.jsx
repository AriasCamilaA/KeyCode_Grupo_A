import React from 'react';
import { useRecipeById } from '../hooks/useRecipeById';
import { useParams } from 'react-router-dom';

export const Pasos = () => {
  const { IdReceta } = useParams()
  const { recipe, error, loading } = useRecipeById(IdReceta);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>No se encontró ninguna receta</p>;

  return (
    // <div>
    //   <h2 className="text-center text-4xl font-bold">{recipe?.name}</h2>
    //   <p className='flex items-center w-screen h-screen text-center italic p-4 w-screen h-screen text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'><strong>Pasos:</strong> {recipe?.instructions}</p>
    // </div>
    <div>
  <h2 className="text-center text-3xl font-bold mb-6">{recipe?.name}</h2>
  <div className="bg-amber-100 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-2">Pasos:</h3>
    <p className="text-base leading-relaxed italic text-gray-800 whitespace-pre-line">
      {recipe?.instructions}
    </p>
  </div>
</div>

  );
};

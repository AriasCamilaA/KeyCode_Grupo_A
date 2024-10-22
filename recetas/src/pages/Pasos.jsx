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
    <div>
      <h2 className="text-center text-4xl font-bold">{recipe?.name}</h2>
      <p className='flex items-center w-screen h-screen text-center italic p-4 w-screen h-screen text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'><strong>Pasos:</strong> {recipe?.instructions}</p>
    </div>
  );
};

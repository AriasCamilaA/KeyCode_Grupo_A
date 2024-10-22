import React from 'react';
import { useRecipeById } from '../hooks/useRecipeById';
import { useParams } from 'react-router-dom';

export const Descripcion = () => {
  const { IdReceta } = useParams()
  const { recipe, error, loading } = useRecipeById(IdReceta);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>No se encontró ninguna receta</p>;

  return (
    <div style={{backgroundColor:'#ffb700'}} className='w-screen h-screen flex items-center justify-center'>
    <div class='flex flex-col items-center justify-center w-screen h-screen p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600'>
      <h2 className='text-center text-4xl font-bold mb-4'>{recipe?.name}</h2>
      <img src={recipe?.image} alt={recipe?.name} className='max-w-full max-h-full' />
      <p><strong>Categoría:</strong> {recipe?.category}</p>
      <p><strong>Área:</strong> {recipe?.area}</p>
      <p><strong>Video:</strong> <a href={recipe?.youtube} target="_blank" rel="noopener noreferrer">Ver en YouTube</a></p>

    </div>
    </div>
  );
};

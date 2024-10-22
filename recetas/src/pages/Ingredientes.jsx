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
    <div>
      <h2 className="text-center text-4xl font-bold" >{recipe?.name}</h2>
      
      <h3 className="text-center text-4xl font-bold">Ingredientes</h3>
      <ul className='w-screen h-screen text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
        {recipe?.ingredients.map((ingredient, index) => (
          <li className='w-0% px-15 py-8 border-b border-gray-200 rounded-t-lg dark:border-gray-600' key={index}>
            {ingredient} - {recipe?.measures[index]}
          </li>
        ))}
      </ul>
    </div>
  );
};


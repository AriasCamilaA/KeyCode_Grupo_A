import React, { useState, useEffect } from 'react';
import { useRecipeById } from '../hooks/useRecipeById';
import { useParams } from 'react-router-dom';

export const Descripcion = () => {
  const { IdReceta } = useParams();
  const { recipe, error, loading } = useRecipeById(IdReceta);

  // Estado para saber si está en favoritos
  const [esFavorito, setEsFavorito] = useState(false);

  useEffect(() => {
    if (!recipe) return;
    // Revisar si la receta está en favoritos en LocalStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const existe = favoritos.some((r) => r.id === recipe.id);
    setEsFavorito(existe);
  }, [recipe]);

  const toggleFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (esFavorito) {
      // Quitar de favoritos
      const nuevosFavoritos = favoritos.filter((r) => r.id !== recipe.id);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
      setEsFavorito(false);
    } else {
      // Agregar a favoritos
      favoritos.push(recipe);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
      setEsFavorito(true);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>No se encontró ninguna receta</p>;

  return (
    <div className="w-screen h-screen bg-amber-100 flex flex-col items-center justify-start px-8 py-10 overflow-auto">
      <h2 className="text-3xl font-bold text-center mb-10">{recipe?.name}</h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex justify-center">
          <img
            src={recipe?.image}
            alt={recipe?.name}
            className="w-[400px] h-[400px] object-cover rounded-md shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-4 text-lg">
          <p>{recipe?.description || 'Esta receta es una deliciosa preparación ideal para disfrutar en familia o con amigos.'}</p>
          <p><strong>Categoría:</strong> {recipe?.category}</p>
          <p><strong>Área:</strong> {recipe?.area}</p>
          <p>
            <strong>Video:</strong>{' '}
            <a href={recipe?.youtube} target="_blank" rel="noopener noreferrer" className="underline text-blue-700">
              Ver en YouTube
            </a>
          </p>
          

          {/* Botón para agregar/quitar favorito */}
          <button
            onClick={toggleFavorito}
            className={`mt-4 px-4 py-2 rounded ${
              esFavorito ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {esFavorito ? '❤️ Quitar de Favoritos' : '🤍 Agregar a Favoritos'}
          </button>
        </div>
      </div>
    </div>
  );
};

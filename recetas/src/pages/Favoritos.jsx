import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Favoritos = () => {
    const [favoritosIds, setFavoritosIds] = useState([]);
    const [recetasFavoritas, setRecetasFavoritas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('favoritos')) || [];
        setFavoritosIds(favs);
    }, []);

    useEffect(() => {
        async function fetchFavoritos() {
            setLoading(true);
            const recetas = await Promise.all(
                favoritosIds.map(id => fetchRecipe(id))
            );
            setRecetasFavoritas(recetas.filter(Boolean)); // Filtra nulls si alguna receta falla
            setLoading(false);
        }

        if (favoritosIds.length > 0) {
            fetchFavoritos();
        } else {
            setRecetasFavoritas([]);
            setLoading(false);
        }
    }, [favoritosIds]);

    // ✅ Función para eliminar una receta de favoritos
    const eliminarDeFavoritos = (id) => {
        const nuevosFavoritos = favoritosIds.filter(favId => favId !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
        setFavoritosIds(nuevosFavoritos); // Esto actualiza el estado y recarga
    };

    if (loading) return <p>Cargando recetas favoritas...</p>;
    if (recetasFavoritas.length === 0) return <p>No tienes recetas favoritas aún.</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Tus Recetas Favoritas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recetasFavoritas.map((receta) => (
                    <div key={receta.id} className="border rounded shadow p-4">
                        <img src={receta.image} alt={receta.name} className="w-full h-40 object-cover rounded" />
                        <h3 className="mt-2 font-semibold">{receta.name}</h3>
                        <Link to={`/Descripcion/${receta.id}`} className="text-blue-500 underline">
                            Ver Detalles
                        </Link>
                        <button
                            onClick={() => eliminarDeFavoritos(receta.id)}
                            className="text-red-500 mt-2 block"
                        >
                            Quitar de Favoritos
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ✅ Función que obtiene la receta desde la API
async function fetchRecipe(id) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (!response.ok) throw new Error('Error en la respuesta');
        const data = await response.json();
        const meal = data.meals?.[0];
        if (!meal) return null;
        return {
            id: meal.idMeal,
            name: meal.strMeal,
            image: meal.strMealThumb,
        };
    } catch (error) {
        console.error('Error al obtener receta', error);
        return null;
    }
}

import { useState, useEffect } from "react";
import {
  getCitiesAsync,
  updateCityAsync,
  deleteCityAsync,
  createCityAsync,
} from "@/services/cityService";

const useCities = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await getCitiesAsync();
        setCities(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const addCity = async (newCity) => {
    try {
      const data = await createCityAsync(newCity);
      newCity.id = data.id;
      setCities((prevCities) => [...prevCities, newCity]);
    } catch (error) {
      console.error("Erro ao adicionar cidade:", error);
      throw error;
    }
  };

  const updateCity = async (cityId, updatedCity) => {
    try {
      await updateCityAsync(cityId, updatedCity);
      setCities((prevCities) =>
        prevCities.map((city) =>
          city.id === cityId ? { ...city, ...updatedCity } : city
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar cidade:", error);
      throw error;
    }
  };

  const deleteCity = async (cityId) => {
    try {
      await deleteCityAsync(cityId);
      setCities((prevCities) =>
        prevCities.filter((city) => city.id !== cityId)
      );
    } catch (error) {
      console.error("Erro ao excluir cidade:", error);
      throw error;
    }
  };

  return { cities, loading, error, addCity, updateCity, deleteCity };
};

export default useCities;

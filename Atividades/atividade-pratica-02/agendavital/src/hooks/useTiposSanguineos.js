import { useState, useEffect } from "react";
import {
  getTiposSanguineosAsync,
  updateTipoSanguineoAsync,
  deleteTipoSanguineoAsync,
  createTipoSanguineoAsync,
} from "@/services/tipoSanguineoService";

const useTiposSanguineos = () => {
  const [tipoSanguineos, setTiposSanguineos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTiposSanguineos = async () => {
      try {
        const data = await getTiposSanguineosAsync();
        setTiposSanguineos(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTiposSanguineos();
  }, []);

  const addTipoSanguineo = async (newTipoSanguineo) => {
    try {
      const data = await createTipoSanguineoAsync(newTipoSanguineo);
      newTipoSanguineo.id = data.id;
      setTiposSanguineos((prevTiposSanguineos) => [...prevTiposSanguineos, newTipoSanguineo]);
    } catch (error) {
      console.error("Erro ao adicionar Tipo Sanguineo:", error);
      throw error;
    }
  };

  const updateTipoSanguineo = async (tipoSanguineoId, updatedTipoSanguineo) => {
    try {
      await updateTipoSanguineoAsync(tipoSanguineoId, updatedTipoSanguineo);
      setTiposSanguineos((prevTiposSanguineos) =>
        prevTiposSanguineos.map((tipoSanguineo) =>
          tipoSanguineo.id === tipoSanguineoId
            ? { ...tipoSanguineo, ...updatedTipoSanguineo }
            : tipoSanguineo
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar Tipo Sanguineo:", error);
      throw error;
    }
  };

  const deleteTipoSanguineo = async (tipoSanguineoId) => {
    try {
      await deleteTipoSanguineoAsync(tipoSanguineoId);
      setTiposSanguineos((prevTiposSanguineos) =>
        prevTiposSanguineos.filter((tipoSanguineo) => tipoSanguineo.id !== tipoSanguineoId)
      );
    } catch (error) {
      console.error("Erro ao excluir Tipo Sanguineo:", error);
      throw error;
    }
  };

  return {
    tipoSanguineos,
    loading,
    error,
    addTipoSanguineo,
    updateTipoSanguineo,
    deleteTipoSanguineo,
  };
};

export default useTiposSanguineos;

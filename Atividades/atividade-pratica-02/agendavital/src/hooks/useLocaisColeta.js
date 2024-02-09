import { useState, useEffect } from "react";
import {
  getLocaisColetaAsync,
  updateLocalColetaAsync,
  deleteLocalColetaAsync,
  createLocalColetaAsync,
} from "@/services/localColetaService";

const useLocaisColeta = () => {
  const [locaisColeta, setLocaisColeta] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocaisColeta = async () => {
      try {
        const data = await getLocaisColetaAsync();
        setLocaisColeta(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchLocaisColeta();
  }, []);

  const addLocalColeta = async (newLocalColeta) => {
    try {
      const data = await createLocalColetaAsync(newLocalColeta);
      newLocalColeta.id = data.id;
      setLocaisColeta((prevLocaisColeta) => [
        ...prevLocaisColeta,
        newLocalColeta,
      ]);
    } catch (error) {
      console.error("Erro ao adicionar local de coleta:", error);
      throw error;
    }
  };

  const updateLocalColeta = async (localColetaId, updatedLocalColeta) => {
    try {
      await updateLocalColetaAsync(localColetaId, updatedLocalColeta);
      setLocaisColeta((prevLocaisColeta) =>
        prevLocaisColeta.map((localColeta) =>
          localColeta.id === localColetaId
            ? { ...localColeta, ...updatedLocalColeta }
            : localColeta
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar local de coleta:", error);
      throw error;
    }
  };

  const deleteLocalColeta = async (localColetaId) => {
    try {
      await deleteLocalColetaAsync(localColetaId);
      setLocaisColeta((prevLocaisColeta) =>
        prevLocaisColeta.filter(
          (localColeta) => localColeta.id !== localColetaId
        )
      );
    } catch (error) {
      console.error("Erro ao excluir local de coleta:", error);
      throw error;
    }
  };

  return {
    locaisColeta,
    loading,
    error,
    addLocalColeta,
    updateLocalColeta,
    deleteLocalColeta,
  };
};

export default useLocaisColeta;

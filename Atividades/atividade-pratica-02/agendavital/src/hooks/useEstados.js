import { useState, useEffect } from "react";
import {
  getEstadosAsync,
  updateEstadoAsync,
  deleteEstadoAsync,
  createEstadoAsync,
} from "@/services/estadoService";

const useEstados = () => {
  const [estados, setEstados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEstados = async () => {
      try {
        const data = await getEstadosAsync();
        setEstados(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchEstados();
  }, []);

  const addEstado = async (newEstado) => {
    try {
      const data = await createEstadoAsync(newEstado);
      newEstado.id = data.id;
      setEstados((prevEstados) => [...prevEstados, newEstado]);
    } catch (error) {
      console.error("Erro ao adicionar estado:", error);
      throw error;
    }
  };

  const updateEstado = async (estadoId, updatedEstado) => {
    try {
      await updateEstadoAsync(estadoId, updatedEstado);
      setEstados((prevEstados) =>
        prevEstados.map((estado) =>
          estado.id === estadoId ? { ...estado, ...updatedEstado } : estado
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar estado:", error);
      throw error;
    }
  };

  const deleteEstado = async (estadoId) => {
    try {
      await deleteEstadoAsync(estadoId);
      setEstados((prevEstados) =>
        prevEstados.filter((estado) => estado.id !== estadoId)
      );
    } catch (error) {
      console.error("Erro ao excluir estado:", error);
      throw error;
    }
  };

  return { estados, loading, error, addEstado, updateEstado, deleteEstado };
};

export default useEstados;

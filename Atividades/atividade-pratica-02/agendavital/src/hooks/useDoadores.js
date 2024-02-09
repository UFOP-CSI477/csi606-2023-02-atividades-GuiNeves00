import { useState, useEffect } from "react";
import {
  getDoadoresAsync,
  updateDoadorAsync,
  deleteDoadorAsync,
  createDoadorAsync,
} from "@/services/doadorService";

const useDoadores = () => {
  const [doadores, setDoadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoadores = async () => {
      try {
        const data = await getDoadoresAsync();
        setDoadores(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDoadores();
  }, []);

  const addDoador = async (newDoador) => {
    try {
      const data = await createDoadorAsync(newDoador);
      newDoador.id = data.id;
      setDoadores((prevDoadores) => [...prevDoadores, newDoador]);
    } catch (error) {
      console.error("Erro ao adicionar doador:", error);
      throw error;
    }
  };

  const updateDoador = async (doadorId, updatedDoador) => {
    try {
      await updateDoadorAsync(doadorId, updatedDoador);
      setDoadores((prevDoadores) =>
        prevDoadores.map((doador) =>
          doador.id === doadorId
            ? { ...doador, ...updatedDoador }
            : doador
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar doador:", error);
      throw error;
    }
  };

  const deleteDoador = async (doadorId) => {
    try {
      await deleteDoadorAsync(doadorId);
      setDoadores((prevDoadores) =>
        prevDoadores.filter((doador) => doador.id !== doadorId)
      );
    } catch (error) {
      console.error("Erro ao excluir doador:", error);
      throw error;
    }
  };

  return {
    doadores,
    loading,
    error,
    addDoador,
    updateDoador,
    deleteDoador,
  };
};

export default useDoadores;

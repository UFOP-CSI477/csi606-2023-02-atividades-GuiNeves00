import { useState, useEffect } from "react";
import {
  getDoacoesAsync,
  updateDoacaoAsync,
  deleteDoacaoAsync,
  createDoacaoAsync,
} from "@/services/doacaoService";

const useDoacoes = () => {
  const [doacoes, setDoacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoacoes = async () => {
      try {
        const data = await getDoacoesAsync();
        setDoacoes(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDoacoes();
  }, []);

  const addDoacao = async (newDoacoes) => {
    try {
      const data = await createDoacaoAsync(newDoacoes);
      newDoacoes.id = data.id;
      setDoacoes((prevDoacoes) => [
        ...prevDoacoes,
        newDoacoes,
      ]);
    } catch (error) {
      console.error("Erro ao adicionar doação:", error);
      throw error;
    }
  };

  const updateDoacao = async (doacaoId, updatedDoacao) => {
    try {
      await updateDoacaoAsync(doacaoId, updatedDoacao);
      setDoacoes((prevDoacoes) =>
        prevDoacoes.map((doacao) =>
          doacao.id === doacaoId
            ? { ...doacao, ...updatedDoacao }
            : doacao
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar doação:", error);
      throw error;
    }
  };

  const deleteDoacao = async (doacaoId) => {
    try {
      await deleteDoacaoAsync(doacaoId);
      setDoacoes((prevDoacoes) =>
        prevDoacoes.filter(
          (doacao) => doacao.id !== doacaoId
        )
      );
    } catch (error) {
      console.error("Erro ao excluir doação:", error);
      throw error;
    }
  };

  return {
    doacoes,
    loading,
    error,
    addDoacao,
    updateDoacao,
    deleteDoacao,
  };
};

export default useDoacoes;

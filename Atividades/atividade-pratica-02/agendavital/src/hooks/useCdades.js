import { useState, useEffect } from "react";
import {
  getCidadesAsync,
  updateCidadeAsync,
  deleteCidadeAsync,
  createCidadeAsync,
} from "@/services/cidadeService";

const useCidades = () => {
  const [cidades, setCidades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCidades = async () => {
      try {
        const data = await getCidadesAsync();
        setCidades(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCidades();
  }, []);

  const addCidade = async (newCidade) => {
    try {
      const data = await createCidadeAsync(newCidade);
      newCidade.id = data.id;
      setCidades((prevCidades) => [...prevCidades, newCidade]);
    } catch (error) {
      console.error("Erro ao adicionar cidade:", error);
      throw error;
    }
  };

  const updateCidade = async (cidadeId, updatedCidade) => {
    try {
      await updateCidadeAsync(cidadeId, updatedCidade);
      setCidades((prevCidades) =>
        prevCidades.map((cidade) =>
          cidade.id === cidadeId ? { ...cidade, ...updatedCidade } : cidade
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar cidade:", error);
      throw error;
    }
  };

  const deleteCidade = async (cidadeId) => {
    try {
      await deleteCidadeAsync(cidadeId);
      setCidades((prevCidades) =>
        prevCidades.filter((cidade) => cidade.id !== cidadeId)
      );
    } catch (error) {
      console.error("Erro ao excluir cidade:", error);
      throw error;
    }
  };

  return { cidades, loading, error, addCidade, updateCidade, deleteCidade };
};

export default useCidades;

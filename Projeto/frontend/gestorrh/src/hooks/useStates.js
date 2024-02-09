import { useState, useEffect } from "react";
import {
  getStatesAsync,
  updateStateAsync,
  deleteStateAsync,
  createStateAsync,
} from "@/services/stateService";

const useStates = () => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const data = await getStatesAsync();
        setStates(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchStates();
  }, []);

  const addState = async (newState) => {
    try {
      const data = await createStateAsync(newState);
      newState.id = data.id;
      console.log(newState, data)
      setStates((prevStates) => [...prevStates, newState]);
    } catch (error) {
      console.error("Erro ao adicionar estado:", error);
      throw error;
    }
  };

  const updateState = async (stateId, updatedState) => {
    try {
      await updateStateAsync(stateId, updatedState);
      setStates((prevStates) =>
        prevStates.map((state) =>
          state.id === stateId ? { ...state, ...updatedState } : state
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar estado:", error);
      throw error;
    }
  };

  const deleteState = async (stateId) => {
    try {
      await deleteStateAsync(stateId);
      setStates((prevStates) =>
        prevStates.filter((state) => state.id !== stateId)
      );
    } catch (error) {
      console.error("Erro ao excluir estado:", error);
      throw error;
    }
  };

  return { states, loading, error, addState, updateState, deleteState };
};

export default useStates;

import { useState, useEffect } from 'react';
import { getDepartamentsAsync, updateDepartamentAsync, deleteDepartamentAsync, createDepartamentAsync } from '@/services/departamentService';

const useDepartaments = () => {
  const [departaments, setDepartaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartaments = async () => {
      try {
        const data = await getDepartamentsAsync();
        setDepartaments(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDepartaments();
  }, []);

  const addDepartament = async (newDepartament) => {
    try {
      const data = await createDepartamentAsync(newDepartament);
      newDepartament.id = data.id
      setDepartaments((prevDepartaments) => [...prevDepartaments, newDepartament]);
    } catch (error) {
      console.error('Erro ao adicionar departamento:', error);
      throw error;
    }
  };

  const updateDepartament = async (departamentId, updatedDepartament) => {
    try {
      await updateDepartamentAsync(departamentId, updatedDepartament);
      setDepartaments((prevDepartaments) =>
        prevDepartaments.map((departament) =>
          departament.id === departamentId ? { ...departament, ...updatedDepartament } : departament
        )
      );
    } catch (error) {
      console.error('Erro ao atualizar departamento:', error);
      throw error;
    }
  };

  const deleteDepartament = async (departamentId) => {
    try {
      await deleteDepartamentAsync(departamentId);
      setDepartaments((prevDepartaments) =>
        prevDepartaments.filter((departament) => departament.id !== departamentId)
      );
    } catch (error) {
      console.error('Erro ao excluir departamento:', error);
      throw error;
    }
  };

  return { departaments, loading, error, addDepartament, updateDepartament, deleteDepartament };
};

export default useDepartaments;

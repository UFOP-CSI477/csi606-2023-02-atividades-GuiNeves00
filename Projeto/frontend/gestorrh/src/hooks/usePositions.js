import { useState, useEffect } from 'react';
import { getPositionsAsync, updatePositionAsync, deletePositionAsync, createPositionAsync } from '@/services/positionService';

const usePositions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const data = await getPositionsAsync();
        setPositions(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  const addPosition = async (newPosition) => {
    try {
      const data = await createPositionAsync(newPosition);
      newPosition.id = data.id
      setPositions((prevPositions) => [...prevPositions, newPosition]);
    } catch (error) {
      console.error('Erro ao adicionar função:', error);
      throw error;
    }
  };

  const updatePosition = async (positionId, updatedPosition) => {
    try {
      await updatePositionAsync(positionId, updatedPosition);
      setPositions((prevPositions) =>
        prevPositions.map((position) =>
          position.id === positionId ? { ...position, ...updatedPosition } : position
        )
      );
    } catch (error) {
      console.error('Erro ao atualizar função:', error);
      throw error;
    }
  };

  const deletePosition = async (positionId) => {
    try {
      await deletePositionAsync(positionId);
      setPositions((prevPositions) =>
        prevPositions.filter((position) => position.id !== positionId)
      );
    } catch (error) {
      console.error('Erro ao excluir função:', error);
      throw error;
    }
  };

  return { positions, loading, error, addPosition, updatePosition, deletePosition };
};

export default usePositions;

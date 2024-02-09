import url from "@/http/url";

async function createPositionAsync(positionDto) {
  try {
    const response = await fetch(`${url}/funcao`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(positionDto),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

async function getPositionsAsync() {
  try {
    const response = await fetch(`${url}/funcao`);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

async function getPositionByIdAsync(positionId) {
  try {
    const response = await fetch(`${url}/funcao/${positionId}`);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

async function updatePositionAsync(positionId, positionDto) {
  try {
    const response = await fetch(`${url}/funcao/${positionId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(positionDto),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    console.log(response);
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

async function deletePositionAsync(positionId) {
  try {
    const response = await fetch(`${url}/funcao/${positionId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    console.log(response);
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

export {
  createPositionAsync,
  getPositionsAsync,
  getPositionByIdAsync,
  updatePositionAsync,
  deletePositionAsync,
};

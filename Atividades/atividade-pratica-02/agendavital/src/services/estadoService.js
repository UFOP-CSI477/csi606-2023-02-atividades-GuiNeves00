import url from "@/http/url";

async function createEstadoAsync(estadoDto) {
  try {
    const response = await fetch(`${url}/estado`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estadoDto),
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

async function getEstadosAsync() {
  try {
    const response = await fetch(`${url}/estado`);
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

async function getEstadoByIdAsync(estadoId) {
  try {
    const response = await fetch(`${url}/estado/${estadoId}`);
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

async function updateEstadoAsync(estadoId, estadoDto) {
  try {
    const response = await fetch(`${url}/estado/${estadoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estadoDto),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = response;
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

async function deleteEstadoAsync(estadoId) {
  try {
    const response = await fetch(`${url}/estado/${estadoId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = response;
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

export {
  createEstadoAsync,
  getEstadosAsync,
  getEstadoByIdAsync,
  updateEstadoAsync,
  deleteEstadoAsync,
};

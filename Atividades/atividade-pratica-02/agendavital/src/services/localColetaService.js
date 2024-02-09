import url from "@/http/url";

async function createLocalColetaAsync(localColetaDto) {
  try {
    const response = await fetch(`${url}/LocalColeta`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(localColetaDto),
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

async function getLocaisColetaAsync() {
  try {
    const response = await fetch(`${url}/LocalColeta`);
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

async function getLocalColetaByIdAsync(localColetaId) {
  try {
    const response = await fetch(`${url}/LocalColeta/${localColetaId}`);
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

async function updateLocalColetaAsync(localColetaId, localColetaDto) {
  try {
    const response = await fetch(`${url}/LocalColeta/${localColetaId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(localColetaDto),
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

async function deleteLocalColetaAsync(localColetaId) {
  try {
    const response = await fetch(`${url}/LocalColeta/${localColetaId}`, {
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
  createLocalColetaAsync,
  getLocaisColetaAsync,
  getLocalColetaByIdAsync,
  updateLocalColetaAsync,
  deleteLocalColetaAsync,
};

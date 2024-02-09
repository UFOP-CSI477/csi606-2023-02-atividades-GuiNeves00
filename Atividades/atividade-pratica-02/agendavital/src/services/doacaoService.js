import url from "@/http/url";

async function createDoacaoAsync(doacaoDto) {
  try {
    const response = await fetch(`${url}/doacao`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doacaoDto),
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

async function getDoacoesAsync() {
  try {
    const response = await fetch(`${url}/doacao`);
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

async function getDoacaoByIdAsync(doacaoId) {
  try {
    const response = await fetch(`${url}/doacao/${doacaoId}`);
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

async function updateDoacaoAsync(doacaoId, doacaoDto) {
  try {
    const response = await fetch(`${url}/doacao/${doacaoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doacaoDto),
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

async function deleteDoacaoAsync(doacaoId) {
  try {
    const response = await fetch(`${url}/doacao/${doacaoId}`, {
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
  createDoacaoAsync,
  getDoacoesAsync,
  getDoacaoByIdAsync,
  updateDoacaoAsync,
  deleteDoacaoAsync,
};

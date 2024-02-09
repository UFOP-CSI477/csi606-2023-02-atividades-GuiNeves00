import url from "@/http/url";

async function createCityAsync(cityDto) {
  try {
    const response = await fetch(`${url}/cidade`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cityDto),
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

async function getCitiesAsync() {
  try {
    const response = await fetch(`${url}/cidade`);
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

async function getCityByIdAsync(cityId) {
  try {
    const response = await fetch(`${url}/cidade/${cityId}`);
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

async function updateCityAsync(cityId, cityDto) {
  try {
    const response = await fetch(`${url}/cidade/${cityId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cityDto),
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

async function deleteCityAsync(cityId) {
  try {
    const response = await fetch(`${url}/cidade/${cityId}`, {
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
  createCityAsync,
  getCitiesAsync,
  getCityByIdAsync,
  updateCityAsync,
  deleteCityAsync,
};

const environments = import.meta.env;
const apiUrlBase = environments.VITE_API_URL_BASE;
const appId = environments.VITE_APP_ID;

const optionsFetch = {
  headers: {
    "app-id": appId,
  },
};

const getTags = async () => {
  try {
    const response = await fetch(`${apiUrlBase}/tag`, optionsFetch);

    if (!response.ok) {
      throw new Error(`Error fetching tags: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error("Error in getTags:", error);
    throw error;
  }
};

const getByTag = async (tag, numberPage = 0) => {
  try {
    const response = await fetch(
      `${apiUrlBase}/tag/${tag}/post?limit=20&page=${numberPage}`,
      optionsFetch
    );

    if (!response.ok) {
      throw new Error(`Error fetchin post by tags: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error("Error in getByTag:", error);
    throw error;
  }
};

export default { getTags, getByTag };

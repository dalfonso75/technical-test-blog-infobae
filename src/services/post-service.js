const environments = import.meta.env;
const apiUrlBase = environments.VITE_API_URL_BASE;
const appId = environments.VITE_APP_ID;

const optionsFetch = {
  headers: {
    "app-id": appId,
  },
};

const getPosts = async (numberPage = 0) => {
  try {
    const response = await fetch(
      `${apiUrlBase}/post?limit=20&page=${numberPage}`,
      optionsFetch
    );

    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error in getPosts:", error);
    throw error;
  }
};

export default { getPosts };

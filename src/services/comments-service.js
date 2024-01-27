const environments = import.meta.env;
const apiUrlBase = environments.VITE_API_URL_BASE;
const appId = environments.VITE_APP_ID;

console.log(import.meta.env.VITE_API_URL_BASE);
const optionsFetch = {
  headers: {
    "app-id": appId,
  },
};

const getCommentsByPost = async (id = "") => {
  try {
    const response = await fetch(
      `${apiUrlBase}/post/${id}/comment`,
      optionsFetch
    );

    if (!response.ok) {
      throw new Error(`Error fetching comments by post: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error("Error in getCommentsByPost:", error);
    throw error;
  }
};

export default { getCommentsByPost };

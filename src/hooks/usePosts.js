import { useCallback, useState } from "react";
import postService from "../services/post-service";

export default function usePosts() {
  const [stateGet, setStateGet] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const get = useCallback((numberPage) => {
    setStateGet({ loading: true, error: null });
    postService
      .getPosts(numberPage)
      .then((data) => {
        setStateGet({
          loading: false,
          error: null,
          data: data,
        });
      })
      .catch((err) => {
        setStateGet({ loading: false, error: err, data: null });
      });
  }, []);

  return {
    isLoading: stateGet.loading,
    hasError: stateGet.error,
    data: stateGet.data,
    success: Boolean(stateGet.data),
    get,
  };
}

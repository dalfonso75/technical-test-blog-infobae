import { useCallback, useState } from "react";
import commentsService from "../services/comments-service";

export default function useCommentsPost() {
  const [stateGet, setStateGet] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const getComments = useCallback((numberPage) => {
    setStateGet({ loading: true, error: null });
    commentsService
      .getCommentsByPost(numberPage)
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
    getComments,
  };
}

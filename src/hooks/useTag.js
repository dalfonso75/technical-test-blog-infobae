import { useCallback, useState } from "react";
import tagService from "../services/tag-service";

export default function useTag() {
  const [stateGet, setStateGet] = useState({
    loadingGet: false,
    errorGet: null,
    dataGet: null,
  });

  const get = useCallback(() => {
    setStateGet({ loadingGet: true, errorGet: null });
    tagService
      .getTags()
      .then((data) => {
        setStateGet({
          loadingGet: false,
          errorGet: null,
          dataGet: data,
        });
      })
      .catch((err) => {
        setStateGet({ loadingGet: false, errorGet: err, dataGet: null });
      });
  }, []);

  const [stateGetByTag, setStateGetByTag] = useState({
    loadingGetByTag: false,
    errorGetByTag: null,
    dataGetByTag: null,
  });

  const getByTag = useCallback((tag, numberPage) => {
    setStateGetByTag({ loadingGetByTag: true, errorGetByTag: null });
    tagService
      .getByTag(tag, numberPage)
      .then((data) => {
        setStateGetByTag({
          loadingGetByTag: false,
          errorGetByTag: null,
          dataGetByTag: data,
        });
      })
      .catch((err) => {
        setStateGetByTag({
          loadingGetByTag: false,
          errorGetByTag: err,
          dataGetByTag: null,
        });
      });
  }, []);

  return {
    isLoadingGet: stateGet.loadingGet,
    hasErrorGet: stateGet.errorGet,
    dataGet: stateGet.dataGet,
    successGet: Boolean(stateGet.dataGet),
    get,
    isLoadingGetByTag: stateGetByTag.loadingGetByTag,
    hasErrorGetByTag: stateGetByTag.errorGetByTag,
    dataGetByTag: stateGetByTag.dataGetByTag,
    successGetByTag: Boolean(stateGetByTag.dataGetByTag),
    getByTag,
  };
}

import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  return query;
};

export const useReplaceQueryParameter = () => {
  const useParameter = ({
    key: searchQueryParamName,
    value: newValue,
  }) => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    if (newValue) {
      searchParams.set(searchQueryParamName, newValue);
    } else {
      searchParams.delete(searchQueryParamName);
    }

    history.replace(`${location.pathname}?${searchParams.toString()}`);
  };

  return useParameter;
};

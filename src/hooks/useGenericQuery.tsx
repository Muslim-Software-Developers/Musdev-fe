import { AxiosResponse } from "axios";
import { useQuery, QueryFunctionContext } from "react-query";

const useGenericQuery = (
  key: string,
  func: (data?: any) => any,
  params?: object | string,
) => {
  return useQuery(key, func, {});
};

export default useGenericQuery;

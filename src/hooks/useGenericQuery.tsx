import { AxiosResponse } from 'axios'
import { useQuery, QueryFunctionContext } from "react-query"

const useGenericQuery = <T, _>(key: string, func: (data: QueryFunctionContext<string, T>) => QueryFunctionContext<[string, any]>, params?: object | string) => {

    return useQuery(key, func, { })
}


    export default useGenericQuery
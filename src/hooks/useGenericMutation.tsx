import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";

const useGenericMutation = <T, S>(
  key: string,
  func: (data: S) => Promise<AxiosResponse<T>>,
  params?: object | string,
  updater?: ((oldData: T, newData: S) => T) | undefined,
) => {
  const queryClient = useQueryClient();

  return useMutation(func, {
    onMutate: async (dataPayload) => {
      await queryClient.cancelQueries([key!, params]);

      const previousData = queryClient.getQueryData([key!, params]);

      // @ts-ignore
      queryClient.setQueryData<T>([key!, params], (oldData) => {
        // console.log("OLD DATA - NEW DATA", { oldData, dataPayload });
        return oldData && updater ? updater(oldData, dataPayload) : dataPayload;
      });

      return previousData;
    },
    onError: (err, _, context) => {
      // console.log("onError", { err, _, context });
      queryClient.setQueryData([key!, params], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries([key!, params]);
    },
  });
};

export default useGenericMutation;

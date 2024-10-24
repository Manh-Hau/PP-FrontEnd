import authApi from "@/api/auth";
import { TLoginRequest } from "@/types/auth";
import { TBaseResponse } from "@/types/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLoginMutation = () => {
    const queryClient = useQueryClient();
    return useMutation<TBaseResponse<any>, Error, TLoginRequest>({
        mutationFn: (data) => authApi.login(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
        },
    });
};

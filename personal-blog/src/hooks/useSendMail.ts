import contactApi from "@/api/contact";
import { TBaseResponse } from "@/types/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSendMailMutation = () => {
    const queryClient = useQueryClient();
    return useMutation<TBaseResponse<any>, Error, { content: string }>({
        mutationFn: (data) => contactApi.sendMail(data),
        onSuccess: () => {
            // queryClient.invalidateQueries({ queryKey: ["gift"] });
        },
    });
};

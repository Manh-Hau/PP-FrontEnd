import collectionApi from "@/api/collection";
import { TBaseResponse } from "@/types/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateCollectionItemMutation = () => {
    const queryClient = useQueryClient();
    return useMutation<TBaseResponse<any>, Error, FormData>({
        mutationFn: (data) => collectionApi.createCollectionItem(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["collection"] });
        },
    });
};

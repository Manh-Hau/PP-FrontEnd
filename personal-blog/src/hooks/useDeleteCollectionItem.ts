import collectionApi from "@/api/collection";
import { TBaseResponse } from "@/types/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCollectionItemMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<TBaseResponse<any>, Error, string>({
        mutationFn: (id: string) => collectionApi.deleteCollectionItem(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["collection"] });
        },
    });
};
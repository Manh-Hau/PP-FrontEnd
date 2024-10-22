
import collectionApi from "@/api/collection";
import { TBaseResponse } from "@/types/common";
import { useQuery } from "@tanstack/react-query";

export const useGetCollectionQuery = () => {
    return useQuery<TBaseResponse<any>, Error, TBaseResponse<any[]>>({
        queryKey: ["gift"],
        queryFn: () => collectionApi.getCollection(),
        refetchOnWindowFocus: false,
    });
};
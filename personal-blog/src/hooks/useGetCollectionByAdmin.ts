
import collectionApi from "@/api/collection";
import { Image } from "@/components/image-modal/ImageModal";
import { TBaseResponse } from "@/types/common";
import { useQuery } from "@tanstack/react-query";

export const useGetCollectionByAdminQuery = () => {
    return useQuery<TBaseResponse<any>, Error, TBaseResponse<{ data: Image[] }>>({
        queryKey: ["collection"],
        queryFn: () => collectionApi.getCollectionByAdmin(),
        refetchOnWindowFocus: false,
    });
};

import collectionApi from "@/api/collection";
import { ImageType } from "@/components/image-modal/ImageModal";
import { TBaseResponse } from "@/types/common";
import { useQuery } from "@tanstack/react-query";

export const useGetCollectionByAdminQuery = () => {
    return useQuery<TBaseResponse<any>, Error, TBaseResponse<{ data: ImageType[] }>>({
        queryKey: ["collection"],
        queryFn: () => collectionApi.getCollectionByAdmin(),
        refetchOnWindowFocus: false,
    });
};
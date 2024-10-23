
import collectionApi from "@/api/collection";
import { ImageType } from "@/components/image-modal/ImageModal";
import { TBaseResponse } from "@/types/common";
import { useQuery } from "@tanstack/react-query";

export const useGetCollectionQuery = () => {
    return useQuery<TBaseResponse<any>, Error, TBaseResponse<{ data: ImageType[] }>>({
        queryKey: ["gift"],
        queryFn: () => collectionApi.getCollection(),
        refetchOnWindowFocus: false,
    });
};
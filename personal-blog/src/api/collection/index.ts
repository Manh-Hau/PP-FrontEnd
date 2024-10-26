import axiosClient from "@/axios-client";
import { TBaseResponse } from "@/types/common";
import { postRequest } from "@/utils/common";

const collectionApi = {
  createCollectionItem: (
    data: FormData
  ): Promise<TBaseResponse<any>> =>
    postRequest("/uploadImage", data, true),
  getCollection: (language: string): Promise<TBaseResponse<any[]>> =>
    axiosClient.get(`/getAllImages?lang=${language}`),
  getCollectionByAdmin: (): Promise<TBaseResponse<any[]>> =>
    axiosClient.get("/getAllImagesAdmin"),
  updateCollectionItem: (data: FormData): Promise<TBaseResponse<any>> =>
    postRequest(`/updateImage`, data, true),
  deleteCollectionItem: (id: string): Promise<TBaseResponse<any>> =>
    axiosClient.delete(`/deleteImage?id=${id}`),
};

export default collectionApi;

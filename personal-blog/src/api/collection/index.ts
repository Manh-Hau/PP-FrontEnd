import axiosClient from "@/axios-client";
import { TBaseResponse } from "@/types/common";
import { postRequest } from "@/utils/common";

const collectionApi = {
  createCollectionItem: (
    data: FormData
  ): Promise<TBaseResponse<any>> =>
    postRequest("/item", data, true),
  getCollection: (): Promise<TBaseResponse<any[]>> =>
    axiosClient.get("/getAllImages?lang=vn"),
  updateCollectionItem: (id: string): Promise<TBaseResponse<any>> =>
    axiosClient.get(`/item/${id}`),
  updateWheelItem: (data: FormData): Promise<TBaseResponse<any>> =>
    axiosClient.put(`/item`, data),
  reorderWheelItem: (
    data: { id: number; order: number }[]
  ): Promise<TBaseResponse<any>> => axiosClient.post(`/item/reorder`, data),
  deleteImage: (id: string): Promise<TBaseResponse<any>> =>
    axiosClient.delete(`/item/${id}`),

};

export default collectionApi;

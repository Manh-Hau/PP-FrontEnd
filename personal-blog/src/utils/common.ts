import axiosClient from "@/axios-client";
import { TBaseResponse } from "@/types/common";
import { AxiosResponse } from "axios";

const convertResponse = <T>(response: AxiosResponse): TBaseResponse<T> => {
    return {
        isSuccess: response.status >= 200 && response.status < 300,
        message: response.statusText,
        data: response.data
    };
};

export const postRequest = <T>(url: string, data: any, isFormData = false): Promise<TBaseResponse<T>> => {
    const headers = isFormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" };

    return axiosClient.post(url, data, { headers })
        .then(response => convertResponse<T>(response))
        .catch(error => {
            if (error.response) {
                return convertResponse<T>(error.response);
            }
            throw error;
        });
};
import axiosClient from "@/axios-client";
import { TBaseResponse } from "@/types/common";

const authApi = {
    login: (data: any): Promise<TBaseResponse<any>> =>
        axiosClient.post("/auth/login", data),
};

export default authApi;

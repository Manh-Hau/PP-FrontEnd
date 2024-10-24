import axiosClient from "@/axios-client";
import { TLoginRequest } from "@/types/auth";
import { TBaseResponse } from "@/types/common";

const authApi = {
    login: (data: TLoginRequest): Promise<TBaseResponse<any>> =>
        axiosClient.post("/login", data),
};

export default authApi;

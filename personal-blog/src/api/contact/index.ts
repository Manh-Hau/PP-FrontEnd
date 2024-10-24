import axiosClient from "@/axios-client";
import { TBaseResponse } from "@/types/common";
import { postRequest } from "@/utils/common";

const contactApi = {
    sendMail: (
        data: {content: string}
    ): Promise<TBaseResponse<any>> =>
        postRequest("/sendMail", data)
};

export default contactApi;

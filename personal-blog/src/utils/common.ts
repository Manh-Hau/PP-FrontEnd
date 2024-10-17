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
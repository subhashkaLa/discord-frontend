import apiConfig from "./config";

export const create = (payload) => apiConfig.client.post(`servers`, payload);

import axios from "axios";
import Env from "@/env";
import {userStore} from "@/stores/userStore";
const RequestUtil = {}

export const axiosInstance = axios.create({
  baseURL: Env.API.BASE_URL,
  timeout: Env.API.TIMEOUT,
  headers: Env.API.HEADERS
})

axiosInstance.interceptors.request.use(config => {
    // 取消令牌 cancelToken
    console.log(userStore().token)
    userStore().token && (config.headers.Authorization = userStore().token)
    return config
})

export default RequestUtil;
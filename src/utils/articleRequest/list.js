import {axiosInstance} from "@/utils/request";

/**
 * 获取文章列表
 * @param cursor
 * @param pageSize
 * @param query
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function list (cursor = 0, pageSize = 10, query = {}){
    return await axiosInstance.post('article.index/index', {
        cursor: cursor,
        pageSize: pageSize,
        query: query
    })
}
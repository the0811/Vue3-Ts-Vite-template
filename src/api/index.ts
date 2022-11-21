import { axios } from "@/service/axios"
//敏感词校验
export const getUser = (params: any) => {
    return axios({
        url: "/getUser",
        params,
        method: "get",
    }).then((res:any=>{
	//正确处理
	}))
} 
 
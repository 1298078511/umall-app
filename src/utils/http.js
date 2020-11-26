import axios from "axios"
import qs from "qs"
import {successAlert} from "./alert"
//响应拦截
axios.interceptors.response.use(res=>{
    console.log("当前请求的地址是-----" +res.config.url);
    console.log(res);
    if(res.data.code!==200){
        successAlert(res.data.msg)
    }
    if(res.data.msg==="登录已过期或访问权限受限"){
        sessionStorage.removeItem("userInfo")
        window.location.href="http://localhost:3001/#/login"
    }
    return res
})
//请求拦截
axios.interceptors.request.use(req=>{
    if(req.url!=="/api/register"&&req.url!=="/api/login"){
        req.headers.authorization=JSON.parse(sessionStorage.getItem("userInfo")).token
    }
    return req;
})
//首页的商品数据

export const reqHomeGoods=()=>{
    return axios({
        url:"/api/getindexgoods",
        method:"get"
    })
}
//注册页面
export const reqRegister=(user)=>{
    return axios({
        url:"/api/register",
        method:"post",
        data:qs.stringify(user)
    })
}
//登录页面
export const reqLogin=(user)=>{
    return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(user)
    })
}
//轮播图请求
export const reqHomeBanner=()=>{
    return axios({
        url:"/api/getbanner",
        method:"get"
    })
}
//详情页请求
export const reqDetail=(id)=>{
    return axios({
        url:"/api/getgoodsinfo",
        method:"get",
        params:{
            id:id
        }
    })
}
//分类请求
export const reqCate=()=>{
    return axios({
        url: "/api/getcatetree",
        method:"get",
    })
}
//分类商品
export const reqCateGoods=(id)=>{
    return axios({
        url: "/api/getgoods",
        method:"get",
        params:{
            fid:id
        }
    })
}
//购物车添加
export const reqShopAdd = (user) => {
    return axios({
        url: "/api/cartadd",
        method: "post",
        data: qs.stringify(user)
    })
}
//购物车列表
export const reqShopList=()=>{
    return axios({
        url:"/api/cartlist",
        method:"get",
        params:{
            uid:JSON.parse(sessionStorage.getItem("userInfo")).uid
        }
    })
}
//购物车删除
export const reqShopDel=(id)=>{
    return axios({
        url:"/api/cartdelete",
        method:"post",
        data:qs.stringify({
            id:id
        })
    })
}
//购物车修改 + - 
export const reqShopEdit=(user)=>{
    return axios({
        url:"/api/cartedit",
        method:"post",
        data:qs.stringify(user)
    })
}


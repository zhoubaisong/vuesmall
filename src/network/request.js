import axios from "axios";

export const request = function(config) {
  const instance = new axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  });
  instance.interceptors.request.use(config => { //请求拦截，可以再请求前修改请求参数加响应头等等，使用该拦截器必须重新返回数据
    return config;
  }, err => {
    console.log(err);
  });

  instance.interceptors.response.use(res => {  //响应拦截，可以拦截返回的数据，使用该拦截器必须重新将数据返回
    return res.data;
  }, err => {
    console.log(err);
  });
  // 发送真正的网络请求
  return instance(config);
}

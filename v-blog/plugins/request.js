// import axios from 'axios';
// import { MessageBox, Message } from 'element-ui'
// const service = axios.create({
//     baseURL: '',
//     withCredentials: true,
//     timeout: 10000
// })
// service.interceptors.request.use(
//     config => {
//         // do something before request is sent
//         return config;
//     },
//     error => {
//         // do something with request error
//         console.log(error) // for debug
//         return Promise.reject(error);
//     });

// // 响应拦截器
// service.interceptors.response.use(
//     response => {
//         //do something before response
//         if (res.code !== 200 && res.code !== 0) {
//             Message({
//                 message: res.msg || 'Error',
//                 type: 'error',
//                 duration: 5 * 1000
//             })
//             if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//                 // to re-login
//                 MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
//                     confirmButtonText: 'Re-Login',
//                     cancelButtonText: 'Cancel',
//                     type: 'warning'
//                 }).then(() => {

//                 })
//             }
//             return Promise.reject(new Error(res.msg || 'Error'))
//         } else {
//             const { data } = response
//             const { code } = data
//             // 状态码为0||200表示api成功
//             if (code === 0) {
//                 const { data: res } = data
//                 return res
//             } else if (code === 200) {
//                 return data
//             } else {
//                 // 返回数据
//                 return res
//             }
//         }
//     },
//     error => {
//         Message({
//             message: error.msg,
//             type: 'error',
//             duration: 5 * 1000
//         })
//         return Promise.reject(error)
//     })

// export default service;
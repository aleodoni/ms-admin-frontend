// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  headers: {
    // Accept: 'application/json',
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Credentials': true,
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  },
});

// app.interceptors.request.use(
//   async (request): Promise<AxiosRequestConfig> => {
//     console.log(`${request.method} ${request.url} ${request.params}`);
//     console.log(request.data);
//     return request;
//   },
// );

// app.interceptors.response.use(
//   async (response): Promise<AxiosResponse> => {
//     console.log(`${response.status}`);
//     console.log(response.data);
//     return response;
//   },
// );

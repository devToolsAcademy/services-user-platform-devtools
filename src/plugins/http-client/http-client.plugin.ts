// adapter of fetchAPI
import axios from "axios";
// idea para el caso en que se necesito apis publicas y una con validación
// const buildHttpClient = (headers)=>{
//     return
// }

export const httpClient = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return await data;
  },

  post: async (url: string, body: any) => {
    const resp = await fetch(url);
    return await resp.json();
  },

  put: async (url: string, body: any) => {
    const resp = await fetch(url);
    return await resp.json();
  },

  delete: async (url: string, body: any) => {
    const resp = await fetch(url);
    return await resp.json();
  },
};

import * as axios from "axios";

const instances = {
  instanceSndbx: axios.create({
    // withCredentials: true,
    // headers: {
    //   "API-KEY": "c8c905ae-18c5-4694-965e-904ae69c0400"
    // },
    baseURL: "https://7jixt.sse.codesandbox.io/"
  }),

  instanceSamuraiJS: axios.create({
    withCredentials: true,
    headers: {
      "API-KEY": "c8c905ae-18c5-4694-965e-904ae69c0400"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
  })
};

export const getUsers = (currentPage, pageSize) => {
  return instances.instanceSndbx
    .get(
      `users?page=${currentPage}&count=${pageSize}`
      // {
      //   withCredentials: true
      // }
    )
    .then(res => {
      return res.data;
    });
};

export const setFollow = id => {
  return instances.instanceSamuraiJS
    .delete(`follow/${id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "c8c905ae-18c5-4694-965e-904ae69c0400"
      }
    })
    .then(res => {
      return res.data;
    });
};

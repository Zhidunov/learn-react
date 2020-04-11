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

export const loginAPI = {
  setAuth() {
    return instances.instanceSamuraiJS.get(`auth/me`).then(res => {
      return res.data;
    });
  }
};

export const profileAPI = {
  getProfile(id) {
    return instances.instanceSndbx.get(`profile/` + id).then(res => {
      return res.data;
    });
  },

  getStatus(id) {
    return instances.instanceSndbx.get(`profile/status/` + id).then(res => {
      debugger;
      return res.data;
    });
  },

  updateStatus(status) {
    return instances.instanceSndbx
      .put(`profile/status`, { status: status })
      .then(res => {
        return res.data;
      });
  }
};

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instances.instanceSndbx
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => {
        return res.data;
      });
  },

  setFollow(id) {
    return instances.instanceSamuraiJS.post(`follow/${id}`).then(res => {
      return res.data;
    });
  },

  setUnFollow(id) {
    return instances.instanceSamuraiJS.delete(`follow/${id}`).then(res => {
      return res.data;
    });
  }
};

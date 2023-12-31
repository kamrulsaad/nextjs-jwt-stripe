import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [TagTypes.user],
    }),
    register: build.mutation({
      query: (signUpData) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        data: signUpData,
      }),
      invalidatesTags: [TagTypes.user],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

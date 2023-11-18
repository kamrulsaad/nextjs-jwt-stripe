import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";
import { getEnvVariable } from "@/lib/helpers";
import { axiosBaseQuery } from "@/lib/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "/api" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

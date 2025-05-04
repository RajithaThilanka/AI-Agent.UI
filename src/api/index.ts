import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CHAT_API_TAGS, chatEndpoints } from "./chat";
import { RootState } from "../store/root-reducer";

const generateTagTypes = (types: Record<string, string>[]): string[] => {
  const tags: string[] = [];
  types.forEach((type) => {
    for (const key in type) {
      if (Object.prototype.hasOwnProperty.call(type, key)) {
        tags.push(type[key]);
      }
    }
  });
  return tags;
};

const allTags = [CHAT_API_TAGS];

const apiURL = import.meta.env.VITE_API_URI;

export const aiAgentApi = createApi({
  reducerPath: "aiAgentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiURL}/api/`,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      // const token = state.auth?.accessToken;
      // if (token) {
      //   headers.set("Authorization", `Bearer ${token}`);
      // }
      return headers;
    },
  }),
  tagTypes: generateTagTypes(allTags),
  endpoints: (builder) => ({
    ...chatEndpoints(builder),
  }),
});

//Chat endpoints
export const { useChatAgentMutation } = aiAgentApi;

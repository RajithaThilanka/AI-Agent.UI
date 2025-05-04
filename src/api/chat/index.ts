import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
} from "@reduxjs/toolkit/query";

const CHAT_URL = "chat";

export const CHAT_API_TAGS = {
  CHAT: "CHAT",
};

export const chatEndpoints = (
  builder: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    string,
    "aiAgentApi"
  >
) => ({
  chatAgent: builder.mutation<
    void,
    { taskId: number; message: string; history: any[] }
  >({
    query: ({ message, history }) => ({
      url: `${CHAT_URL}`,
      method: "POST",
      body: { message, history },
    }),
    invalidatesTags: [CHAT_API_TAGS.CHAT],
  }),
});

import React from "react";
import { ThreeDots } from "@/components/partials/Dot";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeView = () => {
  return (
    <div className="flex flex-col max-h-[700px] bg-[#2b2b2b] rounded-lg overflow-hidden">
      <div className="p-3 px-4 flex items-center justify-between bg-stone-900">
        <ThreeDots />
        <p className="text-slate-200 text-xs font-medium">Copy</p>
      </div>
      <div className="p-6 overflow-auto text-sm flex">
        <SyntaxHighlighter
          language="javascript"
          style={darcula}
          customStyle={{ height: "100%", padding: 0, margin: 0, overflow: "unset" }}
        >
          {`import { API } from "../common/client";
import { useState, useEffect } from "react";

// ------------------------------------------------------------------
// useFetch custom hook for making API requests with axios.
// Parameters:
// - method: HTTP request method (GET, POST, etc.).
// - url: The URL to send the API request.
// - body: The request body for POST requests.
// - dependency: An optional dependency array to trigger re-fetching.
// ------------------------------------------------------------------

export type GetType = {
  method: "GET";
  url: string;
};

export type PostType = {
  method: "POST";
  url: string;
  body: any;
};

export type PutType = {
  method: "PUT";
  url: string;
  body: any;
};

export type DeleteType = {
  method: "DELETE";
  url: string;
};

export type FetchApiType = GetType | PostType | PutType | DeleteType;

interface UseFetchProps {
  api: FetchApiType;
  dependency?: any[];
}

const useFetch = ({ api, dependency = [] }: UseFetchProps) => {
  const [data, setData] = useState<any>();
  let controller: AbortController;

  useEffect(() => {
    controller = new AbortController();

    (async () => {
      try {
        switch (api.method) {
          //
          case "GET": {
            const { data } = await API.get(api.url, { signal: controller.signal });
            setData(data);
            break;
          }
          //
          case "POST": {
            const { data } = await API.post(api.url, api.body, { signal: controller.signal });
            setData(data);
            break;
          }
          //
          case "PUT": {
            const { data } = await API.put(api.url, api.body, { signal: controller.signal });
            setData(data);
            break;
          }
          //
          case "DELETE": {
            const { data } = await API.delete(api.url, { signal: controller.signal });
            setData(data);
            break;
          }
        }
      } catch (err) {}
    })();

    return () => controller.abort();
  }, dependency);

  return { data };
};

export default useFetch;
`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeView;

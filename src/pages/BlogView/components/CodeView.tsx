import { ThreeDots } from "@/components/partials/Dot";
import React from "react";

const CodeView = () => {
  return (
    <div className="flex flex-col max-h-[700px] bg-[#2f2f2f] rounded-lg overflow-hidden">
      <div className="p-3 px-4 flex items-center justify-between bg-stone-900">
        <ThreeDots />
        <p className="text-slate-200 text-xs font-medium">Copy</p>
      </div>
      <div className="px-6 py-4 overflow-auto">
        <pre className="text-slate-100 text-sm">
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
        </pre>
      </div>
    </div>
  );
};

export default CodeView;

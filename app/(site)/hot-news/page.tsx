"use client";
import fetchUtils from "@/utils/request";
import { useEffect, useState } from "react";

const HotNewsItem = ({
  data,
  className,
}: {
  data: NewsItem;
  className: string;
}) => {
  return (
    <div className={className}>
      <h1>{data.name}</h1>
      <ul className="h-80 overflow-y-auto">
        {data.data.map((item, index) => {
          return (
            <div className="flex" key={item.url}>
              <span className="shrink-0">{index + 1} .</span>
              <a href={item.url} target="_blank">
                <li key={item.id}>{item.title}</li>
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

interface NewsItem {
  type: string;
  name: string;
  url: string;
  data: Array<any>;
}

export default function HotNews() {
  const [newsData, setNewsData] = useState([] as NewsItem[]);
  useEffect(() => {
    const fetchData = async () => {
      const { data = [] } = await fetchUtils.get("/news");
      setNewsData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex gap-4">
      {newsData.map((item) => {
        return <HotNewsItem className="w-1/3 rounded-md border p-2" key={item.type} data={item} />;
      })}
    </div>
  );
}

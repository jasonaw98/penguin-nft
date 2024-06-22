"use client";
import { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { TextAnimate } from "./ui/text-animate";

interface NFTItem {
  name: string;
  tokenId: string;
  imageUrl: string;
  attributes: {
    value: string;
  }[];
}

const Main = () => {
  const [wallet, setWallet] = useState("");
  const [items, setItems] = useState<NFTItem[]>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  async function getData() {
    try {
      const response = await fetch(`/api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wallet),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (Array.isArray(data.message)) {
        setItems(data.message);
      } else {
        setItems([]);
      }
      setSearchPerformed(true);
    } catch (error) {
      console.log("Error fetching Data", error);
      setItems([]);
      setSearchPerformed(true);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "enter") {
      getData();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="relative w-[500px]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            className="block w-full p-4 ps-10 text-sm dark:text-white rounded-2xl bg-gray-100 dark:bg-gray-800 border dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-200 focus:outline-1 outline-slate-300 dark:outline-gray-600"
            placeholder="vitalik.eth"
            onChange={(e) => setWallet(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={getData}
          >
            Search
          </button>
        </div>
      </div>

      <div className="mt-10">
        {!searchPerformed ? null : items.length > 0 ? (
          <BentoGrid className=" max-w-md md:max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.name}
                description={item.tokenId}
                imageUrl={item.imageUrl}
                icon={item.attributes}
                className={""}
              />
            ))}
          </BentoGrid>
        ) : (
          <div className="mx-auto w-full">
            <TextAnimate text="No Results" type="fadeInUp"></TextAnimate>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;

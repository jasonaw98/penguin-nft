"use client"
import { useState } from "react"
import ToggleTheme from './toggle-theme'
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "@/utils/cn";

const Main = () => {
    const [wallet, setWallet] = useState("")

    async function getData() {
        try {
            const response = await fetch(`/api`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(wallet)
            })

            if (!response.ok) {
                console.log(response)
                throw new Error("Network response was not ok");
            }

        } catch (error) {
            console.log(error)
        }
    }

    const items = [
        {
            "name": "Pudgy Penguin #4259",
            "tokenId": "4259",
            "imageUrl": "https://nft-cdn.alchemy.com/eth-mainnet/b57169db89f3a0385c80401b1e396311",
            "attributes": [
                {
                    "value": "Tangerine",
                    "trait_type": "Background"
                },
                {
                    "value": "Olive Green",
                    "trait_type": "Skin"
                },
                {
                    "value": "Bow Tie Pink",
                    "trait_type": "Body"
                },
                {
                    "value": "Normal",
                    "trait_type": "Face"
                },
                {
                    "value": "Mohawk Green",
                    "trait_type": "Head"
                }
            ]
        },
        {
            "name": "Pudgy Penguin #7430",
            "tokenId": "7430",
            "imageUrl": "https://nft-cdn.alchemy.com/eth-mainnet/421ff8cb9eca4e62b4b34bb057e1d95c",
            "attributes": [
                {
                    "value": "Purple",
                    "trait_type": "Background"
                },
                {
                    "value": "Normal",
                    "trait_type": "Skin"
                },
                {
                    "value": "Tank Top Blue",
                    "trait_type": "Body"
                },
                {
                    "value": "Blushing",
                    "trait_type": "Face"
                },
                {
                    "value": "Durag Blue",
                    "trait_type": "Head"
                }
            ]
        }
    ]

    return (
        <div>
            <div className="flex justify-center gap-12">
                <h1 className="text-3xl font-bold underline">LIL PUDGUYS</h1>
                <ToggleTheme />
            </div>

            <div className="relative w-[500px]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-2xl dark:bg-gray-700 border dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-200 focus:outline-1 outline-slate-300 dark:outline-gray-600" placeholder="vitalik.eth" onChange={(e) => setWallet(e.target.value)} />
                <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={getData}>Search</button>
            </div>

            <div>
                <BentoGrid className="max-w-4xl mx-auto">
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
            </div>
        </div>
    )
}

export default Main
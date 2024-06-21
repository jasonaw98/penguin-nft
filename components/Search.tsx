"use client"
import { useState } from "react"

const Search = () => {
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

    return (
        <div>
            <div className="relative w-[500px]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-2xl dark:bg-gray-700 border dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-200 focus:outline-1 outline-slate-300 dark:outline-gray-600" placeholder="vitalik.eth" onChange={(e) => setWallet(e.target.value)} />
                <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={getData}>Search</button>
            </div>
        </div>
    )
}

export default Search
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        const wallet = await req.json();
        console.log(wallet);
        const response = await fetch(`https://eth-mainnet.g.alchemy.com/nft/v3/ddEjelJZ-/getNFTsForOwner?owner=${wallet}&contractAddresses[]=0xBd3531dA5CF5857e7CfAA92426877b022e612cf8&withMetadata=true&pageSize=100`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }) 

        const data = await response.json();

        const extractedData = data.ownedNfts.map(nft => ({
            name: nft.name,
            tokenId: nft.tokenId,
            imageUrl: nft.image.cachedUrl,
            attributes: nft.raw.metadata.attributes
        }));

        console.log('Fetched data:', extractedData);

        return NextResponse.json({
            message: "extractedData",
            status: 'success'
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ message: error, status: 500 });
    }
}
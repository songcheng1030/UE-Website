import { GOwnedNft } from ".";
export interface GRaffles {
    raffleId: number,
    raffleAddress: string,
    nftAddress: string,
    tokenId: string,
    totalTickets: string,
    ticketPrice: string,
    totalPrice: string,
    duration: string,
    seller: string,
    created: string,
    soldTickets: string,
    raffleState: string
}

export interface GSoldHistory {
    history: GSoldHistoryInfo,
    buyer: GBuyer | null
} 

export interface GSoldHistoryInfo {
    _id: string,
    blockNumber: number,
    txHash: string,
    raffleId: string,
    to?: string,
    from?: string,
    buyer: string,
    tickets: string,
    timestamp: number,
    __v: number
}
export interface GBuyer {
    _id: string,
    name: string,
    avatar: string,
    bio: string,
    account: string,
    created: string | Date,
    updated: string | Date,
    __v: number
}
export interface GRaffleSoldHistory {
    nft: GOwnedNft,
    history: GSoldHistoryInfo,
    to: GBuyer | null
} 
export interface GNotification {
    txHash: string,
    raffleId: string,
    image: string,
    to?: string,
    from?: string,
    nftAddress: string,
    tokenId: string,
    timestamp: number,
} 

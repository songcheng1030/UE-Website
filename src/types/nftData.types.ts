export interface GNftData {
    ownedNfts: GOwnedNft[];
    totalCount: number;
    blockHash: string;
}

export interface GOwnedNft {
    contract: GContract;
    id: GId;
    error?: string;
    balance: string;
    title:string;
    description: string;
    tokenUri: GTokenUri;
    media: GMedia[];
    metadata?: GMetadata;
    timeLastUpdated: string;
    owneraccount: string;
    owner: GOwner;
    creatorAddress: string;
    creator: GOwner;
}

export interface GContract {
    address: string;
}

export interface GId {
    tokenId: string;
    tokenMetadata: GTokenMetadata;
}

export interface GTokenMetadata {
    tokenType: string
}

export interface GTokenUri {
    raw: string;
    gateway: string;
}

export interface GMedia {
    raw: string;
    gateway: string;
}

export interface GMetadata {
    name?: string;
    image: string;
    description?: string;
    external_url?: string;
    attributes: GAttributes[];
}

export interface GAttributes {
    value: string;
    trait_type: string;
}

export interface GAttributes {
    value: string;
    trait_type: string;
    rarity_percentage?: number;
}

export interface GOwner {
    _id: string,
    name: string | null,
    avatar: string,
    bio: string,
    account: string,
    created: Date | string,
    updated: Date | string,
    __v: number
}

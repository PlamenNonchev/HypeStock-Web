import { Retailer } from "./retailer";

export interface Product {
    id: number;
    model: string;
    imageUrl: string;
    description: string;
    brand: string;
    brandId: number;
    releaseDate: string;
    released: boolean;
    likes: number;
    dislikes: number;
    likeRatio: number;
    price: number;
    colorway: string;
    ebayUrl: string;
    hasUserLiked: boolean;
    hasUserDisliked: boolean;
    similarProducts: Array<Product>;
    ebayListings: Array<EbayListing>;
    ebaySoldPrices: Array<number>;
    retailers: Array<Retailer>;
}

export class EbayListing {
    title: string;
    imageUrl: string;
    condition: string;
    price: string;
    url: string;
}
import { Retailer } from "./retailer";

export interface Product {
    id: number;
    model: string;
    imageUrl: string;
    description: string;
    brand: string;
    brandId: number;
    releaseDate: string;
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
import { Product } from './Product';

export class Brand {
    public id: number;
    public name: string;
    public description: string;
    public imageUrl: string;
    public releasesByMonth: Array<MonthReleases>;
    public likes: number;
    public dislikes: number;
    public likeRatio: number;
}

export class MonthReleases {
    public month: string;
    public releases: Array<Product>;
}
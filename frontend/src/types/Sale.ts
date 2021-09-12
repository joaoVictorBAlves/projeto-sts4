import { Seller } from "./seller"

export type Sale = {

    id: number;
    amount: number;
    visited: number;
    deals: number;
    date: string;
    seller: Seller;

}
export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalElement: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElement?: number;
    empty?: boolean;
}

export type SaleSum = {
    sellerName: string;
    sum: number ;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number; 
}
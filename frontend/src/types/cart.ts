import { Copy } from "./copy";

export interface CartItem extends Copy {
    amount: number,
    author: string[]
}
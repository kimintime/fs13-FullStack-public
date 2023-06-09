import { Base } from "./base";
import { Publisher } from "./publisher";

export interface Copy extends Base {
    isAvailable: boolean,
    title: string,
    publisher: Publisher
}

export type UpdateCopy = {
    id: number,
    bookId: number,
    publisherId: number
}

export type CreateCopy = {
    bookId: number,
    publisherId: number
}
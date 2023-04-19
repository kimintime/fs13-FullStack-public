import { Author } from "./author";
import { Base } from "./base";
import { Category } from "./category";
import { Copy } from "./copy";
import { Publisher } from "./publisher";

export interface Book extends Base {
    title: string,
    description: string | null,
    authors: Author[] | null,
    publishers: Publisher[] | null
    categories: Category[] | null,
    copies: Copy[] | null,
    copiesAvailable: number | null,
};

export type CreateBook = Omit<Book, "id" | "categories" | "authors" | "publishers" | "copies" | "copiesAvailable">;

export type AddToBook = {
    id: number,
    addId: number
} 
import { Book } from "./book";

export interface Category {
    books: null | Book[]
}

export type UpdateCategory = Omit<Category, "books">;
export type CreateCategory = Omit<UpdateCategory, "id">
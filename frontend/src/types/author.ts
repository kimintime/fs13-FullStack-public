import { Base } from "./base";

export interface Author extends Base {
    firstName: string,
    lastName: string,
};

export type CreateAuthor = Omit<Author, "id">;
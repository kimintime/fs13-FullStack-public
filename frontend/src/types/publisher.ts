import { Base } from "./base";

export interface Publisher extends Base {
    publisherName: string
};

export type CreatePublisher = Omit<Publisher, "id">
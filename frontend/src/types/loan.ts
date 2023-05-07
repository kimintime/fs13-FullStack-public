import { Base } from "./base";
import { Copy } from "./copy";
import { Pagination } from "./pagination";
import { User } from "./user";

export interface Loan extends Base {
    user: User,
    copy: Copy,
    dateLoaned: Date,
    dateDue: Date,
    returned: boolean
}

export type LoanFilter = {
    filter: "Ongoing" | "Expired" | null,
    pagination: Pagination | null,
}

export type CreateLoan = {
    userId: number,
    copyId: number
}

export interface UpdateLoan {
    id: number,
    userId: number,
    copyId: number,
    returned: boolean | null,
    dueDate: Date | null
}


import { Base } from "./base";

export interface User extends Base {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    token: string,
    expiresAt: Date,
    roles: string[]
};

export type UserRegister = {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string
};

export type UserLogin = {
    email: string,
    password: string
};

export interface FormType {
    type: "Login" | "Register"
};

export interface UserUpdate extends UserRegister {
    oldPassword: string,
    newPassword: string | null
};
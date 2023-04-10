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

export interface UserProfileEdit {
    username: string,
    email: string,
    firstName: string,
    lastName: string
};

export interface UserRegister extends UserProfileEdit {
    password: string
};

export interface UserLogin  {
    email: string,
    password: string
};

export interface FormType {
    type: "Login" | "Register"
};

export interface UserUpdatePassword {
    oldPassword: string,
    newPassword: string | null
};

export interface UserUpdate extends UserRegister {
    id: number
}
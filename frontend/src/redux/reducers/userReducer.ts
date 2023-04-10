import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserLogin, UserProfileEdit, UserRegister, UserUpdate, UserUpdatePassword } from "../../types/user";
import axios from "axios";
import { addNotification } from "./notificationReducer";
import ENV from "../../../env";
import { RootState } from "../store";

const initialState: User | null = null as User | null

export const login = createAsyncThunk(
    "login",
    async (credentials: UserLogin, thunkAPI) => {
        try {
            thunkAPI.dispatch(addNotification({ message: "Logging in...", timeInSec: 5, type: "normal" }))
            let result = await axios.post(`${ENV.BACKEND_URL}/api/v1/login`, credentials);

            if (result.status === 204) {
                thunkAPI.dispatch(addNotification({ message: "Wrong username or password", timeInSec: 2, type: "normal" }))
                return;
            }

            let user: User = result.data;

            thunkAPI.dispatch(addNotification({ message: `Logged in as ${user.username}`, timeInSec: 2, type: "normal" }))
            return user;

        } catch (e: any) {
            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
        }
    }
)

export const register = createAsyncThunk(
    "register",
    async (form: UserRegister, thunkAPI) => {
        try {
            let result = await axios.post(`${ENV.BACKEND_URL}/api/v1/users/register`, form);

            if (result.status === 204) {
                thunkAPI.dispatch(addNotification({ message: "Registration failed", timeInSec: 2, type: "normal" }))
                return;
            }

            thunkAPI.dispatch(addNotification({ message: "Registration successful, please login", timeInSec: 2, type: "normal" }))

        } catch (e: any) {
            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
        }
    }
)

export const updateOwnAccount = createAsyncThunk(
    "updateOwnAccount",
    async (update: UserProfileEdit, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(`${ENV.BACKEND_URL}/api/v1/profile/update`,
                {
                    ...update
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                });

            if (result.data) {
                thunkAPI.dispatch(addNotification({ message: "Updated user profile", timeInSec: 2, type: "normal" }));

            } else {
                thunkAPI.dispatch(addNotification({ message: "Failed to update user profile", timeInSec: 2, type: "normal" }))
            }
        } catch (e: any) {
            thunkAPI.dispatch(addNotification({ message: "Something went wrong: ${e.message}", timeInSec: 2, type: "error" }));
        }
    }
)

export const updateUserPassword = createAsyncThunk(
    "updateUserPassword",
    async (update: UserUpdatePassword, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(`${ENV.BACKEND_URL}/api/v1/update/password`,
                {
                    ...update
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                });

            if (result.data) {
                thunkAPI.dispatch({ message: "Updated password successfully", timeInSec: 2, type: "normal" })

            } else {
                thunkAPI.dispatch(addNotification({ message: "Failed to update password.", timeInSec: 2, type: "normal" }))
            }

        } catch (e: any) {
            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
        }
    }
)

export const updateUser = createAsyncThunk(
    "upserUser",
    async (update: UserUpdate, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(`${ENV.BACKEND_URL}/api/v1/users/${update.id}/update`,
                {
                    ...update
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                });
            
            if (result.data) {
                thunkAPI.dispatch(addNotification({message: "Successfully edited user profile.", timeInSec: 2, type: "normal"}))

            } else {
                thunkAPI.dispatch(addNotification({message: "Failed to update user", timeInSec: 2, type: "normal"}))
            }
        } catch (e: any) {
            thunkAPI.dispatch(addNotification({message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error"}))
        }
    }
)

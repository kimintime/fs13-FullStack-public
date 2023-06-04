import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserLogin, UserProfileEdit, UserRegister, UserUpdate, UserUpdatePassword } from "../../types/user";
import axios from "axios";
import { addNotification } from "./notificationReducer";
import { BACKEND_URL } from "../../env";
import { RootState } from "../store";
import { Pagination } from "../../types/pagination";

//const initialState: User | null = null

export const getAllUsers = createAsyncThunk(
    "getAllUsers",
    async (pagination: Pagination | null, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${BACKEND_URL}/api/v1/users`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` },
                    params: pagination === null ? {} : { page: pagination.page, pageSize: pagination.pageSize }
                })

            return response.data as User[]

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const getUserById = createAsyncThunk(
    "getUserById",
    async (id: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${BACKEND_URL}/api/v1/users/${id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                })

            return response.data as User[]

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const getOwnProfile = createAsyncThunk(
    "getOwnProfile",
    async (user: User, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${BACKEND_URL}/api/v1/users/profile`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                })
                
            return response.data as User

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const login = createAsyncThunk(
    "login",
    async (credentials: UserLogin, thunkAPI) => {
        try {
            thunkAPI.dispatch(addNotification({ message: "Logging in...", timeInSec: 5, type: "info" }))
            let result = await axios.post(`${BACKEND_URL}/api/v1/users/login`, credentials);

            if (result.status === 204) {
                await thunkAPI.dispatch(addNotification({ message: "Wrong username or password", timeInSec: 5, type: "warning" }))
                return;
            }

            let user: User = result.data;

            await thunkAPI.dispatch(addNotification({ message: `Logged in as ${credentials.email}`, timeInSec: 5, type: "success", priority: 1 }))
            return user;

        } catch (e: any) {
            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const register = createAsyncThunk(
    "register",
    async (form: UserRegister, thunkAPI) => {
        try {
            let result = await axios.post(`${BACKEND_URL}/api/v1/users/register`, form);

            if (result.status === 204) {
                thunkAPI.dispatch(addNotification({ message: "Registration failed", timeInSec: 5, type: "warning" }))
                return;
            }

            await thunkAPI.dispatch(addNotification({ message: "Registration successful, please login", timeInSec: 5, type: "success" }))

        } catch (e: any) {
            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const updateOwnAccount = createAsyncThunk(
    "updateOwnAccount",
    async (update: UserProfileEdit, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(`${BACKEND_URL}/api/v1/users/profile/update`,
                {
                    ...update
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                });

            if (result.data) {
                await thunkAPI.dispatch(addNotification({ message: "Updated user profile", timeInSec: 5, type: "success" }));

            } else {
                await thunkAPI.dispatch(addNotification({ message: "Failed to update user profile", timeInSec: 5, type: "warning" }))
            }
        } catch (e: any) {
            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const updateOwnPassword = createAsyncThunk(
    "updateOwnPassword",
    async (update: UserUpdatePassword, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(`${BACKEND_URL}/api/v1/users/profile/update/password`,
                {
                    ...update
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                });

            if (result.data) {
                thunkAPI.dispatch({ message: "Updated password successfully", timeInSec: 5, type: "success", priority: 1 })

            } else {
                await thunkAPI.dispatch(addNotification({ message: "Failed to update password.", timeInSec: 5, type: "warning", priority: 1 }))
            }

        } catch (e: any) {
            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error", priority: 1 }))
        }
    }
)

export const updateUser = createAsyncThunk(
    "updateUser",
    async (update: UserUpdate, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(`${BACKEND_URL}/api/v1/users/${update.id}/update`,
                {
                    ...update
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                });

            if (result.data) {
                await thunkAPI.dispatch(addNotification({ message: "Successfully edited user profile.", timeInSec: 5, type: "success", priority: 2 }))

                return result.data;

            } else {
                await thunkAPI.dispatch(addNotification({ message: "Failed to update user", timeInSec: 5, type: "warning", priority: 2 }))
            }
        } catch (e: any) {
            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error", priority: 2 }))
        }
    }
)

const userReducer = createSlice({
    name: "userReducer",
    initialState: null as User | null,
    reducers: {
        setUser: (state, action: PayloadAction<Partial<User>>) => {
            if (state) {
                return { ...state, ...action.payload };
            } else {
                return action.payload as User;
            }
        },
        logout: () => {
            return null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            if (action.payload) {
                if (state) {
                    state = { ...state, ...action.payload };
                }
            }
        });
    }
});

export default userReducer.reducer;
export const { setUser, logout } = userReducer.actions;

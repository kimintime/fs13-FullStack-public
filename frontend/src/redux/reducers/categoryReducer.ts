import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category, CreateCategory, UpdateCategory } from "../../types/category";
import { Pagination } from "../../types/pagination";
import { RootState } from "../store";
import axios from "axios";
import { logout } from "./userReducer";
import { addNotification } from "./notificationReducer";
import ENV from "../../env";

const initialState: Category[] = [];

export const getAllCategories = createAsyncThunk(
    "getAllCategories",
    async (pagination: Pagination | null, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/categories`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                    params: pagination === null ? {} : { page: pagination.page, pageSize: pagination.pageSize }
                })

            return response.data as Category[]

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const getCategoryById = createAsyncThunk(
    "getCategoryById",
    async (id: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/categories/${id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                })

            return response.data as Category[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const addCategory = createAsyncThunk(
    "addCategory",
    async (newCategory: CreateCategory, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.post(
                `${ENV.BACKEND_URL}/api/v1/categories`,
                {
                    ...newCategory
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                }
            )

            if (result.data) {
                await thunkAPI.dispatch(addNotification({message: "Adding category was successful", timeInSec: 5, type: "success"}))
            
            } else {
                throw new Error("Adding category failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const updateCategory = createAsyncThunk(
    "updateCategory",
    async (updateCategory: UpdateCategory, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(
                `${ENV.BACKEND_URL}/api/v1/categories/${updateCategory.id}`,
                {
                    ...updateCategory
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`}
                } 
            )

            if (result.data) {
                thunkAPI.dispatch(getCategoryById(updateCategory.id))
                await thunkAPI.dispatch(addNotification({message: "Updating category successful", timeInSec: 5, type: "success"}))

            } else {
                throw new Error("Updating category failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        } 
    }
)

export const deleteCategory = createAsyncThunk(
    "deleteCategory",
    async (deleteCategory: Category, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.delete(
                `${ENV.BACKEND_URL}/api/v1/categories/${deleteCategory.id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                }
            )

            if (result.data) {
                await thunkAPI.dispatch(addNotification({message: "Deletion was successful", timeInSec: 5, type: "success"}))

            } else {
                throw new Error("Deleting category failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    } 
)

const categoryReducer = createSlice({
    name: "categoryReducer",
    initialState,
    reducers: {
        sortByName: (state, action: PayloadAction<"asc" | "desc">) => { 
            if (action.payload === "asc") {
                state.sort((a, b) => a.name.localeCompare(b.name))

            } else {
                state.sort((a, b) => b.name.localeCompare(a.name))
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCategories.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getCategoryById.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(addCategory.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(updateCategory.fulfilled, (_, action) => {
            return action.payload;
        });
    }
})

export default categoryReducer.reducer;
export const { sortByName } = categoryReducer.actions
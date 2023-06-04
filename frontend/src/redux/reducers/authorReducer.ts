import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Author, CreateAuthor } from "../../types/author";
import { Pagination } from "../../types/pagination";
import { RootState } from "../store";
import axios from "axios";
import { BACKEND_URL } from "../../env";
import { logout } from "./userReducer";
import { addNotification } from "./notificationReducer";

const initialState: Author[] = [];

export const getAllAuthors = createAsyncThunk(
    "getAllAuthors",
    async (pagination: Pagination | null, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${BACKEND_URL}/api/v1/authors`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                    params: pagination === null ? {} : { page: pagination.page, pageSize: pagination.pageSize }
                })

            return response.data as Author[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const getAuthorById = createAsyncThunk(
    "getAuthorById",
    async (id: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${BACKEND_URL}/api/v1/authors/${id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                })

            return response.data as Author[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const addAuthor = createAsyncThunk(
    "addAuthor",
    async (newAuthor: CreateAuthor, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.post(
                `${BACKEND_URL}/api/v1/authors`,
                {
                    ...newAuthor
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                }
            )

            if (result.data) {
                thunkAPI.dispatch(addNotification({message: "Adding author was successful", timeInSec: 5, type: "success"}))
            
            } else {
                throw new Error("Adding author failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const updateAuthor = createAsyncThunk(
    "updateAuthor",
    async (updateAuthor: Author, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(
                `${BACKEND_URL}/api/v1/authors/${updateAuthor.id}`,
                {
                    ...updateAuthor
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`}
                } 
            )

            if (result.data) {
                thunkAPI.dispatch(getAuthorById(updateAuthor.id))
                thunkAPI.dispatch(addNotification({message: "Updating author was successful", timeInSec: 5, type: "success"}))

            } else {
                throw new Error("Updating author failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        } 
    }
)

export const deleteAuthor = createAsyncThunk(
    "deleteAuthor",
    async (deleteAuthor: Author, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.delete(
                `${BACKEND_URL}/api/v1/authors/${deleteAuthor.id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                }
            )

            if (result.data) {
                thunkAPI.dispatch(addNotification({message: "Deletion was successful", timeInSec: 5, type: "success"}))

            } else {
                throw new Error("Deleting author failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    } 
)

const authorReducer = createSlice({
    name: "authorReducer",
    initialState,
    reducers: {
        sortByLastName: (state, action: PayloadAction<"asc" | "desc">) => { 
            if (action.payload === "asc") {
                state.sort((a, b) => a.lastName.localeCompare(b.lastName))

            } else {
                state.sort((a, b) => b.lastName.localeCompare(a.lastName))
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllAuthors.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getAuthorById.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(addAuthor.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(updateAuthor.fulfilled, (_, action) => {
            return action.payload;
        });
    }
})

export default authorReducer.reducer;
export const { sortByLastName } = authorReducer.actions

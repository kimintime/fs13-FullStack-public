import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Copy, CreateCopy } from "../../types/copy";
import { Pagination } from "../../types/pagination";
import { RootState } from "../store";
import axios from "axios";
import { BACKEND_URL } from "../../env";
import { logout } from "./userReducer";
import { addNotification } from "./notificationReducer";

const initialState: Copy[] = [];

export const getAllCopies = createAsyncThunk(
    "getAllCopies",
    async (pagination: Pagination | null, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${BACKEND_URL}/api/v1/copies`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` },
                    params: pagination === null ? {} : { page: pagination.page, pageSize: pagination.pageSize }
                })

            return response.data as Copy[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const getCopyById = createAsyncThunk(
    "getCopyById",
    async (id: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${BACKEND_URL}/api/v1/copies/${id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                })

            return response.data as Copy[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const addCopy = createAsyncThunk(
    "addCopy",
    async (newCopy: CreateCopy, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.post(
                `${BACKEND_URL}/api/v1/copies`,
                {
                    ...newCopy
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                }
            )

            if (result.data) {
                await thunkAPI.dispatch(addNotification({ message: "Adding copy was successful", timeInSec: 5, type: "success" }))

            } else {
                throw new Error("Adding copy failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const updateCopy = createAsyncThunk(
    "updateCopy",
    async (updateCopy: Copy, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(
                `${BACKEND_URL}/api/v1/copies/${updateCopy.id}`,
                {
                    ...updateCopy
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                }
            )

            if (result.data) {
                thunkAPI.dispatch(getCopyById(updateCopy.id))
                await thunkAPI.dispatch(addNotification({ message: "Updating copy was successful", timeInSec: 5, type: "success" }))

            } else {
                throw new Error("Updating copy failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const deleteCopy = createAsyncThunk(
    "deleteCopy",
    async (deleteCopy: Copy, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.delete(
                `${BACKEND_URL}/api/v1/copies/${deleteCopy.id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` },
                }
            )

            if (result.data) {
                await thunkAPI.dispatch(addNotification({ message: "Deletion was successful", timeInSec: 5, type: "success" }))

            } else {
                throw new Error("Deleting copy failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

const copyReducer = createSlice({
    name: "copyReducer",
    initialState,
    reducers: {
        sortByTitle: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => a.title.localeCompare(b.title))

            } else {
                state.sort((a, b) => b.title.localeCompare(a.title))
            }
        },
        sortByPublisher: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => a.publisher.publisherName.localeCompare(b.publisher.publisherName))

            } else {
                state.sort((a, b) => b.publisher.publisherName.localeCompare(a.publisher.publisherName))
            }
        },
        sortByAvailable: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => {
                    const aAvailable = a.isAvailable ? 1 : 0;
                    const bAvailable = b.isAvailable ? 1 : 0;
                    return aAvailable - bAvailable;
                })

            } else {
                state.sort((a, b) => {
                    const aAvailable = a.isAvailable ? 1 : 0;
                    const bAvailable = b.isAvailable ? 1 : 0;
                    return bAvailable - aAvailable;
                  });
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCopies.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getCopyById.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(addCopy.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(updateCopy.fulfilled, (_, action) => {
            return action.payload;
        });
    }
})

export default copyReducer.reducer;
export const { sortByTitle, sortByPublisher, sortByAvailable } = copyReducer.actions


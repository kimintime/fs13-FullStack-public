import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreatePublisher, Publisher } from "../../types/publisher";
import { Pagination } from "../../types/pagination";
import { RootState } from "../store";
import axios from "axios";
import { logout } from "./userReducer";
import { addNotification } from "./notificationReducer";
import ENV from "../../env";

const initialState: Publisher[] = [];

export const getAllPublishers = createAsyncThunk(
    "getAllPublishers",
    async (pagination: Pagination | null, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/publishers`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                    params: pagination === null ? {} : { page: pagination.page, pageSize: pagination.pageSize }
                })

            return response.data as Publisher[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const getPublisherById = createAsyncThunk(
    "getPublisherById",
    async (id: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/publishers/${id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                })

            return response.data as Publisher[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "warning"}))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const addPublisher = createAsyncThunk(
    "addPublisher",
    async (newPublisher: CreatePublisher, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.post(
                `${ENV.BACKEND_URL}/api/v1/publishers`,
                {
                    ...newPublisher
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                }
            )

            if (result.data) {
                await thunkAPI.dispatch(addNotification({message: "Adding publisher was successful", timeInSec: 5, type: "success"}))
            
            } else {
                throw new Error("Adding publisher failed")
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

export const updatePublisher = createAsyncThunk(
    "updatePublisher",
    async (updatePublisher: Publisher, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(
                `${ENV.BACKEND_URL}/api/v1/publishers/${updatePublisher.id}`,
                {
                    ...updatePublisher
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`}
                } 
            )

            if (result.data) {
                thunkAPI.dispatch(getPublisherById(updatePublisher.id))
                await thunkAPI.dispatch(addNotification({message: "Updating publisher was successful", timeInSec: 5, type: "success"}))

            } else {
                throw new Error("Updating publisher failed")
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

export const deletePublisher = createAsyncThunk(
    "deletePublisher",
    async (deletePublisher: Publisher, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.delete(
                `${ENV.BACKEND_URL}/api/v1/publishers/${deletePublisher.id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                }
            )

            if (result.data) {
                await thunkAPI.dispatch(addNotification({message: "Deletion was successful", timeInSec: 5, type: "success"}))

            } else {
                throw new Error("Deleting publisher failed")
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

const publisherReducer = createSlice({
    name: "publisherReducer",
    initialState,
    reducers: {
        sortByName: (state, action: PayloadAction<"asc" | "desc">) => { 
            if (action.payload === "asc") {
                state.sort((a, b) => a.publisherName.localeCompare(b.publisherName))

            } else {
                state.sort((a, b) => b.publisherName.localeCompare(a.publisherName))
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPublishers.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getPublisherById.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(addPublisher.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(updatePublisher.fulfilled, (_, action) => {
            return action.payload;
        });
    }
})

export default publisherReducer.reducer;
export const { sortByName } = publisherReducer.actions


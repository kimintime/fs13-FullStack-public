import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Copy, CreateCopy } from "../../types/copy";
import { Pagination } from "../../types/pagination";
import { RootState } from "../store";
import axios from "axios";
import ENV from "../../env";
import { logout } from "./userReducer";
import { addNotification } from "./notificationReducer";


const initialState: Copy[] = [];

export const getAllCopies = createAsyncThunk(
    "getAllCopies",
    async (pagination: Pagination | null, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/copies`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                    params: pagination === null ? {} : { page: pagination.page, pageSize: pagination.pageSize }
                })

            return response.data as Copy[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 2, type: "normal"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
        }
    }
)

export const getCopyById = createAsyncThunk(
    "getCopyById",
    async (id: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/copies/${id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                })

            return response.data as Copy[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 2, type: "normal"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
        }
    }
)

export const addCopy = createAsyncThunk(
    "addCopy",
    async (newCopy: CreateCopy, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.post(
                `${ENV.BACKEND_URL}/api/v1/copies`,
                {
                    ...newCopy
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                }
            )

            if (result.data) {
                thunkAPI.dispatch(addNotification({message: "Adding copy was successful", timeInSec: 2, type: "normal"}))
            
            } else {
                throw new Error("Adding copy failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 2, type: "normal"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
        }
    }
)

export const updateCopy = createAsyncThunk(
    "updateCopy",
    async (updateCopy: Copy, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(
                `${ENV.BACKEND_URL}/api/v1/copies/${updateCopy.id}`,
                {
                    ...updateCopy
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`}
                } 
            )

            if (result.data) {
                thunkAPI.dispatch(getCopyById(updateCopy.id))
                thunkAPI.dispatch(addNotification({message: "Updating copy was successful", timeInSec: 2, type: "normal"}))

            } else {
                throw new Error("Updating copy failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 2, type: "normal"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
        } 
    }
)

export const deleteCopy = createAsyncThunk(
    "deleteCopy",
    async (deleteCopy: Copy, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.delete(
                `${ENV.BACKEND_URL}/api/v1/copies/${deleteCopy.id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                }
            )

            if (result.data) {
                thunkAPI.dispatch(addNotification({message: "Deletion was successful", timeInSec: 2, type: "normal"}))

            } else {
                throw new Error("Deleting copy failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 2, type: "normal"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
        }
    } 
)

const copyReducer = createSlice({
    name: "copyReducer",
    initialState,
    reducers: {},
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


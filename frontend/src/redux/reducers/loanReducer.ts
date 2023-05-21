import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateLoan, Loan, LoanFilter, UpdateLoan } from "../../types/loan";
import axios from "axios";
import ENV from "../../env";
import { RootState } from "../store";
import { logout } from "./userReducer";
import { addNotification } from "./notificationReducer";

const initialState: Loan[] = [];

export const getAllLoans = createAsyncThunk(
    "getAllLoans",
    async (filters: LoanFilter | null, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/loans`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` },
                    params: filters === null
                        ? {}
                        : {
                            //userId: filters?.userId,
                            filter: filters?.filter,
                            page: filters?.pagination?.page,
                            pageSize: filters?.pagination?.pageSize
                        }
                }
            )

            return result.data as Loan[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "info" }))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const getLoanById = createAsyncThunk(
    "getLoanById",
    async (id: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/loans/${id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                }
            )

            return response.data as Loan[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "info" }))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const getOwnLoans = createAsyncThunk(
    "getOwnLoans",
    async (loanFilter: LoanFilter | null, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/loans/user/loans`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` },
                    params: loanFilter === null
                        ? {}
                        : { filter: loanFilter?.filter }
                }
            )

            return response.data as Loan[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "info" }))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const addLoan = createAsyncThunk(
    "addLoan",
    async (newLoan: CreateLoan, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.post(
                `${ENV.BACKEND_URL}/api/v1/loans`,
                {
                    ...newLoan
                },
                {
                    headers: {Authorization: `Bearer ${state.user?.token}`}
                }
            )

            if (response.data) {
                thunkAPI.dispatch(addNotification({message: "Adding loan was successful", timeInSec: 5, type: "info"}))
            
            } else {
                throw new Error("Adding loan failed")
            }

        } catch (e: any) { 
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "info"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const updateLoan = createAsyncThunk(
    "updateLoan",
    async (updateLoan: UpdateLoan, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.put(
                `${ENV.BACKEND_URL}/api/v1/loans/${updateLoan.id}`,
                {
                    userId: updateLoan.userId,
                    copyId: updateLoan.copyId,
                    dueDate: updateLoan.dueDate,
                    returned: updateLoan.returned
                },
                {
                    headers: {Authorization: `Bearer ${state.user?.token}`}
                }
            )

            if (response.data) {
                thunkAPI.dispatch(getLoanById(updateLoan.id))
                thunkAPI.dispatch(addNotification({message: "Updating loan was successful", timeInSec: 5, type: "info"}))

            } else {
                throw new Error("Updating loan failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "info"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const deleteLoan = createAsyncThunk(
    "deleteLoan",
    async (deleteLoan: Loan, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.delete(
                `${ENV.BACKEND_URL}/api/v1/loans/${deleteLoan.id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                }
            )

            if (result.data) {
                thunkAPI.dispatch(addNotification({message: "Deletion was successful", timeInSec: 5, type: "info"}))

            } else {
                throw new Error("Deleting loan failed")
            }

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 5, type: "info"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    } 
)

const loanReducer = createSlice({
    name: "loanReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllLoans.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getLoanById.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getOwnLoans.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(addLoan.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(updateLoan.fulfilled, (_, action) => {
            return action.payload;
        });
    }
})

export default loanReducer.reducer;




import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateLoan, Loan, LoanFilter, UpdateLoan } from "../../types/loan";
import axios from "axios";
import { BACKEND_URL } from "../../env";
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
                `${BACKEND_URL}/api/v1/loans`,
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
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const getLoanById = createAsyncThunk(
    "getLoanById",
    async (id: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${BACKEND_URL}/api/v1/loans/${id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                }
            )

            return response.data as Loan[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const getOwnLoans = createAsyncThunk(
    "getOwnLoans",
    async (loanFilter: LoanFilter | null, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${BACKEND_URL}/api/v1/loans/user/loans`,
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
                await thunkAPI.dispatch(addNotification({ message: "Session timed out", timeInSec: 5, type: "warning" }))
            }

            await thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 5, type: "error" }))
        }
    }
)

export const addLoan = createAsyncThunk(
    "addLoan",
    async (newLoan: CreateLoan, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.post(
                `${BACKEND_URL}/api/v1/loans`,
                {
                    ...newLoan
                },
                {
                    headers: {Authorization: `Bearer ${state.user?.token}`}
                }
            )

            if (response.data) {
                await thunkAPI.dispatch(addNotification({message: "Adding loan was successful", timeInSec: 5, type: "success"}))
            
            } else {
                throw new Error("Adding loan failed")
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

export const updateLoan = createAsyncThunk(
    "updateLoan",
    async (updateLoan: UpdateLoan, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.put(
                `${BACKEND_URL}/api/v1/loans/${updateLoan.id}`,
                {
                    userId: updateLoan.userId,
                    copyId: updateLoan.copyId,
                    dateDue: updateLoan.dateDue,
                    returned: updateLoan.returned
                },
                {
                    headers: {Authorization: `Bearer ${state.user?.token}`}
                }
            )

            if (response.data) {
                thunkAPI.dispatch(getLoanById(updateLoan.id))
                await thunkAPI.dispatch(addNotification({message: "Updating loan was successful", timeInSec: 5, type: "success"}))

            } else {
                throw new Error("Updating loan failed")
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

export const deleteLoan = createAsyncThunk(
    "deleteLoan",
    async (deleteLoan: Loan, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.delete(
                `${BACKEND_URL}/api/v1/loans/${deleteLoan.id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                }
            )

            if (result.data) {
                await thunkAPI.dispatch(addNotification({message: "Deletion was successful", timeInSec: 5, type: "success"}))

            } else {
                throw new Error("Deleting loan failed")
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

const loanReducer = createSlice({
    name: "loanReducer",
    initialState,
    reducers: {
        sortByTitle: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => a.copy.title.localeCompare(b.copy.title))

            } else {
                state.sort((a, b) => b.copy.title.localeCompare(a.copy.title))
            }
        },
        sortByName: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => a.user.lastName.localeCompare(b.user.lastName))

            } else {
                state.sort((a, b) => b.user.lastName.localeCompare(a.user.lastName))
            }
        },
        sortByDateLoaned: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
              state.sort((a, b) => new Date(a.dateLoaned).getTime() - new Date(b.dateLoaned).getTime());

            } else {
              state.sort((a, b) => new Date(b.dateLoaned).getTime() - new Date(a.dateLoaned).getTime());
            }
          },
          sortByDateDue: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
              state.sort((a, b) => new Date(a.dateDue).getTime() - new Date(b.dateDue).getTime());
            } else {
              state.sort((a, b) => new Date(b.dateDue).getTime() - new Date(a.dateDue).getTime());
            }
          },
          sortByReturned: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => {
                    const aReturned = a.returned ? 1 : 0;
                    const bReturned = b.returned ? 1 : 0;
                    return aReturned - bReturned;
                })

            } else {
                state.sort((a, b) => {
                    const aReturned = a.returned ? 1 : 0;
                    const bReturned = b.returned ? 1 : 0;
                    return bReturned - aReturned;
                  });
            }
        }  
    },
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
export const { sortByTitle, sortByDateLoaned, sortByDateDue, sortByReturned, sortByName } = loanReducer.actions




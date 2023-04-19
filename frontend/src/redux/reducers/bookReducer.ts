import axios from "axios";
import { Book, CreateBook, AddToBook } from "../../types/book";
import { RootState } from "../store";
import { Pagination } from "../../types/pagination";
import { logout } from "./userReducer";
import { addNotification } from "./notificationReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import ENV from "../../../env";

const initialState: Book[] = [];

export const getAllBooks = createAsyncThunk(
    "getAllBooks",
    async (pagination: Pagination | null, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/books`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                    params: pagination === null ? {} : { page: pagination.page, pageSize: pagination.pageSize }
                })

            return response.data

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 2, type: "normal"}))
            }
        }
    }
)

export const getBookByid = createAsyncThunk(
    "getBookById",
    async (id: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let response = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/books/${id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                })

            return response.data as Book[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 2, type: "normal"}))
            }
        }
    }
)

export const getBooksByTitle = createAsyncThunk(
    "getBooksByTitle",
    async (title: string, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/books/search`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                    params: { title: title}
                });

            return result.data as Book[];

        } catch (e: any) {
            thunkAPI.dispatch(addNotification({message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error"}))
        }
    }
)

export const getBooksByAuthor = createAsyncThunk(
    "getBooksByAuthor",
    async (authorId: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/books/search`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` },
                    params: { author: authorId }
                });
            
            return result.data as Book[];

        } catch (e: any) {
            thunkAPI.dispatch(addNotification({message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error"}))
        }
    }
)

export const getBooksByCategory = createAsyncThunk(
    "getBooksByCategory",
    async (categoryId: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/books/search`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` },
                    params: { category: categoryId }
                });
            
            return result.data as Book[];

        } catch (e: any) {
            thunkAPI.dispatch(addNotification({message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error"}))
        }
    }
)

export const getBooksByPublisher = createAsyncThunk(
    "getBooksByPublisher",
    async (publisherId: number, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.get(
                `${ENV.BACKEND_URL}/api/v1/books/search`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` },
                    params: { publisher: publisherId }
                });
            
            return result.data as Book[];

        } catch (e: any) {
            thunkAPI.dispatch(addNotification({message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error"}))
        }
    }
)

export const addBook = createAsyncThunk(
    "addBook",
    async (form: CreateBook, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.post(
                `${ENV.BACKEND_URL}/api/v1/books`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                }
            )

            return result.data;

        } catch (e: any) {
            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
        }
    }
)

export const addAuthorToBook = createAsyncThunk(
    "addAuthorToBook",
    async (addToBook: AddToBook, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.post(
                `${ENV.BACKEND_URL}/api/v1/books/${addToBook.id}/author`,
                {
                    addId: addToBook.addId
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`}
                }

                //To be continued
            )
        } catch (e: any) {}
    }
)

export const addCategoryToBook = ()

export const updateBook = ()

export const removeAuthorFromBook = ()

export const removeCategoryFromBook = ()

export const deleteBook = ()
import axios from "axios";
import { Book, CreateBook, AddToBook } from "../../types/book";
import { RootState } from "../store";
import { Pagination } from "../../types/pagination";
import { logout } from "./userReducer";
import { addNotification } from "./notificationReducer";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ENV from "../../env";

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

            return response.data as Book[];

        } catch (e: any) {
            if (e.status === 401) {
                thunkAPI.dispatch(logout())
                thunkAPI.dispatch(addNotification({message: "Session timed out", timeInSec: 2, type: "normal"}))
            }

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
        }
    }
)

export const getBookById = createAsyncThunk(
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

            thunkAPI.dispatch(addNotification({ message: `Something went wrong: ${e.message}`, timeInSec: 2, type: "error" }))
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
    async (newBook: CreateBook, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.post(
                `${ENV.BACKEND_URL}/api/v1/books`,
                {
                    ...newBook
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}` }
                }
            )

            if (result.data) {
                thunkAPI.dispatch(getBooksByTitle(newBook.title))
                thunkAPI.dispatch(addNotification({message: "Adding book was successful", timeInSec: 2, type: "normal"}))
            
            } else {
                throw new Error("Adding book failed")
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
            )

            if (result.data) {
                thunkAPI.dispatch(getBookById(addToBook.id))
                thunkAPI.dispatch(addNotification({message: "Adding author was successful", timeInSec: 2, type: "normal"}))
            
            } else {
                throw new Error("Adding author failed")
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

export const addCategoryToBook = createAsyncThunk(
    "addCategoryToBook",
    async (addToBook: AddToBook, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.post(
                `${ENV.BACKEND_URL}/api/v1/books/${addToBook.id}/categories}`,
                {
                    addId: addToBook.addId
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`}
                } 
            )

            if (result.data) {
                thunkAPI.dispatch(getBookById(addToBook.id))
                thunkAPI.dispatch(addNotification({message: "Adding category was successful", timeInSec: 2, type: "normal"}))
            
            } else {
                throw new Error("Adding category failed")
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

export const updateBook = createAsyncThunk(
    "updateBook",
    async (updateBook: Book, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.put(
                `${ENV.BACKEND_URL}/api/v1/books/${updateBook.id}`,
                {
                    ...updateBook
                },
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`}
                } 
            )

            if (result.data) {
                thunkAPI.dispatch(getBookById(updateBook.id))
                thunkAPI.dispatch(addNotification({message: "Updating book was successful", timeInSec: 2, type: "normal"}))

            } else {
                throw new Error("Updating book failed")
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

export const removeAuthorFromBook = createAsyncThunk(
    "removeAuthorFromBook",
    async (addToBook: AddToBook, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.delete(
                `${ENV.BACKEND_URL}/api/v1/books/${addToBook.id}/authors`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                    params: {authorId: addToBook.addId}
                }
            )

            if (result.data) {
                thunkAPI.dispatch(getBookById(addToBook.id))
                thunkAPI.dispatch(addNotification({message: "Removing author was successful", timeInSec: 2, type: "normal"}))
            
            } else {
                throw new Error("Removing author failed.")
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

export const removeCategoryFromBook = createAsyncThunk(
    "removeCategoryFromBook",
    async (addToBook: AddToBook, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.delete(
                `${ENV.BACKEND_URL}/api/v1/books/${addToBook.id}/categories`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                    params: {categoryId: addToBook.addId}
                }
            )

            if (result.data) {
                thunkAPI.dispatch(getBookById(addToBook.id));
                thunkAPI.dispatch(addNotification({message: "Removing category was successful", timeInSec: 2, type: "normal"}))
            
            } else {
                throw new Error("Removing category failed.")
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

export const deleteBook = createAsyncThunk(
    "deleteBook",
    async (deleteBook: Book, thunkAPI) => {
        try {
            let state: RootState = thunkAPI.getState() as RootState;
            let result = await axios.delete(
                `${ENV.BACKEND_URL}/api/v1/books/${deleteBook.id}`,
                {
                    headers: { Authorization: `Bearer ${state.user?.token}`},
                }
            )

            if (result.data) {
                thunkAPI.dispatch(addNotification({message: "Deletion was successful", timeInSec: 2, type: "normal"}))

            } else {
                throw new Error("Deleting book failed")
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

const bookReducer = createSlice({
    name: "bookReducer",
    initialState,
    reducers: {
        sortByTitle: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => a.title.localeCompare(b.title))

            } else {
                state.sort((a, b) => b.title.localeCompare(a.title))
            }
        },
        sortByName: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
              state.sort((a, b) => {
                const authorA = a.authors && a.authors[0]?.lastName ? a.authors[0]?.lastName : "";
                const authorB = b.authors && b.authors[0]?.lastName ? b.authors[0]?.lastName : "";
                return authorA.localeCompare(authorB);
              });
            } else {
              state.sort((a, b) => {
                const authorA = a.authors && a.authors[0]?.lastName ? a.authors[0]?.lastName : "";
                const authorB = b.authors && b.authors[0]?.lastName ? b.authors[0]?.lastName : "";
                return authorB.localeCompare(authorA);
              });
            }
          },
          sortByCopies: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
              state.sort((a, b) => (a.copiesAvailable ?? 0) - (b.copiesAvailable ?? 0));
            } else {
              state.sort((a, b) => (b.copiesAvailable ?? 0) - (a.copiesAvailable ?? 0));
            }
          },          
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBooks.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getBookById.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getBooksByTitle.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getBooksByAuthor.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getBooksByCategory.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getBooksByPublisher.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(addBook.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(updateBook.fulfilled, (_, action) => {
            return action.payload;
        });
    }
})

export default bookReducer.reducer;
export const { sortByTitle, sortByName, sortByCopies } = bookReducer.actions
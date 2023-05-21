import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Notification } from "../../types/notification";

const initialState:Notification | null = null as Notification | null;

let timer:ReturnType<typeof setTimeout>;

const notificationReducer = createSlice({
    name: "notificationReducer",
    initialState,
    reducers: {
        notify: (_, action) => {
            return action.payload;
        },
        clear: () => {
            return null as Notification | null;
        }
    }
})

export default notificationReducer.reducer;

export const {notify, clear} = notificationReducer.actions;

export const addNotification = createAsyncThunk(
    "addNotification",
    (notification:Notification, thunkAPI) => {
        if (timer !== null) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                thunkAPI.dispatch(clear())
            }, notification.timeInSec * 1000);
        }
        thunkAPI.dispatch(notify(notification));
    }
)
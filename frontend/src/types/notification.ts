export type Notification = {
    message: String,
    type: "error" | "normal",
    timeInSec: number,
    priority?: number
}
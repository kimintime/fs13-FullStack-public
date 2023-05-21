export type Notification = {
    message: string,
    type: "error" | "warning" | "info" | "success",
    timeInSec: number,
    priority?: number
}
import { useAppSelector } from "../hooks/reduxHooks"

const Notification = () => {
    const notification = useAppSelector(state => state.notifications);
    
    return (
        <div>
            <p>{notification?.message}</p>
        </div>
    )
}

export default Notification;

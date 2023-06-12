import { Box, Button, Toolbar } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import EditUserForm from "../../components/admin/forms/EditUserForm"
import AdminUserTable from "../../components/admin/tables/AdminUserTable"

const EditUser = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [showUsers, setShowUsers] = useState(false)
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    useEffect(() => {
        if (!isUserDataLoaded && user) {
            dispatch(getOwnProfile(user)).then((response) => {
                const userProfile = response.payload as User;
                dispatch(setUser(userProfile));

                setIsUserDataLoaded(true);
            });

            if (user?.roles && user.roles.includes("Admin")) {
                setIsUserAdmin(true)

            }
        }

    }, [dispatch, user, isUserDataLoaded]);

    const handleShowUsers = () => {
        setShowUsers(!showUsers)
    }

    const handleUserSelection = (user: User) => {
        setSelectedUser(user);
    }

    const clearSelected = () => {
        setSelectedUser(null)
    };

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
        }}>
            {isUserAdmin ? (
                <>
                    <Toolbar>
                        <Button onClick={handleShowUsers}>Select User</Button>
                    </Toolbar>
                    <EditUserForm
                        selectedUser={selectedUser}
                        clearSelected={clearSelected}
                    />
                    {showUsers ?
                        <AdminUserTable onUserSelection={handleUserSelection} setShowUsers={setShowUsers} />
                        : null
                    }
                </>
            ) :
                <p>Access denied</p>
            }
        </Box>
    )
}

export default EditUser
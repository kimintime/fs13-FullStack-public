import { Box, Button, Toolbar } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import { Publisher } from "../../types/publisher"
import EditPublisherForm from "../../components/admin/forms/EditPublisherForm"
import AdminPublisherTable from "../../components/admin/tables/AdminPublisherTable"

const EditPublisher = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [showPublishers, setShowPublishers] = useState(false)
    const [selectedPublisher, setSelectedPublisher] = useState<Publisher | null>(null);

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

    const handleShowPublishers = () => {
        setShowPublishers(!showPublishers)
    }

    const handlePublisherSelection = (publisher: Publisher) => {
        setSelectedPublisher(publisher);
    };

    const clearSelected = () => {
        setSelectedPublisher(null);
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
                        <Button onClick={handleShowPublishers}>Select Publisher</Button>
                    </Toolbar>
                    <EditPublisherForm
                        selectedPublisher={selectedPublisher}
                        clearSelected={clearSelected}
                    />
                    {showPublishers ?
                        <AdminPublisherTable onPublisherSelection={handlePublisherSelection} setShowPublishers={setShowPublishers}/>
                        : null
                    }
                </>
            ) :
                <p>Access denied</p>
            }
        </Box>
    )
}

export default EditPublisher
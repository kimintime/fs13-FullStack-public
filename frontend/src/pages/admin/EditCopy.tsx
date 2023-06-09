import { Box, Button, Toolbar } from "@mui/material"
import { useEffect, useState } from "react"
import AdminPublisherTable from "../../components/admin/tables/AdminPublisherTable"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import { Publisher } from "../../types/publisher"
import { Copy } from "../../types/copy"
import EditCopyForm from "../../components/admin/forms/EditCopyForm"
import AdminCopyTable from "../../components/admin/tables/AdminCopyTable"

const EditCopy = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [showPublishers, setShowPublishers] = useState(false)
    const [showCopies, setShowCopies] = useState(false)
    const [selectedPublisher, setSelectedPublisher] = useState<Publisher | null>(null);
    const [selectedCopy, setSelectedCopy] = useState<Copy | null>(null)

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

    const handleShowCopies = () => {
        setShowCopies(!showCopies)
        setShowPublishers(false)
    }

    const handleShowPublishers = () => {
        setShowPublishers(!showPublishers)
        setShowCopies(false)
    }

    const handleCopySelection = (copy: Copy) => {
        setSelectedCopy(copy);
    }

    const handlePublisherSelection = (publisher: Publisher) => {
        setSelectedPublisher(publisher);
    };

    const clearSelected = () => {
        setSelectedPublisher(null);
        setSelectedCopy(null)
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
                        <Button onClick={handleShowCopies}>Select Copy</Button>
                        <Button onClick={handleShowPublishers}>Select Publisher</Button>
                    </Toolbar>
                    <EditCopyForm
                        selectedCopy={selectedCopy}
                        selectedPublisher={selectedPublisher}
                        clearSelected={clearSelected}
                    />
                    {showCopies ?
                        <AdminCopyTable onCopySelection={handleCopySelection} setShowCopies={setShowCopies} />
                        : null
                    }
                    {showPublishers ?
                        <AdminPublisherTable onPublisherSelection={handlePublisherSelection} setShowPublishers={setShowPublishers} />
                        : null
                    }
                </>
            ) :
                <p>Access denied</p>
            }
        </Box>
    )
}

export default EditCopy
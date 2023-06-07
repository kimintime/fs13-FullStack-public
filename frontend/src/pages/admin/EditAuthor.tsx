import { Box, Button, Toolbar } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import { Author } from "../../types/author"
import EditAuthorForm from "../../components/admin/forms/EditAuthorForm"
import AdminAuthorTable from "../../components/admin/tables/AdminAuthorTable"

const EditAuthor = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [showAuthors, setShowAuthors] = useState(false)
    const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

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

    const handleShowAuthors = () => {
        setShowAuthors(!showAuthors)
    }

    const handleAuthorSelection = (author: Author) => {
        setSelectedAuthor(author);
    };

    const clearSelected = () => {
        setSelectedAuthor(null);
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
                        <Button onClick={handleShowAuthors}>Select Author</Button>
                    </Toolbar>
                    <EditAuthorForm
                        selectedAuthor={selectedAuthor}
                        clearSelected={clearSelected}
                    />
                    {showAuthors ?
                        <AdminAuthorTable onAuthorSelection={handleAuthorSelection} setShowAuthors={setShowAuthors}/>
                        : null
                    }
                </>
            ) :
                <p>Access denied</p>
            }
        </Box>
    )
}

export default EditAuthor
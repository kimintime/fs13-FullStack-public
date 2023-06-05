import { Box, Button, Toolbar } from "@mui/material"
import AddCopyForm from "../../components/admin/forms/AddCopyForm"
import AdminBookTable from "../../components/admin/tables/AdminBookTable"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import { Book } from "../../types/book"
import EditBookForm from "../../components/admin/forms/EditBookForm"

const EditBook = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [showBooks, setShowBooks] = useState(false)
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

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

    const handleShowBooks = () => {
        setShowBooks(!showBooks)
    }

    const handleBookSelection = (book: Book) => {
        setSelectedBook(book);
    };

    const clearSelected = () => {
        setSelectedBook(null);
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
                        <Button onClick={handleShowBooks}>Select Book</Button>
                    </Toolbar>
                    <EditBookForm
                        selectedBook={selectedBook}
                        clearSelected={clearSelected}
                    />
                    {showBooks ?
                        <AdminBookTable onBookSelection={handleBookSelection} setShowBooks={setShowBooks}/>
                        : null
                    }
                </>
            ) :
                <p>Access denied</p>
            }
        </Box>
    )
}

export default EditBook
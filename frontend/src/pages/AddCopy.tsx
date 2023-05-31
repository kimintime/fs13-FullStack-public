import { Box, Button, Toolbar } from "@mui/material"
import AddCopyForm from "../components/admin/AddCopyForm"
import AdminBookTable from "../components/admin/AdminBookTable"
import { useEffect, useState } from "react"
import AdminPublisherTable from "../components/admin/AdminPublisherTable"
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../redux/reducers/userReducer"
import { User } from "../types/user"
import { Book } from "../types/book"
import { Publisher } from "../types/publisher"

const AddCopy = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [showBooks, setShowBooks] = useState(false)
    const [showPublishers, setShowPublishers] = useState(false)
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
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


    const handleShowBooks = () => {
        setShowBooks(!showBooks)
        setShowPublishers(false)
    }

    const handleShowPublishers = () => {
        setShowPublishers(!showPublishers)
        setShowBooks(false)
    }

    const handleBookSelection = (book: Book) => {
        setSelectedBook(book);
    };

    const handlePublisherSelection = (publisher: Publisher) => {
        setSelectedPublisher(publisher);
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
                        <Button onClick={handleShowPublishers}>Select Publisher</Button>
                    </Toolbar>
                    <AddCopyForm
                        selectedBook={selectedBook}
                        selectedPublisher={selectedPublisher}
                    />
                    {showBooks ?
                        <AdminBookTable onBookSelection={handleBookSelection} setShowBooks={setShowBooks}/>
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

export default AddCopy
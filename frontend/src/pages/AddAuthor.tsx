import { Box, Button, Toolbar } from "@mui/material"
import AdminBookTable from "../components/admin/AdminBookTable"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../redux/reducers/userReducer"
import { User } from "../types/user"
import { Book } from "../types/book"
import AddAuthorForm from "../components/admin/AddAuthorForm"
import AdminAuthorTable from "../components/admin/AdminAuthorTable"
import { Author } from "../types/author"

const AddAuthor = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [showBooks, setShowBooks] = useState(false)
    const [showAuthors, setShowAuthors] = useState(false)
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
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

    const handleShowBooks = () => {
        setShowBooks(!showBooks)
        setShowAuthors(false)
    }

    const handleShowAuthors = () => {
        setShowAuthors(!showAuthors)
        setShowBooks(false)
    }

    const handleBookSelection = (book: Book) => {
        setSelectedBook(book);
    };

    const handleAuthorSelection = (author: Author) => {
        setSelectedAuthor(author);
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
                        <Button onClick={handleShowAuthors}>Select Author</Button>
                    </Toolbar>
                    <AddAuthorForm
                        selectedBook={selectedBook}
                        selectedAuthor={selectedAuthor}
                    />
                    {showBooks ?
                        <AdminBookTable onBookSelection={handleBookSelection} setShowBooks={setShowBooks}/>
                        : null
                    }
                    {showAuthors ?
                        <AdminAuthorTable onAuthorSelection={handleAuthorSelection} setShowAuthors={setShowAuthors} />
                        : null
                    }
                </>
            ) :
                <p>Access denied</p>
            }
        </Box>
    )
}

export default AddAuthor
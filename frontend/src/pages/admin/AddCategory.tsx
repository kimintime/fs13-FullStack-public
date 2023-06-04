import { Box, Button, Toolbar } from "@mui/material"
import AdminBookTable from "../../components/admin/tables/AdminBookTable"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import { Book } from "../../types/book"
import { Category } from "../../types/category"
import AddCategoryForm from "../../components/admin/forms/AddCategoryForm"
import AdminCategoryTable from "../../components/admin/tables/AdminCategoryTable"

const AddCategory = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [showBooks, setShowBooks] = useState(false)
    const [showCategories, setShowCategories] = useState(false)
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

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
        setShowCategories(false)
    }

    const handleShowCategories = () => {
        setShowCategories(!showCategories)
        setShowBooks(false)
    }

    const handleBookSelection = (book: Book) => {
        setSelectedBook(book);
    };

    const handleCategorySelection = (category: Category) => {
        setSelectedCategory(category);
    };

    const clearSelected = () => {
        setSelectedCategory(null);
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
                        <Button onClick={handleShowCategories}>Select Category</Button>
                    </Toolbar>
                    <AddCategoryForm
                        selectedBook={selectedBook}
                        selectedCategory={selectedCategory}
                        clearSelected={clearSelected}
                    />
                    {showBooks ?
                        <AdminBookTable onBookSelection={handleBookSelection} setShowBooks={setShowBooks}/>
                        : null
                    }
                    {showCategories ?
                        <AdminCategoryTable onCategorySelection={handleCategorySelection} setShowCategories={setShowCategories} />
                        : null
                    }
                </>
            ) :
                <p>Access denied</p>
            }
        </Box>
    )
}

export default AddCategory
import { Box, Button, Toolbar } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import { Category } from "../../types/category"
import EditCategoryForm from "../../components/admin/forms/EditCategoryForm"
import AdminCategoryTable from "../../components/admin/tables/AdminCategoryTable"

const EditCategory = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [showCategories, setShowCategories] = useState(false)
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

    const handleShowCategories = () => {
        setShowCategories(!showCategories)
    }

    const handleCategorySelection = (category: Category) => {
        setSelectedCategory(category);
    };

    const clearSelected = () => {
        setSelectedCategory(null);
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
                        <Button onClick={handleShowCategories}>Select Category</Button>
                    </Toolbar>
                    <EditCategoryForm
                        selectedCategory={selectedCategory}
                        clearSelected={clearSelected}
                    />
                    {showCategories ?
                        <AdminCategoryTable onCategorySelection={handleCategorySelection} setShowCategories={setShowCategories}/>
                        : null
                    }
                </>
            ) :
                <p>Access denied</p>
            }
        </Box>
    )
}

export default EditCategory
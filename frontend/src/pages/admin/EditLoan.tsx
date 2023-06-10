import { Box, Button, Toolbar } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import { Loan } from "../../types/loan"
import EditLoanForm from "../../components/admin/forms/EditLoanForm"
import AdminLoanTable from "../../components/admin/tables/AdminLoanTable"

const EditLoan = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [showLoans, setShowLoans] = useState(false)
    const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);

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

    const handleShowLoans = () => {
        setShowLoans(!showLoans)
    }

    const handleLoanSelection = (loan: Loan) => {
        setSelectedLoan(loan);
    }

    const clearSelected = () => {
        setSelectedLoan(null)
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
                        <Button onClick={handleShowLoans}>Select Loan</Button>
                    </Toolbar>
                    <EditLoanForm
                        selectedLoan={selectedLoan}
                        clearSelected={clearSelected}
                    />
                    {showLoans ?
                        <AdminLoanTable onLoanSelection={handleLoanSelection} setShowLoans={setShowLoans} />
                        : null
                    }
                </>
            ) :
                <p>Access denied</p>
            }
        </Box>
    )
}

export default EditLoan
import { useEffect, useState } from "react";
import {
    Box,
    Divider,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Typography
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { getOwnLoans, sortByDateDue, sortByDateLoaned, sortByReturned, sortByTitle } from "../redux/reducers/loanReducer";
import LoanFilter from "../components/LoanFilter";


const Loans = () => {
    const loans = useAppSelector(state => state.loan)
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [filter, setFilter] = useState<"Ongoing" | "Expired" | null>(null);
    const [sortOrderTitle, setSortOrderTitle] = useState<"asc" | "desc">("asc")
    const [sortOrderDateLoaned, setSortOrderDateLoaned] = useState<"asc" | "desc">("asc")
    const [sortOrderDateDue, setSortOrderDateDue] = useState<"asc" | "desc">("asc")
    const [sortOrderReturned, setSortOrderReturned] = useState<"asc" | "desc">("asc")

    const currentDate = new Date();

    useEffect(() => {
        dispatch(getOwnLoans({ filter: filter }))

    }, [dispatch, filter])

    const loansList = Array.isArray(loans) ? loans : [];

    const handleSortByTitle = () => {
        const actionType = sortOrderTitle === "asc" ? "asc" : "desc";
        dispatch(sortByTitle(actionType));
        setSortOrderTitle(actionType === "asc" ? "desc" : "asc");
    };

    const handleSortByDateLoaned = () => {
        const actionType = sortOrderDateLoaned === "asc" ? "asc" : "desc"
        dispatch(sortByDateLoaned(actionType))
        setSortOrderDateLoaned(actionType === "asc" ? "desc" : "asc")
    }

    const handleSortByDateDue = () => {
        const actionType = sortOrderDateDue === "asc" ? "asc" : "desc"
        dispatch(sortByDateDue(actionType))
        setSortOrderDateDue(actionType === "asc" ? "desc" : "asc")
    }

    const handleSortByReturned = () => {
        const actionType = sortOrderReturned === "asc" ? "asc" : "desc"
        dispatch(sortByReturned(actionType))
        setSortOrderReturned(actionType === "asc" ? "desc" : "asc")
    }

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "15px"
        }}
        >
            <LoanFilter
                filter={filter}
                setFilter={setFilter}
            />
            <Divider style={{ width: '67%' }} />
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={8}>
                    <Typography textAlign="center" variant="h6" marginBottom={5} marginTop={5}>Loans for {user?.userName}</Typography>
                    <Divider flexItem />
                    <TableContainer sx={{ mt: 5 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell onClick={handleSortByDateLoaned} style={{ cursor: "pointer" }}>
                                        <TableSortLabel active={true} direction={sortOrderDateLoaned}>Date Loaned</TableSortLabel>
                                    </TableCell>
                                    <TableCell align="center" onClick={handleSortByTitle} style={{ cursor: "pointer" }}>
                                        <TableSortLabel active={true} direction={sortOrderTitle}>Book</TableSortLabel>
                                    </TableCell>
                                    <TableCell align="center" onClick={handleSortByDateDue} style={{ cursor: "pointer" }}>
                                        <TableSortLabel active={true} direction={sortOrderDateDue}>Date Due</TableSortLabel>
                                    </TableCell>
                                    <TableCell align="center" onClick={handleSortByReturned} style={{ cursor: "pointer" }}>
                                        <TableSortLabel active={true} direction={sortOrderReturned}>Returned</TableSortLabel>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loansList.map(item =>
                                    <TableRow key={item.id}
                                        sx={{ "&:hover": { backgroundColor: 'lightgray' } }}>
                                        <TableCell align="left">{new Date(item.dateLoaned).toLocaleDateString('en-GB')}</TableCell>
                                        <TableCell align="center">
                                            {item.copy.title}
                                        </TableCell>
                                        <TableCell align="center"
                                            sx={{
                                                color: new Date(item.dateDue).getTime() <= new Date(currentDate).getTime() && !item.returned ? 'red' : 'inherit',
                                            }}
                                        >
                                            {new Date(item.dateDue).toLocaleDateString('en-GB')}</TableCell>
                                        <TableCell align="center">
                                            {
                                                item.returned === true ?
                                                    <IconButton
                                                        sx={{
                                                            '&:hover': {
                                                                backgroundColor: 'lightblue',
                                                            },
                                                        }}>
                                                        <CheckIcon />
                                                    </IconButton>
                                                    : null
                                            }
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Divider sx={{marginBottom: 10}} variant="middle" />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Loans
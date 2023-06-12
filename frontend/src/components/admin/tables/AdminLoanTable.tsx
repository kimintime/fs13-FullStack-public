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
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks"
import { getAllLoans, sortByDateDue, sortByDateLoaned, sortByName, sortByReturned, sortByTitle } from "../../../redux/reducers/loanReducer";
import SitePagination from "../../../components/SitePagination";
import LoanFilter from "../../../components/LoanFilter";
import { AdminLoanTableProps } from "../../../types/adminProps";
import { Loan } from "../../../types/loan";

const AdminLoansTable = ({ onLoanSelection, setShowLoans }: AdminLoanTableProps) => {
    const loans = useAppSelector(state => state.loan)
    const dispatch = useAppDispatch()
    const [filter, setFilter] = useState<"Ongoing" | "Expired" | null>(null);
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [sortOrderTitle, setSortOrderTitle] = useState<"asc" | "desc">("asc")
    const [sortOrderName, setSortOrderName] = useState<"asc" | "desc">("asc")
    const [sortOrderDateLoaned, setSortOrderDateLoaned] = useState<"asc" | "desc">("asc")
    const [sortOrderDateDue, setSortOrderDateDue] = useState<"asc" | "desc">("asc")
    const [sortOrderReturned, setSortOrderReturned] = useState<"asc" | "desc">("asc")
    const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
    const [hoveredRow, setHoveredRow] = useState(0)


    const currentDate = new Date();

    useEffect(() => {
        dispatch(getAllLoans({ pagination: { page: page, pageSize: pageSize }, filter: filter }))

    }, [dispatch, page, pageSize, filter])

    const loansList = Array.isArray(loans) ? loans : [];

    const handleLoanSelection = (loan: Loan) => {
        setSelectedLoan(loan);
        onLoanSelection(loan)

        setShowLoans(false)
    };

    const handleSortByTitle = () => {
        const actionType = sortOrderTitle === "asc" ? "asc" : "desc";
        dispatch(sortByTitle(actionType));
        setSortOrderTitle(actionType === "asc" ? "desc" : "asc");
    };

    const handleSortByName = () => {
        const actionType = sortOrderName === "asc" ? "asc" : "desc";
        dispatch(sortByName(actionType));
        setSortOrderName(actionType === "asc" ? "desc" : "asc");
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
                <Grid item md={10}>
                    <Typography textAlign="center" variant="h6" marginBottom={5} marginTop={5}>Loans</Typography>
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
                                    <TableCell onClick={handleSortByName} style={{ cursor: "pointer" }}>
                                        <TableSortLabel active={true} direction={sortOrderName}>User</TableSortLabel>
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
                                        sx={{
                                            cursor: "pointer",
                                            "&:hover": { backgroundColor: 'lightgray' },
                                            backgroundColor: item === selectedLoan ? 'lightgray' : 'transparent',
                                        }}
                                        onClick={() => handleLoanSelection(item)}
                                        onMouseEnter={() => setHoveredRow(item.id)}
                                        onMouseLeave={() => setHoveredRow(0)}
                                    >
                                        <TableCell align="left">{new Date(item.dateLoaned).toLocaleDateString('en-GB')}</TableCell>
                                        <TableCell align="center">{item.copy.title}</TableCell>
                                        <TableCell>{item.user.firstName}{" "}{item.user.lastName}</TableCell>
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
                                        <TableCell>
                                        {hoveredRow === item.id && (
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'lightblue',
                                                    },
                                                }}
                                                aria-label="Add to Selection"
                                                onClick={() => handleLoanSelection(item)}
                                            >
                                                <AddIcon />
                                            </IconButton>
                                        )}
                                    </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Divider variant="middle" />
                </Grid>
                <Grid container justifyContent="center" alignItems="center" marginTop={5}>
                    <Grid item md={3}>
                        <SitePagination
                            total={loansList.length}
                            page={page}
                            pageSize={pageSize}
                            setPage={setPage}
                            setPageSize={setPageSize}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AdminLoansTable
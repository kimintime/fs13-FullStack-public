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
    Typography
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { getOwnLoans } from "../redux/reducers/loanReducer";

const Loans = () => {
    const loans = useAppSelector(state => state.loan)
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [filter, setFilter] = useState<"Ongoing" | "Expired" | null>(null);
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)

    const currentDate = new Date();

    useEffect(() => {
        dispatch(getOwnLoans({ pagination: { page: page, pageSize: pageSize }, filter: filter }))

    }, [dispatch, page, pageSize, filter])

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "15px"
        }}
        >
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={8}>
                    <Typography textAlign="center" variant="h6" marginBottom={5}>Loans for {user?.userName}</Typography>
                    <Divider flexItem />
                    <TableContainer sx={{mt: 5 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date Loaned</TableCell>
                                    <TableCell align="center">Book</TableCell>
                                    <TableCell align="center">Due Date</TableCell>
                                    <TableCell align="center">Returned</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loans.map(item =>
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
                    <Divider variant="middle" />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Loans
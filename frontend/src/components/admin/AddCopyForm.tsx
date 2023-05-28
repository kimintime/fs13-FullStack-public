import { useState, useEffect } from "react"
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material"

import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { CreateCopy } from "../../types/copy"

const AddCopyForm = () => {
    const publisher = useAppSelector(state => state.publisher)
    const book = useAppSelector(state => state.book)
    const copy = useAppSelector(state => state.copy)
    const dispatch = useAppDispatch()

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
            }}
        >
            <Typography variant="subtitle1">Add Copy</Typography>
            <Paper
                sx={{ marginTop: 5, p: 2 }}
                component="form"
            // onSubmit={editUser}
            >
                <TableContainer>
                    <Table>
                        <TableHead />
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Book: </Typography>
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        variant="standard"
                                        // value={username}
                                        // onChange={(event) => setUsername(event.target.value)}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Publisher Name:</Typography>
                                </TableCell>
                                <TableCell>

                                    <TextField
                                        variant="standard"
                                        // value={firstName}
                                        // onChange={(event) => setFirstName(event.target.value)}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button>Add Copy</Button>
        </Box>
    )
}

export default AddCopyForm
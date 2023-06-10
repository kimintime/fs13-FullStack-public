import { useState, useEffect } from "react"
import {
    Box,
    Button,
    Divider,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    TextField,
    Tooltip,
    Typography
} from "@mui/material"

import { useAppDispatch } from "../../../hooks/reduxHooks"
import { EditLoanFormProps } from "../../../types/adminProps"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Loan } from "../../../types/loan"
import { deleteLoan, getLoanById, updateLoan } from "../../../redux/reducers/loanReducer"

const EditLoanForm = ({ selectedLoan, clearSelected }: EditLoanFormProps) => {
    const dispatch = useAppDispatch()
    const [loan, setLoan] = useState<Loan | null>(null);
    const [returned, setReturned] = useState(false)
    const [dueDate, setDueDate] = useState<Date | null>(null);

    useEffect(() => {
        if (selectedLoan)
            dispatch(getLoanById(selectedLoan.id)).then((data) => {
                const loanItemData = data.payload as Loan
                setLoan(loanItemData)
                setReturned(loanItemData.returned)
            })

    }, [dispatch, selectedLoan])

    const editLoan = () => {
        if (loan) {
            let updatedLoan
            if (dueDate !== null) {
                updatedLoan = {
                    ...loan,
                    id: loan.id,
                    userId: loan.user.id,
                    copyId: loan.copy.id,
                    returned: returned,
                    dateDue: new Date(dueDate)
                }
            } else {
                updatedLoan = {
                    ...loan,
                    id: loan.id,
                    userId: loan.user.id,
                    copyId: loan.copy.id,
                    returned: returned,
                    dateDue: loan.dateDue
                }
            }

            dispatch(updateLoan(updatedLoan))
            clearForm()
            setReturned(false)
        }
    }

    const removeLoan = (loan: Loan) => {
        if (loan)
            dispatch(deleteLoan(loan))

        clearForm()
    }

    const clearForm = () => {
        setDueDate(null)
        setReturned(false)
        clearSelected()
    }

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
            <Typography variant="subtitle1">Edit Book</Typography>
            {loan &&
                <Tooltip title="Delete Book">
                    <IconButton
                        sx={{
                            '&:hover': {
                                color: 'red',
                            },
                        }}
                        onClick={() => removeLoan(loan)}
                    >
                        <DeleteForeverIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            }
            <Paper
                sx={{ marginTop: 5, p: 2 }}
                component="form"
            >
                <TableContainer>
                    <Table>
                        <TableHead />
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Title: </Typography>
                                </TableCell>
                                <TableCell>
                                    {loan &&
                                        <Typography>{loan.copy.title}</Typography>
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">User: </Typography>
                                </TableCell>
                                <TableCell>
                                    {loan?.user && (
                                        <Typography>
                                            {loan.user.firstName}{" "}{loan.user.lastName}</Typography>
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Date Loaned: </Typography>
                                </TableCell>
                                <TableCell>
                                    {loan &&
                                        <Typography>{new Date(loan.dateLoaned).toLocaleDateString('en-GB')}</Typography>
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Date Due: </Typography>
                                </TableCell>
                                <TableCell>
                                    {loan &&
                                        <Typography>{new Date(loan.dateDue).toLocaleDateString('en-GB')}</Typography>
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">New Due Date:</Typography>
                                </TableCell>
                                <TableCell>
                                    {loan &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="date"
                                            value={dueDate ? dueDate.toISOString().split('T')[0] : ''}
                                            variant="standard"
                                            onChange={(event) => setDueDate(new Date(event.target.value))}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Returned: </Typography>
                                </TableCell>
                                <TableCell>
                                    {loan &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="checkbox"
                                            value={loan.returned || false}
                                            variant="filled"
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setReturned(event.target.checked)}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={editLoan}>Update</Button>
            <Button color="error" onClick={clearForm}>Clear</Button>
            <Divider flexItem />
        </Box >
    )
}

export default EditLoanForm
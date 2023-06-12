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
import { EditPublisherFormProps } from "../../../types/adminProps"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Publisher } from "../../../types/publisher";
import { deletePublisher, getPublisherById, updatePublisher } from "../../../redux/reducers/publisherReducer";


const EditPublisherForm = ({ selectedPublisher, clearSelected }: EditPublisherFormProps) => {
    const dispatch = useAppDispatch()
    const [publisher, setPublisher] = useState<Publisher | null>(null);
    const [name, setName] = useState("")

    useEffect(() => {
        if (selectedPublisher)
            dispatch(getPublisherById(selectedPublisher.id)).then((data) => {
                const publisherData = data.payload as Publisher
                setPublisher(publisherData)
                setName(publisherData.publisherName);
            })

    }, [dispatch, selectedPublisher])

    const editPublisher = () => {
        if (publisher) {
            const updatedPublisher = {
                ...publisher,
                publisherName: name
            }

            dispatch(updatePublisher(updatedPublisher))

            clearForm()
            setName("")
        }
    }

    const removePublisher = (publisher: Publisher) => {
        if (publisher)
            dispatch(deletePublisher(publisher))

        clearForm()
    }

    const clearForm = () => {
        setPublisher(null)
        setName("")
        clearSelected()
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
            }}
        >
            <Typography variant="subtitle1">Edit Publisher</Typography>
            {publisher &&
                <Tooltip title="Delete Publisher">
                    <IconButton
                        sx={{
                            '&:hover': {
                                color: 'red',
                            },
                        }}
                        onClick={() => removePublisher(publisher)}
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
                                    <Typography variant="subtitle2">Name: </Typography>
                                </TableCell>
                                <TableCell>
                                    {publisher &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="name"
                                            value={name}
                                            variant="standard"
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={editPublisher}>Update</Button>
            <Button color="error" onClick={clearForm}>Clear</Button>
            <Divider flexItem />
        </Box>
    )
}

export default EditPublisherForm
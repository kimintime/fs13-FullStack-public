import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, TableSortLabel } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { Copy } from "../types/copy";
import SitePagination from "./SitePagination";
import { getAllCopies, sortByAvailable, sortByPublisher, sortByTitle } from "../redux/reducers/copiesReducer";

const CopiesList = () => {
    const copies = useAppSelector(state => state.copy)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [sortOrderTitle, setSortOrderTitle] = useState<"asc" | "desc">("asc")
    const [sortOrderName, setSortOrderName] = useState<"asc" | "desc">("asc")
    const [sortOrderAvailable, setSortOrderAvailable] = useState<"asc" | "desc">("asc")

    useEffect(() => {
        dispatch(getAllCopies({ page: page, pageSize: pageSize }))
    }, [dispatch, page, pageSize])

    const copyList = Array.isArray(copies) ? copies : [];

    const handleSortByTitle = () => {
        const actionType = sortOrderTitle === "asc" ? "asc" : "desc";
        dispatch(sortByTitle(actionType));
        setSortOrderTitle(actionType === "asc" ? "desc" : "asc");
    };

    const handleSortByPublisher = () => {
        const actionType = sortOrderName === "asc" ? "asc" : "desc";
        dispatch(sortByPublisher(actionType));
        setSortOrderName(actionType === "asc" ? "desc" : "asc");
    };

    const handleSortByAvailable = () => {
        const actionType = sortOrderAvailable === "asc" ? "asc" : "desc";
        dispatch(sortByAvailable(actionType));
        setSortOrderAvailable(actionType === "asc" ? "desc" : "asc");
    };

    return (
        <Grid container justifyContent="center" alignItems="center" marginTop={5}>
            <Grid item md={6}>
                <Typography variant="h6" textAlign="center">Copies</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" onClick={handleSortByTitle} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortOrderTitle}>
                                        Title
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="center" onClick={handleSortByPublisher} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortOrderName}>
                                        Publisher
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="center" onClick={handleSortByAvailable} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortOrderAvailable}>
                                        Available
                                    </TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {copyList.map((copy: Copy) =>
                                <TableRow key={copy.id} sx={{ "cursor": "pointer", "&:hover": { backgroundColor: 'lightgray' } }}>
                                    <TableCell align="left" onClick={() => navigate(`/publishers/${copy.publisher.id}/books`)}>
                                        {copy.title}
                                    </TableCell>
                                    <TableCell onClick={() => navigate(`/publishers/${copy.publisher.id}/books`)}>
                                        {copy.publisher.publisherName}
                                    </TableCell>
                                    <TableCell align="right">
                                        {copy.isAvailable ?
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'lightblue',
                                                    },
                                                }}
                                            >
                                                <CheckIcon />
                                            </IconButton>
                                            :
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'lightblue',
                                                    },
                                                }}
                                                aria-label="Not available"
                                            >
                                                <DoNotDisturbIcon />
                                            </IconButton>
                                        }
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
                        total={copyList.length}
                        page={page}
                        pageSize={pageSize}
                        setPage={setPage}
                        setPageSize={setPageSize}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CopiesList;
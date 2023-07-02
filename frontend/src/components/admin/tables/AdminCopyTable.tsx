import { useEffect, useState } from "react"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, TableSortLabel } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks"
import SitePagination from "../../SitePagination";
import { AdminCopiesTableProps } from "../../../types/adminProps"
import AddIcon from '@mui/icons-material/Add';
import { Copy } from "../../../types/copy";
import { getAllCopies, sortByAvailable, sortByPublisher, sortByTitle } from "../../../redux/reducers/copiesReducer";
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

const AdminCopyTable = ({ onCopySelection, setShowCopies }: AdminCopiesTableProps) => {
    const copies = useAppSelector(state => state.copy)
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [sortOrderTitle, setSortOrderTitle] = useState<"asc" | "desc">("asc")
    const [sortOrderName, setSortOrderName] = useState<"asc" | "desc">("asc")
    const [sortOrderAvailable, setSortOrderAvailable] = useState<"asc" | "desc">("asc")
    const [selectedCopy, setSelectedCopy] = useState<Copy | null>(null);
    const [hoveredRow, setHoveredRow] = useState(0)

    useEffect(() => {
        dispatch(getAllCopies({ page, pageSize }));
    }, [dispatch, page, pageSize])

    const copiesList = Array.isArray(copies) ? copies : [];
    
    const handleCopySelection = (copy: Copy) => {
        setSelectedCopy(copy);
        onCopySelection(copy)

        setShowCopies(false)
    };

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
            <Grid item md={8}>
                <Typography variant="h6" textAlign="center">Copies</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={handleSortByTitle} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortOrderTitle}>
                                        Title
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell onClick={handleSortByPublisher} style={{ cursor: "pointer" }}>
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
                            {copiesList.map((copy: Copy) =>
                                <TableRow
                                    key={copy.id}
                                    sx={{
                                        cursor: "pointer",
                                        "&:hover": { backgroundColor: 'lightgray' },
                                        backgroundColor: copy === selectedCopy ? 'lightgray' : 'transparent',
                                    }}
                                    onClick={() => handleCopySelection(copy)}
                                    onMouseEnter={() => setHoveredRow(copy.id)}
                                    onMouseLeave={() => setHoveredRow(0)}
                                >
                                    <TableCell align="left">
                                        {copy.title}
                                    </TableCell>
                                    <TableCell>
                                        <Typography component="span" variant="subtitle2" color="text.secondary">
                                            {copy.publisher.publisherName}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
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
                                    <TableCell>
                                        {hoveredRow === copy.id && (
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'lightblue',
                                                    },
                                                }}
                                                aria-label="Add to Selection"
                                                onClick={() => handleCopySelection(copy)}
                                            >
                                                <AddIcon />
                                            </IconButton>
                                        )
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
                        total={copiesList.length}
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

export default AdminCopyTable;
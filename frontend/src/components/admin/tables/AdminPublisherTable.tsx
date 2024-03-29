import { useEffect, useState } from "react"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, IconButton } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks"
import { Publisher } from "../../../types/publisher";
import { getAllPublishers, sortByName } from "../../../redux/reducers/publisherReducer"
import SitePagination from "../../SitePagination";
import { AdminPublisherTableProps } from "../../../types/adminProps";
import AddIcon from '@mui/icons-material/Add';

const AdminPublisherTable = ({ onPublisherSelection, setShowPublishers }: AdminPublisherTableProps) => {
    const publishers = useAppSelector(state => state.publisher)
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
    const [selectedPublisher, setSelectedPublisher] = useState<Publisher | null>(null);
    const [hoveredRow, setHoveredRow] = useState(0)

    useEffect(() => {
        dispatch(getAllPublishers({ page, pageSize }))

    }, [dispatch, page, pageSize])

    const handlePublisherSelection = (publisher: Publisher) => {
        setSelectedPublisher(publisher);
        onPublisherSelection(publisher);

        setShowPublishers(false)
    };

    const publisherList = Array.isArray(publishers) ? publishers : [];

    const handleSortByName = () => {
        if (publisherList.length > 0) {
            const actionType = sortOrder === "asc" ? "asc" : "desc";
            dispatch(sortByName(actionType));
            setSortOrder(actionType === "asc" ? "desc" : "asc");

        } else {
            alert("Double-click 'Select Publisher' to show Publisher table.")
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" marginTop={5}>
            <Grid item md={10} marginBottom={2}>
                <Divider variant="middle" />
            </Grid>
            <Grid item md={3}>
                <Typography variant="h6" textAlign="center">Publishers</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" onClick={handleSortByName} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortOrder}>
                                        Name
                                    </TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {publisherList.map((publisher: Publisher) =>
                                <TableRow
                                    key={publisher.id}
                                    sx={{
                                        cursor: "pointer",
                                        "&:hover": { backgroundColor: 'lightgray' },
                                        backgroundColor: publisher === selectedPublisher ? 'lightgray' : 'transparent'
                                    }}
                                    onClick={() => handlePublisherSelection(publisher)}
                                    onMouseEnter={() => setHoveredRow(publisher.id)}
                                    onMouseLeave={() => setHoveredRow(0)}
                                >
                                    <TableCell align="center">
                                        {publisher.publisherName}
                                        {" "}
                                        {hoveredRow === publisher.id && (
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'lightblue',
                                                    },
                                                }}
                                                aria-label="Add to Selection"
                                                onClick={() => handlePublisherSelection(publisher)}
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
                        total={publisherList.length}
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

export default AdminPublisherTable;
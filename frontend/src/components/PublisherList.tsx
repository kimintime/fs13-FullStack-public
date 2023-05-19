import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { Publisher } from "../types/publisher";
import { getAllPublishers, sortByName } from "../redux/reducers/publisherReducer"
import SitePagination from "./SitePagination";

const PublisherList = () => {
    const publishers = useAppSelector(state => state.publisher)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

    useEffect(() => {
        dispatch(getAllPublishers({ page: page, pageSize: pageSize }))
    }, [dispatch, page, pageSize])

    const publisherList = Array.isArray(publishers) ? publishers : [];

    const handleSortByName = () => {
        const actionType = sortOrder === "asc" ? "asc" : "desc";
        dispatch(sortByName(actionType));
        setSortOrder(actionType === "asc" ? "desc" : "asc");
    };

    return (
        <Grid container justifyContent="center" alignItems="center" marginTop={5}>
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
                                <TableRow key={publisher.id} sx={{ "cursor": "pointer", "&:hover": { backgroundColor: 'lightgray' } }}>
                                    <TableCell align="center" onClick={() => navigate(`/publishers/${publisher.id}/books`)}>
                                        {publisher.publisherName}
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

export default PublisherList;
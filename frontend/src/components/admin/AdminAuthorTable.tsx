import { useEffect, useState } from "react"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { getAllAuthors, sortByLastName } from "../../redux/reducers/authorReducer"
import { Author } from "../../types/author";
import SitePagination from "../SitePagination"
import { AdminAuthorTableProps } from "../../types/adminProps"

const AdminAuthorTable = ({ onAuthorSelection, setShowAuthors }: AdminAuthorTableProps) => {
    const authors = useAppSelector(state => state.author)
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

    useEffect(() => {
        dispatch(getAllAuthors({ page: page, pageSize: pageSize }))
    }, [dispatch, page, pageSize])

    const authorList = Array.isArray(authors) ? authors : [];

    const handleAuthorSelection = (author: Author) => {
        setSelectedAuthor(author);
        onAuthorSelection(author);

        setShowAuthors(false)
    };

    const handleSortByName = () => {
        const actionType = sortOrder === "asc" ? "asc" : "desc";
        dispatch(sortByLastName(actionType));
        setSortOrder(actionType === "asc" ? "desc" : "asc");
    };

    return (
        <Grid container justifyContent="center" alignItems="center" marginTop={5}>
            <Grid item md={3}>
                <Typography variant="h6" textAlign="center">Authors</Typography>
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
                            {authorList.map((author: Author) =>
                                <TableRow key={author.id} 
                                    sx={{ 
                                        "cursor": "pointer", 
                                        "&:hover": { backgroundColor: 'lightgray' },
                                        backgroundColor: author === selectedAuthor ? 'lightgray' : 'transparent' 
                                        }}
                                    onClick={() => handleAuthorSelection(author)}
                                    >
                                    <TableCell align="center">
                                        {author.firstName}{" "}{author.lastName}
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
                        total={authorList.length}
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

export default AdminAuthorTable;
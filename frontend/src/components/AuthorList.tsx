import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { getAllAuthors } from "../redux/reducers/authorReducer"
import { Author } from "../types/author";
import SitePagination from "./SitePagination"

const AuthorList = () => {
    const authors = useAppSelector(state => state.author)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)


    useEffect(() => {
        dispatch(getAllAuthors({ page: page, pageSize: pageSize }))
    }, [dispatch, page, pageSize])

    const authorList = Array.isArray(authors) ? authors : [];


    return (
        <Grid container justifyContent="center" alignItems="center" marginTop={5}>
            <Grid item md={3}>
                <Typography variant="h6" textAlign="center">Authors</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {authorList.map((author: Author) =>
                                <TableRow key={author.id} sx={{ "cursor": "pointer", "&:hover": { backgroundColor: 'lightgray' } }}>
                                    <TableCell align="center" onClick={() => navigate(`/authors/${author.id}/books`)}>
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
                <Grid item md={3} textAlign={"center"}>
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

export default AuthorList;
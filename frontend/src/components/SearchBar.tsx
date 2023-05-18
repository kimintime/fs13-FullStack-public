import { useState } from "react"
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    Paper,
    InputBase,
    IconButton
} from "@mui/material"

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import BackspaceIcon from '@mui/icons-material/Backspace';

import { useAppDispatch } from "../hooks/reduxHooks"
import { getBooksByTitle, sortByTitle, sortByName, sortByCopies, getAllBooks } from "../redux/reducers/bookReducer";

const SearchBar = () => {
    const dispatch = useAppDispatch()
    const [typeCat, setTypeCat] = useState('')
    const [type, setType] = useState('')
    const [search, setSearch] = useState('')

    const handleSubmit = () => {
        if (typeCat === "title") {

            if (type === "desc") {
                dispatch(sortByTitle("desc"))

            } else {
                dispatch(sortByTitle("asc"))
            }
        }

        if (typeCat === "author") {

            if (type === "desc") {
                dispatch(sortByName("desc"))

            } else {

                dispatch(sortByName("asc"))
            }
        }

        if (typeCat === "copies") {

            if (type === "desc") {
                dispatch(sortByCopies("desc"))

            } else {

                dispatch(sortByCopies("asc"))
            }
        }

        if (typeCat === "clear") {
            setTypeCat('')
            setType('')
        }

    }

    const handleSearch = (event: any) => {
        event.preventDefault()
        const page = 1
        const pageSize = 25

        if (search) {
            dispatch(getBooksByTitle(search))

        } else {
            dispatch(getAllBooks({ page, pageSize }))
        }

        setSearch("")
    }

    return (
        <Box
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
                marginBottom: 5
            }}>
            <FormControl variant="standard" sx={{ marginRight: 1, minWidth: 120 }}>
                <InputLabel>Sort by:</InputLabel>
                <Select
                    value={typeCat}
                    label="Sort"
                    onChange={(event) => setTypeCat(event.target.value)}
                >
                    <MenuItem value="author">Sort by Author</MenuItem>
                    <MenuItem value="title">Sort by Title</MenuItem>
                    <MenuItem value="copies">Sort by Availability</MenuItem>
                    <MenuItem value="clear"></MenuItem>
                </Select>
            </FormControl>

            <Button
                style={{ margin: "5px" }}
                variant="contained"
                type="submit"
                onClick={handleSubmit}
            >
                Sort
                {type === "asc" && <ArrowUpwardIcon />}
                {type === "desc" && <ArrowDownwardIcon />}
                {type === "clear" && null}
            </Button>
            <FormControl sx={{ marginLeft: 2, minWidth: 120, marginRight: 5 }}>
                <RadioGroup
                    row
                    aria-labelledby="asc-or-desc"
                    name="radio-buttons-group"
                    onChange={(event) => setType(event.target.value)}
                >
                    <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
                    <FormControlLabel value="desc" control={<Radio />} label="Descending" />
                </RadioGroup>
            </FormControl>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginLeft: 2 }}
                onSubmit={handleSearch}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search products"
                    inputProps={{ 'aria-label': 'search' }}
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <IconButton onClick={() => setSearch("")}>
                    <BackspaceIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={handleSearch}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    )
}

export default SearchBar
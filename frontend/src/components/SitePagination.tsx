import { Box, FormControl, MenuItem, Pagination, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const SitePagination = (props: {
    total: number,
    page: number,
    pageSize: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    setPageSize: React.Dispatch<React.SetStateAction<number>>
}) => {

    const [pageCount, setPageCount] = useState(1)

    const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
        const pageSize = Number(event.target.value);
        props.setPageSize(pageSize);

        const count = Math.ceil(props.total / pageSize)
        setPageCount(count)
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" marginTop={2} marginBottom={5}>
            <FormControl sx={{ display: "flex", alignItems: "center" }}>
                <Select
                    sx={{ marginBottom: 5, disableUnderline: "true" }}
                    value={props.pageSize}
                    onChange={handlePageSizeChange}
                    variant="standard"
                >   
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                </Select>
            </FormControl>
                <Pagination
                    count={pageCount}
                    page={props.page}
                    onChange={(event, value) => props.setPage(value)}
                />
        </Box>
    )
}

export default SitePagination;
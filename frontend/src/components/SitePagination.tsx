import { Box, FormControl, MenuItem, Pagination, Select, SelectChangeEvent } from "@mui/material";

const SitePagination = (props: {
    total: number,
    page: number,
    pageSize: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    setPageSize: React.Dispatch<React.SetStateAction<number>>
}) => {

    const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
        const pageSize = Number(event.target.value);
        props.setPageSize(pageSize);
    };

    //console.log(props.pageSize, props.total)

    return (
        <Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>

            <FormControl sx={{ display: "flex", alignItems: "center" }}>
                <Select
                    sx={{ marginBottom: 5, disableUnderline: "true" }}
                    value={props.pageSize}
                    onChange={handlePageSizeChange}
                    variant="standard"
                >   
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                </Select>
            </FormControl>
            
                <Pagination
                    count={props.total}
                    page={props.page}
                    onChange={(event, value) => props.setPage(value)}
                    disabled={(props.total < props.pageSize) && props.page === 1}
                />
        </Box>
    )
}

export default SitePagination;
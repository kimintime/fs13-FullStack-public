import { Box, IconButton, Pagination } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SitePagination = (props: {
    total: number, 
    page: number, 
    pageSize: number, 
    setPage: React.Dispatch<React.SetStateAction<number>>, 
    setPageSize: React.Dispatch<React.SetStateAction<number>>
}) => {

    const pageCount  = Math.ceil(props.total / props.pageSize);

    // const handleDown = () => {
    //     if (props.page > 1)
    //         props.setPage(props.page - 1)
    // }

    // const handleUp = () => {
    //     if (props.page < props.pageCount)
    //         props.setPage(props.page + 1)
    // }

    return (
        <Box display="flex" justifyContent="center" marginTop={2}>
            {/* <IconButton onClick={handleDown}>
                <ChevronLeftIcon />
            </IconButton> */}
            <Pagination
                count={pageCount}
                page={props.page}
                onChange={(event, value) => props.setPage(value)}
                disabled={pageCount <= 1 || props.page === 1 || props.page === pageCount}
            />
            {/* <IconButton onClick={handleUp}>
                <ChevronRightIcon />
            </IconButton> */}
        </Box>
    )
}

export default SitePagination;
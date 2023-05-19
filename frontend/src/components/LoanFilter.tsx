import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material"

type LoanFilterProps = {
    filter: "Ongoing" | "Expired" | null;
    setFilter: React.Dispatch<React.SetStateAction<"Ongoing" | "Expired" | null>>;
};

const LoanFilter: React.FC<LoanFilterProps> = ({ filter, setFilter }) => {

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
                    value={filter}
                    label="Sort"
                    onChange={(event) => setFilter(event.target.value as "Ongoing" | "Expired" | null)}
                >
                    <MenuItem value="ongoing">Ongoing Loans</MenuItem>
                    <MenuItem value="expired">Expired Loans</MenuItem>
                    <MenuItem value=" ">All Loans</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default LoanFilter
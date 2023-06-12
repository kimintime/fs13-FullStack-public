import { useEffect, useState } from "react"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, TableSortLabel } from "@mui/material"
import { useAppDispatch } from "../../../hooks/reduxHooks"
import SitePagination from "../../SitePagination"
import { User } from "../../../types/user"
import { getAllUsers } from "../../../redux/reducers/userReducer"
import { AdminUserTableProps } from "../../../types/adminProps"
import AddIcon from '@mui/icons-material/Add';

const AdminUserTable = ({ onUserSelection, setShowUsers }: AdminUserTableProps) => {
    const [users, setUsers] = useState<User[]>([])
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [sortName, setSortName] = useState<"asc" | "desc">("asc");
    const [sortEmail, setSortEmail] = useState<"asc" | "desc">("asc");
    const [sortUsername, setSortUsername] = useState<"asc" | "desc">("asc");
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [hoveredRow, setHoveredRow] = useState(0)

    useEffect(() => {
        dispatch(getAllUsers({ page: page, pageSize: pageSize }))
            .then((response: any) => {
                const usersData = response.payload as User[];
                setUsers(usersData || []);
            })
    }, [dispatch, page, pageSize])

    const usersList = Array.isArray(users) ? users : [];

    const handleUserSelection = (user: User) => {
        setSelectedUser(user);
        onUserSelection(user)

        setShowUsers(false)
    };

    const handleSortByName = () => {
        const actionType = sortName === "asc" ? "asc" : "desc";

        if (actionType === "asc") {
            users.sort((a, b) => a.lastName.localeCompare(b.lastName))

        } else {
            users.sort((a, b) => b.lastName.localeCompare(a.lastName))
        }

        setSortName(actionType === "asc" ? "desc" : "asc");
    }

    const handleSortByEmail = () => {
        const actionType = sortEmail === "asc" ? "asc" : "desc";

        if (actionType === "asc") {
            users.sort((a, b) => a.email.localeCompare(b.email))

        } else {
            users.sort((a, b) => b.email.localeCompare(a.email))
        }

        setSortEmail(actionType === "asc" ? "desc" : "asc");
    }

    const handleSortByUsername = () => {
        const actionType = sortUsername === "asc" ? "asc" : "desc";

        if (actionType === "asc") {
            users.sort((a, b) => a.userName.localeCompare(b.userName))

        } else {
            users.sort((a, b) => b.userName.localeCompare(a.userName))
        }

        setSortUsername(actionType === "asc" ? "desc" : "asc");
    }


    return (
        <Grid container justifyContent="center" alignItems="center" marginTop={5}>
            <Grid item md={6}>
                <Typography variant="h6" textAlign="center">Users</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={handleSortByName} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortName}>Name</TableSortLabel>
                                </TableCell>
                                <TableCell align="center" onClick={handleSortByUsername} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortUsername}>Username</TableSortLabel>
                                </TableCell>
                                <TableCell align="center" onClick={handleSortByEmail} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortEmail}>Email</TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usersList.map((user: User) =>
                                <TableRow
                                    key={user.id}
                                    sx={{
                                        "cursor": "pointer", "&:hover": { backgroundColor: 'lightgray' },
                                        backgroundColor: user === selectedUser ? 'lightgray' : 'transparent',
                                    }}
                                    onClick={() => handleUserSelection(user)}
                                    onMouseEnter={() => setHoveredRow(user.id)}
                                    onMouseLeave={() => setHoveredRow(0)}
                                >
                                    <TableCell>{user.firstName}{" "}{user.lastName}</TableCell>
                                    <TableCell align="center">{user.userName}</TableCell>
                                    <TableCell align="center">{user.email}</TableCell>
                                    <TableCell>
                                        {hoveredRow === user.id && (
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'lightblue',
                                                    },
                                                }}
                                                aria-label="Add to Selection"
                                                onClick={() => handleUserSelection(user)}
                                            >
                                                <AddIcon />
                                            </IconButton>
                                        )}
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
                        total={usersList.length}
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

export default AdminUserTable;
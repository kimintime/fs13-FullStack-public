import { useState, useEffect } from "react"
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material"

import EditIcon from "@mui/icons-material/Edit"

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { getOwnProfile, logout, setUser, updateOwnAccount, updateOwnPassword } from "../redux/reducers/userReducer"
import { User, UserProfileEdit, UserUpdatePassword } from "../types/user"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { NavLink } from "react-router-dom"

const Profile = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const [firstName, setFirstName] = useState(user?.firstName || '')
    const [lastName, setLastName] = useState(user?.lastName || '')
    const [username, setUsername] = useState(user?.userName || '')
    const [email, setEmail] = useState(user?.email || '')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    //const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [change, setChange] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);


    useEffect(() => {
        if (!isUserDataLoaded && user) {
            dispatch(getOwnProfile(user)).then((response) => {
                const userProfile = response.payload as User;
                dispatch(setUser(userProfile));
                setFirstName(userProfile.firstName);
                setLastName(userProfile.lastName);
                setUsername(userProfile.userName);
                setEmail(userProfile.email);
                setIsUserDataLoaded(true);
            });
        }
    }, [dispatch, user, isUserDataLoaded]);

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleChange = () => {
        setChange(!change)
    }

    const editUser = () => {
        const newUser: UserProfileEdit = {
            ...user,
            userName: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
        };

        if (oldPassword || newPassword) {
            if (!oldPassword || !newPassword) {
                alert("Both fields must be filled out");
                return;
            } else if (oldPassword === newPassword) {
                alert("Old password and new password cannot be the same");
                return;
            } else {
                const updatePassword: UserUpdatePassword = {
                    oldPassword: oldPassword,
                    newPassword: newPassword,
                };
                dispatch(updateOwnPassword(updatePassword))
                    .then(() => {
                        dispatch(updateOwnAccount(newUser)).then(() => {
                            setChange(false);
                            dispatch(getOwnProfile(user!)).then((response) => {
                                const userProfile = response.payload as User;
                                dispatch(setUser(userProfile));
                                setFirstName(userProfile.firstName);
                                setLastName(userProfile.lastName);
                                setUsername(userProfile.userName);
                                setEmail(userProfile.email);
                                setOldPassword("");
                                setNewPassword("");
                            });
                        });
                    })
                    .catch(() => {
                        alert("Incorrect old password");
                    });
            }
        } else {
            dispatch(updateOwnAccount(newUser)).then(() => {
                setChange(false);
                dispatch(getOwnProfile(user!)).then((response) => {
                    const userProfile = response.payload as User;
                    dispatch(setUser(userProfile));
                    setFirstName(userProfile.firstName);
                    setLastName(userProfile.lastName);
                    setUsername(userProfile.userName);
                    setEmail(userProfile.email);
                });
            });
        }
    };

    const userLogout = () => {
        dispatch(logout())

        window.location.reload();
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
            }}
        >
            <Typography variant="subtitle1">{user?.userName}</Typography>
            <Typography variant="subtitle2">{user?.roles}</Typography>
            {!user?.roles?.includes("Admin") ?
                <IconButton
                    color={change ? "secondary" : "primary"}
                    onClick={handleChange}
                >
                    <EditIcon />
                </IconButton>
                : null
            }
            <Paper
                sx={{ marginTop: 5, p: 2 }}
                component="form"
                onSubmit={editUser}
            >
                <TableContainer>
                    <Table>
                        <TableHead />
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Username:</Typography>
                                </TableCell>
                                <TableCell>
                                    {change ?
                                        <TextField
                                            variant="standard"
                                            value={username}
                                            onChange={(event) => setUsername(event.target.value)}
                                        /> : user?.userName}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Name:</Typography>
                                </TableCell>
                                <TableCell>
                                    {change ?
                                        <TextField
                                            variant="standard"
                                            value={firstName}
                                            onChange={(event) => setFirstName(event.target.value)}
                                        /> : user?.firstName}
                                    {" "}
                                    {change ?
                                        <TextField
                                            variant="standard"
                                            value={lastName}
                                            onChange={(event) => setLastName(event.target.value)}
                                        /> : user?.lastName}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Email:</Typography>
                                </TableCell>
                                <TableCell>
                                    {change ?
                                        <TextField
                                            variant="standard"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        /> : user?.email}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Password:</Typography>
                                </TableCell>
                                <TableCell>
                                    {change ?
                                        <TextField
                                            variant="standard"
                                            type={showPassword ? 'text' : 'password'}
                                            value={oldPassword}
                                            onChange={(event) => setOldPassword(event.target.value)}
                                            InputProps={{
                                                endAdornment:
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                            }}

                                        /> : "************"}
                                </TableCell>
                            </TableRow>
                            {change ?
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2"> New Password:</Typography>
                                    </TableCell>
                                    <TableCell>
                                        {change ?
                                            <TextField
                                                variant="standard"
                                                type={showPassword ? 'text' : 'password'}
                                                value={newPassword}
                                                onChange={(event) => setNewPassword(event.target.value)}
                                                InputProps={{
                                                    endAdornment:
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                }}

                                            /> : "************"}
                                    </TableCell>
                                </TableRow>
                                : null
                            }
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            {!user?.roles?.includes("Admin") && change ?
                <Button onClick={editUser}>Update Profile</Button>
                : null
            }
            <NavLink to={"/user/loans"}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ marginTop: 5 }}
                >
                    Loans
                </Button>
            </NavLink>

            <Button
                variant="contained"
                color="error"
                sx={{ marginTop: 5 }}
                onClick={userLogout}
            >
                Logout
            </Button>
        </Box>
    )
}

export default Profile
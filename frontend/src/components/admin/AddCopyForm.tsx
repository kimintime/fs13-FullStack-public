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

import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import { CreateCopy } from "../../types/copy"

const AddCopyForm = () => {
    const publisher = useAppSelector(state => state.publisher)
    const book = useAppSelector(state => state.book)
    const copy = useAppSelector(state => state.copy)
    const dispatch = useAppDispatch()


    const handleChange = () => {
        setChange(!change)
    }

    const addCopy = () => {
        const newCopy: CreateCopy = {
          ...copy,
          bookId:
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
        
        if (user?.roles.includes("Admin"))
            window.location.reload();
    }

    //console.log(user)

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

export default AddCopyForm
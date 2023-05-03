import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material"
import { useAppDispatch } from "../hooks/reduxHooks"
import { register } from "../redux/reducers/userReducer"
import { UserRegister } from "../types/user"

const Register = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createNewUser = () => {
        if (password !== confirmPassword) {
            alert("Please enter a valid password")

        } else {
            const newUser: UserRegister = {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,

            }
            dispatch(register(newUser))
            navigate("/login")
        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 1,
            }}
        >
            <Paper 
                sx={{ marginTop: 5, p: 2 }} 
                component="form"
            >
                <Typography variant="h5" sx={{ marginTop: 3 }} textAlign={"center"}>
                    Create new account
                </Typography>
                <Divider variant="middle" />
                <Box
                    sx={{ display: "flex", flexDirection: "column", marginTop: 2 }}
                >
                    <Typography variant="subtitle2">
                        Username:
                    </Typography>
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        type="name"
                        value={userName}
                        placeholder="Enter your username here"
                        variant="standard"
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <Typography
                        variant="subtitle2"
                        sx={{ marginTop: 2 }}
                    >
                        Enter your email address:
                    </Typography>
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        variant="standard"
                        type="email"
                        value={email}
                        placeholder="Enter a valid email address"
                        autoComplete="on"
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                    <Typography variant="subtitle2">
                        First Name:
                    </Typography>
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        type="name"
                        value={firstName}
                        placeholder="Enter your first name here"
                        variant="standard"
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <Typography variant="subtitle2">
                        Last Name:
                    </Typography>
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        type="name"
                        value={lastName}
                        placeholder="Enter your last name here"
                        variant="standard"
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
                        Enter your password:
                    </Typography>
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        variant="filled"
                        label="Password"
                        type="password"
                        value={password}
                        autoComplete="new-password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
                        Confirm Password:
                    </Typography>
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        variant="standard"
                        label="Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                </Box>
                <Box
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 5,
                        marginBottom: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        onClick={() => createNewUser()}
                    >
                        Create New Account
                    </Button>
                </Box>
                <Divider variant="middle" />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 2
                }}>
                    <Typography variant="caption">
                        Already have an account?
                    </Typography>
                    <Button
                        sx={{ marginTop: 1 }}
                        variant="contained"
                        onClick={() => navigate("/login")}
                    >
                        Sign in
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default Register
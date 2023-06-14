import { useEffect, useState } from "react"
import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { login } from "../redux/reducers/userReducer"

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const user = useAppSelector(state => state.user);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        dispatch(login({ email: email, password: password }))
    }

    useEffect(() => {
         if (user !== null) {
            navigate("/");
        } 

    }, [user, navigate]);


    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 3,
        }}>
            <Paper
                sx={{ marginTop: 5, maxWidth: 500 }}
                component="form"
            >
                <Typography
                    variant="h5"
                    sx={{ marginTop: 3, marginLeft: 5 }}
                >
                    Sign In
                </Typography>
                <Divider variant="middle" />
                <Typography
                    variant="subtitle2"
                    sx={{ marginTop: 2, marginLeft: 5 }}
                >
                    Enter your email address
                </Typography>
                <TextField
                    sx={{ marginLeft: 5, marginTop: 1, minWidth: 300 }}
                    required
                    label="Email"
                    type="email"
                    placeholder="Enter a valid email address"
                    autoComplete={"on"}
                    variant="outlined"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Typography
                    variant="subtitle2"
                    sx={{ marginLeft: 5, marginTop: 2 }}
                >
                    Enter your password
                </Typography>
                <TextField
                    sx={{ marginLeft: 5, marginTop: 1, minWidth: 300 }}
                    required
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 5,
                        marginBottom: 2
                    }}
                >
                    <Button
                        color="success"
                        variant="contained"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </Box>
                <Box sx={{ marginLeft: 4, marginRight: 4, marginBottom: 4 }}>
                    <Divider variant="middle" />
                    <Typography align="center">New user?</Typography>
                    <Box sx={{ display: "flexbox", justifyContent: "center", alignItems: "center" }}>
                        <NavLink to='/register' style={{ textDecoration: 'none', color: 'white' }}>
                            <Button
                                variant="contained"
                                sx={{ marginTop: 2, width: 300 }}
                            >
                                Register
                            </Button>
                        </NavLink>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default Login
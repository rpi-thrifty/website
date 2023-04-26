import React, { useState } from 'react';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Header } from './Header';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to handle form submission goes here
    }

    const handleGoogleLogin = () => {
        // Code to handle Google login goes here
    }

    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Box sx={{ p: 2, boxShadow: '0px 3px 6px #00000029', borderRadius: '8px', backgroundColor: '#FFFFFF' }}>
                            <Typography variant="h5" component="h1" align="center" gutterBottom>
                                Welcome back!
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    margin="normal"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    margin="normal"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <Box sx={{ mt: 3 }}>
                                    <Button fullWidth variant="contained" type="submit" startIcon={<LoginIcon />}>
                                        Login
                                    </Button>
                                </Box>
                            </form>
                            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                                New users sign up <Link href="/signup">here</Link>.
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Button fullWidth variant="contained" onClick={handleGoogleLogin} sx={{ bgcolor: '#F14336', color: '#FFFFFF' }}>
                                    Log in with Google
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

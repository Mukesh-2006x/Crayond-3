import React, { useState } from 'react';
import '../signin/signin.css'; // Ensure path is correct
import Overlay from '../../assets/overlay.png';
import { Button, TextField, Typography, Divider, Box, Link, Paper } from '@mui/material';
import { Google as GoogleIcon, Email as OutlookIcon } from '@mui/icons-material';
import GoogleIC from '../../assets/google.png';
import Logo from '../../assets/logo.png';
import Outlook from '../../assets/outlook.png';

const Signin = () =>  {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '94vh', position: 'relative' }}>
            <img src={Overlay} alt="Overlay" style={{ width: '100%' }} />

            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 100,
                    }}
                >
                    <Box>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 4,
                                maxWidth: 300,
                                borderRadius: 2,
                            }}
                        >
                            <img src={Logo} style={{ width: '159px' }} alt="Logo" />
                            <Typography variant="h6" component="h2" sx={{ mt: 2, fontWeight: 'bold' ,color:'#353448'}}>
                                Sign up
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                                You’re just a few details away from setting up a culture of feedback and a thriving environment.
                            </Typography>

                            <Button
                                variant="outlined"
                                startIcon={<img src={GoogleIC} style={{ width: '16px' }} alt="Google Icon" />}
                                fullWidth
                                sx={{
                                    mb: 1.5,
                                    color: '#353448',
                                    border: 'none',
                                    backgroundColor:'#F8F8F8',
                                    justifyContent: 'flex-start',
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#f4f4f4' },
                                }}
                            >
                                <span style={{ marginLeft: '50px',fontSize:'14px' }}>Sign up with Google</span>
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<img src={Outlook} style={{ width: '16px' }} alt="Outlook Icon" />}
                                fullWidth
                                sx={{
                                    mb: 1.5,
                                    color: '#353448',
                                    border: 'none',
                                    
                                    justifyContent: 'flex-start',
                                    textTransform: 'none',
                                    backgroundColor:'#F8F8F8',
                                    '&:hover': { backgroundColor: '#f4f4f4' },
                                }}
                            >
                                <span style={{ marginLeft: '50px',fontSize:'14px' }}>Sign up with Outlook</span>
                            </Button>

                            <Divider sx={{ my: 2 ,paddingBottom:'20px',marginLeft:'60px',marginRight:'60px' ,color:'#71707E',fontSize:'12px'}}>or</Divider>

                            <TextField
    label="Work Email"
    type="email"
    fullWidth
    required
    variant="outlined"
    defaultValue="atomicsignals@gmail.com"
    sx={{ mb: 2 }}
    InputProps={{
        sx: { height: '40px' }, 
    }}
/>


                            <Button
                                variant="contained"
                               
                                fullWidth
                                sx={{
                                    textTransform: 'none',
                                    fontSize: 14,
                                    backgroundColor: '#49C792',
                                    padding: '6px',
                                    boxShadow:'none'
                                }}
                            >
                                Sign up
                            </Button>

                            <Box sx={{ textAlign: 'center', mt: 2 }}>
                                <Typography variant="body2" sx={{ color: '#71707E' }}>
                                    Already have an account?{' '}
                                    <Link href="/login" color="#353448" fontWeight="bold">
                                        Log in
                                    </Link>
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </div>
            )}
        </div>
    );
}
export default Signin;
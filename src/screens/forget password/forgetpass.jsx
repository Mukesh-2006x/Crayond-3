import React, { useState } from 'react';
import '../signin/signin.css'; // Ensure path is correct
import Overlay from '../../assets/overlay.png';
import { Button, TextField, Typography, Divider, Box, Link, Paper } from '@mui/material';
import { Google as GoogleIcon, Email as OutlookIcon } from '@mui/icons-material';
import GoogleIC from '../../assets/google.png';
import Logo from '../../assets/logo.png';
import Outlook from '../../assets/outlook.png';

const Forgetpass = () =>  {
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
                            Forgot Password
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                            Provide us the registered email to reset your password.
                            </Typography>

                           

                            <p style={{fontSize:'12px',paddingBottom:'8px',display:'flex',color:'#262C33'}}>Email</p>
            <TextField
              fullWidth
              required
              color='none'
             
             bgcolor="none"
              InputProps={{
                sx: {borderColor:'#EBEBEB',
                    height: '35px',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderWidth: 1,
                    borderColor:'#EBEBEB'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderWidth: 1, 
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#EBEBEB',  
                      },
                  },
              }}
            />



                          

                           
                              <Button
                                variant="contained"
                              href='./resetpass'
                                fullWidth
                                sx={{
                                    textTransform: 'none',
                                    fontSize: 14,
                                    backgroundColor: '#49C792',
                                    padding: '6px',
                                    boxShadow:'none',
                                    marginTop:'18px'
                                }}
                            >
                                Get link
                            </Button>
                            <Box sx={{ textAlign: 'center', mt: 2 }}>
                                <Typography variant="body2" sx={{ color: '#71707E' }}>
                                Remembered the password?{' '}
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
export default Forgetpass;
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, ToggleButton, ToggleButtonGroup, colors } from '@mui/material';
import Logo from '../../assets/logo.png';
import Feedback from '../../assets/feedback.png';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';
import '../signup/signup.css'; 
import { BorderStyleRounded, Padding } from '@mui/icons-material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';











const top100Films = [
    { title: 'CEO', year: 1994 },
    { title: 'COO', year: 1972 },

   
  ];

  
  const filter = createFilterOptions();

  const Signup = () => {

    
    const [selectedBox, setSelectedBox] = useState(0);
    const [message, setMessage] = useState('Only reporting managers can give feedback');
    const boxColors = ['Only reporting managers can give feedback ', 'Team members can give feedback to another team member except the reporting manager', 'Team members can give feedback to another team member including the reporting manager'];
    const handleClick = (boxIndex) => {
      setSelectedBox(boxIndex);
      setMessage(`${boxColors[boxIndex]}`);
    };
  
  
    const boxStyle = (index) => ({
     
      marginRight: '10px',
      marginLeft: '10px',
      marginBottom: '10px',
      backgroundColor: selectedBox === index ? '#EEFBF6' : 'white',
      border : selectedBox === index ? '1.5px solid #49C792' :'1px solid #ccc',
      borderRadius:'5px',
      display: 'inline-block',
      cursor: 'pointer',
     
    });
  const [feedbackType, setFeedbackType] = useState("Reporting to");
  const [onlyManagers, setOnlyManagers] = useState(true);
  const [value, setValue] = React.useState(null);

  const handleFeedbackType = (event, newType) => {
    if (newType !== null) {
      setFeedbackType(newType);
      colors='none'
    }
  };

  return (
    <Box display="flex"  bgcolor="#F8F8F8" >
     
      <Box display="flex"    >
        
      
        <Box p={4} paddingLeft="130px" display="flex" flexDirection="column" alignItems="left" justifyContent="center" width="420px">
        <img src={Logo} style={{ width: '170px' , paddingBottom:'20px'}} alt="Logo" />
      
          <Box display="flex" flexDirection="column" alignItems="left" mb={2}>
            <img src={Feedback} alt="Illustration" style={{ width: '80%', marginBottom: '20px' }} />
          </Box>
          <Typography  color="textSecondary" textAlign="Left" mb={1} >
            "I think it’s very important to have a feedback loop, where you’re constantly thinking about what you’ve done and how you could be doing it better."
          </Typography>
          <Typography variant="body2" fontWeight="bold" color="textPrimary">
            - Elon Musk
          </Typography>
        </Box>

        <Box   paddingLeft="150px" display="flex" flexDirection="column" justifyContent="center" width="350px" marginTop="40px" >
          <Typography variant="h6" color="#353448" gutterBottom fontSize="20px" fontFamily="Poppins, SemiBold" >
            Almost there!
          </Typography>
          <form>
            <p style={{fontSize:'12px',paddingBottom:'8px',paddingTop:'3px',display:'flex'}}>Your name<p style={{color:'red'}}>*</p></p>
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
 <p style={{fontSize:'12px',paddingBottom:'8px',paddingTop:'3px',display:'flex'}}>Your designation<p style={{color:'red'}}>*</p></p>
              <Autocomplete  
             
      value={value}
      
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
       
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Films}
      getOptionLabel={(option) => {
     
        if (typeof option === 'string') {
          return option;
        }
   
        if (option.inputValue) {
          return option.inputValue;
        }
     
        return option.title;
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            {option.title}
          </li>
        );
      }}
      
      sx={{
        width: 350,
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: '#EBEBEB', 
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1, 
          },
       
                   
                 
        },
      }}
      
      freeSolo
      renderInput={(params) => (
        <TextField {...params} size="small"  placeholder="CEO, Manager, etc"/>

         
        
      )} 
      />
              <p style={{fontSize:'12px',paddingBottom:'8px',paddingTop:'3px',display:'flex'}}>Set password<p style={{color:'red'}}>*</p></p>
            <TextField
              fullWidth
              required
               color='none'
              type='password'
             bgcolor=""
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
              <p style={{fontSize:'12px',paddingBottom:'8px',paddingTop:'3px',display:'flex'}}>Workspace name<p style={{color:'red'}}>*</p></p>
            <TextField
              fullWidth
              required
               color='none'
              placeholder='Company name            @atomicsignals.com' 
             bgcolor="none"
             fontSize="12px"
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
            
              








           
            
          

           
            
            <Typography variant="body2" color="textPrimary" gutterBottom fontSize="12px" marginTop='14px' >
              What type of feedback structure would you like to implement? *
            </Typography>
            <div>
      <div
        style={boxStyle(0)}
        onClick={() => handleClick(0)}
      ><div style={{justifyItems:'center',padding:'10px',paddingTop:'14px',paddingBottom:'14px'}}><AccountTreeOutlinedIcon/> <p style={{fontSize:"12px"}}>Reporting to</p></div></div>
      <div
        style={boxStyle(1)}
        onClick={() => handleClick(1)}
      ><div style={{justifyItems:'center',padding:'10px',paddingTop:'14px',paddingBottom:'14px'}}><HeightOutlinedIcon/><p style={{fontSize:"12px"}}>Peer to Peer</p></div></div>
      <div
        style={boxStyle(2)}
        onClick={() => handleClick(2)}
      ><div style={{justifyItems:'center',padding:'10px',paddingTop:'14px',paddingBottom:'14px',paddingLeft:'32px',paddingRight:'32px'}}><QrCodeOutlinedIcon/><p style={{fontSize:"12px"}}>360</p></div></div>
      
    </div>

           <div style={{display:'inline-flex'}}><InfoOutlinedIcon style={{width:'12px',color:'#49C792',paddingRight:'5px',paddingBottom:'10px'}}/><p style={{fontSize:'12px',display:'flex',paddingTop:'2px'}}>{message}</p></div>

           <Button
                                variant="contained"
                               
                                fullWidth
                                sx={{
                                    textTransform: 'none',
                                    fontSize: 14,
                                    backgroundColor: '#49C792',
                                    padding: '6px',
                                    boxShadow:'none',
                                    marginTop:'10px'

                                    
                                }}
                            >
                                Let's dive in
                            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
export default Signup;

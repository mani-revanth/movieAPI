import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
//import CssTextField from '@mui/material/CssTextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import {TextField} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { alpha, styled } from '@mui/material/styles';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    color:'white'
  },
  '& .MuiOutlinedInput-root': {
    borderRadius:'10px',
    color:'white',
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

export default function SignUp() {
  const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    mail:"",
    password:"",
  })
  const navigate=useNavigate(null);

  const handleSubmit=()=>{
    if(user.firstName && user.lastName && user.mail && user.password)
    {
      axios.post("http://localhost:5000/signup",{...user}).then((res)=>{
        if(res.data=="yes")
        {
        alert("signup completed successfully");
        navigate("/");
        }
        else
        alert("oops there was something wrong");
      })
    }
    else
    {
      alert("please fi;; all the fields completely");
    }
  }

  return (
    <div style={{filter:'8px',textAlign:'center',justifyContent:'center',alignItems:'center',paddingTop:'20vh',backgroundImage:"url(https://c1.wallpaperflare.com/preview/570/413/91/interior-theatre-theater-empty-theater.jpg)",backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'100vh',width:'100hw'}}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding:'5%',
            borderRadius:'1rem',
            backgroundColor:'rgba(100,100,100,0.3)',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>{
                    setUser({...user,firstName:`${e.target.value}`});
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>{
                    setUser({...user,lastName:`${e.target.value}`});
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{
                    setUser({...user,mail:`${e.target.value}`});
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>{
                    setUser({...user,password:`${e.target.value}`});
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{
                handleSubmit();
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </div>
  );
}
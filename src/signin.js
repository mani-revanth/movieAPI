import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
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



const theme = createTheme();

export default function SignIn() {

  const [user,setUser]=useState({
    mail:"",
    password:"",
  })

  const navigate=useNavigate(null);

  const handleSubmit=()=>{
    if(user.mail && user.password)
    {
      axios.post("http://localhost:5000/signin",user).then((res)=>{
        if(res.data=="no")
        alert("entered mail or password was not correct");
        else
        {
          //console.log(res.data);
          localStorage.setItem("user_using_is",res.data.lastName);
          navigate("/home");
        }
      })
    }
    else
    alert("please fill all the fields completely");
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
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              onChange={(e)=>{
                setUser({...user,mail:`${e.target.value}`});
              }}
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>{
                setUser({...user,password:`${e.target.value}`});
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{
                handleSubmit();
              }}
            >
              Sign In
            </Button>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
          </Box>
        </Box>
      </Container>
      </div>
  );
}
import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Rating } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useMatch,
  useNavigate
} from "react-router-dom";
import MovieScren from './movie';
import {Button} from '@mui/material';
import 'animate.css';


export function Menu(){
    const navigate=useNavigate();
    return(
      <Navbar collapseOnSelect expand="lg" style={{height:'10vh',backgroundColor:'#E74646',fontSize:'1.5rem',width:'100%'}}>
      <Container>
      <Navbar.Brand style={{height:'80%',textDecoration:'none',marginRight:'2rem',color:'#FFF3E2'}}>
      <h1>ShowBox</h1>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{backgroundColor:'#E74646'}} id="responsive-navbar-nav">
          <Nav className="me-auto">
            <a  ref={el=>{if(el){el.style.setProperty('text-decoration','none','important')}}} href="/home" className='underline' style={{color:'white',textDecoration:'none',marginRight:'1rem'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>home</a>
          </Nav>
          <Nav className='justify-content-end'>
            <h4 style={{color:'white',marginRight:'3rem'}}>{(localStorage.getItem("user_using_is"))}</h4>
            <Button style={{backgroundColor:'white',color:'red',fontWeight:'1000'}} onClick={()=>{
              localStorage.clear();
              navigate("/");
            }}>logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

const max=(a,b)=>{
  if(a>=b)
  return a;
  else
  return b;
}

const GridItem = (props) => {
  const movie=props.movie;
  const navigate=useNavigate(null);
  //let {path}=useMatch();
  return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-10" style={{backgroundColor:'black'}}>
          <div className="p-5 border-0 surface-border border-round" style={{backgroundColor:'#222831'}}>
              <div className="flex flex-column align-items-center gap-2 py-3 border-round" style={{backgroundColor:'#222831'}}>
                  <img className="w-9 shadow-2 border-round" style={{height:'60vh',boxShadow:'2px 2px 2px #EEEEEE'}} src={movie.show.image ? movie.show.image.original : "https://m.media-amazon.com/images/M/MV5BMjI0NDE2OTA4Ml5BMl5BanBnXkFtZTcwODU5NzQzOQ@@._V1_.jpg"} alt={movie.show.name} />
                  <div className="text-2xl font-bold" style={{color:'#A77979'}}>{movie.show.name}</div>
                  <Rating value={max(movie.show.rating.average*0.5,1)} readOnly cancel={false}></Rating>
              </div>
              <div className="flex align-items-center justify-content-end">
                        <Button style={{backgroundColor:'#FF6464',color:'white'}} onClick={()=>{
                        navigate(`/home/${(movie.show.name)}`)
                        }} className="p-button-rounded">view more .....</Button>
              </div>
          </div>
      </div>
  );
};


function HomeScreen(props){
  //const [movies,setMovies]=useState([]);
  const movies=props.movies;
    
    return(
        <div style={{height:'100vh',width:'100hw',backgroundColor:'#F9F5EB'}}>
          <Menu/>
        <div style={{height:'90vh',width:'100hw',overflowY:'scroll'}}>
        <div className="card" style={{backgroundColor:'black',borderRadius:'0'}}>
          <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid
          container
          spacing={2}
          sx={{
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
          }}
          >
          {
            movies.map((movie,i)=>{
              return(
                <GridItem key={i}  movie={movie}/>
              )
            })
          }
          </Grid>
        </Box>
      </div>
      </div>
      </div>
    )
}

export default function Home(){
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
      axios.get("http://localhost:5000/get_details").then((res)=>{
          setMovies(res.data);
          //console.log(res.data);
          //console.log(res.data[0].show.image.original);
      })
  },[]);

  return(
      <Routes>
        <Route path="/" element={<HomeScreen movies={movies}/>}/>
        {
          movies.map((movie,i)=>{
            //console.log((movie.show.name).split(' ').join());
            return (<Route key={i} path={`/${movie.show.name}`} element={<MovieScren movie={movie}/>}/>)
          })
        }
      </Routes>
  )
}
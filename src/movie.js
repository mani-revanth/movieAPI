import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { Menu } from './home';
import 'animate.css';



export default  function MovieScren(props){
    const movie=props.movie;
    return(
       <div style={{height:'100vh',width:'100hw',overflow:'hidden'}}>
        <Menu/>
        <div className="background_image" style={{backgroundImage:`radial-gradient(at top right,#423F3E,#171010),url(${movie.show.image ? movie.show.image.original : ''})`,height:'90vh',width:'100hw',padding:'2%',color:'white'}}>
            <h1 className="animate__animated animate__rubberBand " style={{color:'#F99B7D',fontSize:'3rem'}}>{movie.show.name}</h1>
            <hr style={{width:'50%',maxWidth:'20rem'}}/>
            <div style={{height:'90vh',width:'100hw',overflowY:'scroll',paddingBottom:'10%'}}>
            <h3 className='animate__animated animate__bounceInRight animate__slower animate__delay-1s' style={{color:'#FF55BB'}}>language</h3>
            <p className='animate__animated animate__bounceInUp  animate__delay-2s'>{movie.show.language}</p>
            <h3 className='animate__animated animate__bounceInRight animate__slower animate__delay-1s' style={{color:'#FF55BB'}}>generes</h3>
            <p className='animate__animated animate__bounceInUp animate__delay-2s'>{(movie.show.genres).join('')}</p>
            <h3 className='animate__animated animate__bounceInRight animate__slower animate__delay-1s' style={{color:'#FF55BB'}}>running</h3>
            <p className='animate__animated animate__bounceInUp animate__delay-2s'>{movie.show.status}</p>
            <h3 className='animate__animated animate__bounceInRight animate__slower animate__delay-1s' style={{color:'#FF55BB'}}>runtime</h3>
            <p className='animate__animated animate__bounceInUp animate__delay-2s'>{movie.show.runtime}</p>
            <h3 className='animate__animated animate__bounceInRight animate__slower animate__delay-1s' style={{color:'#FF55BB'}}>average runtime</h3>
            <p className='animate__animated animate__bounceInUp animate__delay-2s'>{movie.show.averageRuntime}</p>
            <h3 className='animate__animated animate__bounceInRight animate__slower animate__delay-1s' style={{color:'#FF55BB'}}>official site</h3>
            <a className='animate__animated animate__bounceInUp animate__delay-2s' style={{color:'white'}} href={`${movie.show.officialSite}`}>{movie.show.officialSite}</a>
            <h3 className='animate__animated animate__bounceInRight animate__slower animate__delay-1s' style={{color:'#FF55BB'}}>rating</h3>
            <p className='animate__animated animate__bounceInUp animate__delay-2s'>{movie.show.rating.average}</p>
            <div style={{maxWidth:'50rem'}}>
            <h3 className='animate__animated animate__bounceInRight animate__slower animate__delay-1s' style={{color:'#FF55BB'}}>summary</h3>
            <p className='animate__animated animate__bounceInUp animate__delay-2s'>{movie.show.summary}</p>
            </div>
            </div>
        </div>
       </div>
    )
}
import React from 'react';
import ReactDom from 'react-dom';
import { useNavigate } from 'react-router';


export default function ProtectedRoutes({children}){
    const navigate=useNavigate(null);
    if(localStorage.getItem("user_using_is"))
    return children;
    else
    navigate("/");
}

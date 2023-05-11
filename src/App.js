import logo from './logo.svg';
import './App.css';
import SignIn from './signin';
import SignUp from './signup';
import Home from './home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
//import {Switch} from 'react-router';
//import { Switch } from '@mui/material';
//import { Login } from '@mui/icons-material';
import ProtectedRoutes from './protectedRoutes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/home/*' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
      </Routes>
    </Router>
  );
}


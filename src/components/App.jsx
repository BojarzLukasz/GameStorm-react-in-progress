import React, {useEffect, useState} from 'react'
import { ThemeProvider, CssBaseline  } from "@mui/material"
import customTheme from '../customTheme'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CustomAppBar from "./AppBar";
import ForgotPassword from "./ForgotPassword"
import MainPage from "./MainPage"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import {auth} from "../firebase-config";
import {onAuthStateChanged} from 'firebase/auth'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCard from "./SingleCard";

function App() {
    const [user, setUser] = useState("Użytkownik niezalogowany");
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user?.email);
            }
        });
        return () => unsubscribe();
        }, []);
    return(
        <ThemeProvider theme={customTheme}>
            <CssBaseline/>
            <main style={{paddingBottom: 50, minHeight: '100vh', background: "linear-gradient(204deg, rgba(104,15,121,1) 0%, rgba(17,12,2,1) 87%)"}}>
                <Router>
                    <CustomAppBar user={user}/>
                    <Routes>
                        <Route path='/Main' element={<MainPage/>} />
                        <Route path='/SignUp' element={<SignUp/>}/>
                        <Route path='/' element={<SignIn/>} />
                        <Route path='/Forgot' element={<ForgotPassword/>} />
                        <Route path='/SingleCard/:itemSlug' element={<SingleCard/>}/>
                      {/*  <Route path='/Profile' element={<Profile/>}/>*/}
                    </Routes>
                </Router>
            </main>
        </ThemeProvider>
    );
}
export default App;

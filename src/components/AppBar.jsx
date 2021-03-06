import React, {useState} from 'react';
import {AppBar, Avatar, Toolbar, Typography, Button} from "@mui/material";
import {GamepadOutlined} from "@mui/icons-material";
import {auth} from "../firebase-config";
import {signOut} from "firebase/auth"
import {Link} from "react-router-dom"

const CustomAppBar = ({user}) => {
    const [loggedIn, setLoggedIn] = useState(null)
    auth.onAuthStateChanged((user) => {
        if(user){
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    })
    async function logOut() {
        signOut(auth);
    }
    return(
        <AppBar style={{
            backdropFilter: 'blur(3px)',
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"}}>
            {loggedIn ? <Link style={{textDecoration: 'none', color:'white'}} to='/Main'><Toolbar>
                <GamepadOutlined sx={{mr: 2}} fontSize="large"/>
                <Typography variant='h6' sx={{ fontSize: {md : 45} }}>
                    GameStorm
                </Typography>
            </Toolbar></Link> : <Toolbar>
                <GamepadOutlined sx={{mr: 2}} fontSize="large"/>
                <Typography variant='h3'>
                    GameStorm
                </Typography>
            </Toolbar>}
            {loggedIn && <Toolbar>
                <Typography variant='h6' sx={{ fontSize: {md: 25}, display: {xs : 'none', sm: 'flex'} }}>{user}</Typography>
                <Avatar sx={{ m: 1, mr: 3, bgcolor: 'secondary.main', display: {xs : 'none', sm: 'flex'} }}/>
                <Button href="/" variant="contained" color='secondary' onClick={logOut}>
                    <Typography sx={{fontSize: {sm: 15}}}>Log Out</Typography>
                </Button>
            </Toolbar>}
        </AppBar>
    )
}
export default CustomAppBar;

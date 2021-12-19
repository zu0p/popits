import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import { Button, Grid } from '@mui/material';
import logo from '../images/logo.png';
import title from '../images/title.png';
import {useNavigate} from  'react-router-dom';

export function Login(props){
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onMoveSignup = () => {
    console.log("lickkkk")
    navigate('/signup')
  }

  const onLogin = () => {
    let param ={
      userId: id,
      userPassword: password
    }
    // login
    // then go to profile page
  }

  return(
    <div>
      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item mt={20}>
          <img src={logo} width={'200px'}/>
        </Grid>
        <Grid item>
          <img src={title} width={'140px'}/>
        </Grid>
        <Grid item mt={3} width={'300px'}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} mb={2}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="input-with-sx" 
              label="ID" 
              variant="standard" 
              style={{width:'100%'}} 
              value={id}
              onChange={onIdHandler}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} mb={2}>
            <VpnKeyRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="input-with-sx" 
              label="PW" 
              variant="standard" 
              style={{width:'100%'}} 
              value={password}
              onChange={onPasswordHandler}
            />
          </Box>
          <Button variant="contained" color="inherit" style={{width:'100%', marginTop:'10px', boxShadow:'none'}} onClick={onLogin}>login</Button>
          <Button color="inherit" style={{width:'100%', marginTop:'10px', boxShadow:'none'}} onClick={onMoveSignup}>signup</Button>
        </Grid>
      </Grid>
    </div>
  );
}
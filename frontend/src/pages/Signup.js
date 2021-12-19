import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import { Button, Grid } from '@mui/material';
import logo from '../images/logo.png';
import title from '../images/title.png';

export function Signup(){
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  }

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  }

  const isNotSame = () => {
    return password!==confirmPassword;
  }

  const onSignup = () => {
    console.log('signup')
    if(id==='' || name==='' || password==''){
      alert('필수 항목을 모두 입력하세요');
      return;
    }
    let param = {
      userId: id,
      userName: name,
      userPassword: password
    }

    // register
    // then go to home
  }

  return(
    <div>
      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item mt={10}>
          <img src={logo} width={'200px'}/>
        </Grid>
        <Grid item>
          <img src={title} width={'140px'}/>
        </Grid>
        <Grid item mt={3} width={'300px'}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} mb={2}>
            <FaceRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="input-with-sx" 
              label="NAME" 
              variant="standard" 
              style={{width:'100%'}} 
              value={name}
              onChange={onNameHandler}
              required
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} mb={2}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="input-with-sx" 
              label="ID" 
              variant="standard" 
              style={{width:'100%'}} 
              value={id}
              onChange={onIdHandler}
              required
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} mb={2}>
            <VpnKeyRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="input-with-sx" 
              label="PW" 
              variant="standard" 
              type="password" 
              style={{width:'100%'}} 
              value={password}
              onChange={onPasswordHandler}
              required
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} mb={2}>
            <VpnKeyRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField i
              d="input-with-sx" 
              label="check PW" 
              variant="standard" 
              type="password" 
              style={{width:'100%'}} 
              value={confirmPassword}
              onChange={onConfirmPasswordHandler}
              required
              helperText={
                isNotSame()?'비밀번호가 일치하지 않습니다':null
              }
            />
          </Box>
          <Button variant="contained" color="inherit" style={{width:'100%', marginTop:'10px', boxShadow:'none'}} onClick={onSignup}>signup</Button>
        </Grid>
      </Grid>
    </div>
  );
}
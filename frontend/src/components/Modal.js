import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, useThemeProps } from '@mui/material';
import { Pagination } from './Pagination';
import { setProfileSticker } from '../app/profile';

export function Modal(props){
  const [info, setInfo] = useState();
  const [selectProfile, setSelectProfile] = useState();

  useEffect(()=>{
    if(props.open){
      setInfo(props.info)
    }
  },[props])

  const onClose = () => {
    props.close()
  }

  const onSelectSticker = (item,e) => {
    if(selectProfile){
      const prevSticker = document.getElementById(selectProfile.id);
      prevSticker.style.border = 'none';
    }
    let sticker = {
      id: item.stickerId,
      img: item.stickerImg
    }
    setSelectProfile(sticker);
  }

  useEffect(()=>{
    if(selectProfile){
      // console.log(selectProfile.id)
      const selectedSticker = document.getElementById(selectProfile.id);
      selectedSticker.style.border = 'solid 3px red';
    }
  }, [selectProfile])

  const onSetProfile = () => { 
    let param = {
      userId: 2,
      stickerId: selectProfile.id
    }
    setProfileSticker(param)
      .then(res=>{
        // console.log(res)
        props.onChangeProfile(selectProfile.img)
        onClose()
      })
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={onClose}
      >
        <DialogTitle id="alert-dialog-title">
          {info?.packageName}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={"20"}>
            <Grid item xs={2}>
              <img src={info?.packageImg} width={'200px'} />
            </Grid>
            <Grid item xs={16}>
              <Grid container spacing={2}>
              {
                  info?.stickers.map((item, idx) => {
                    return (
                      <Grid key= {idx} item>
                        <img id={item.stickerId} src={item.stickerImg} width={"100px"} onClick={(e)=>{onSelectSticker(item, e)}}/>
                      </Grid>
                    )
                  })
                }
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}><CloseIcon /></Button>
          <Button onClick={onSetProfile} autoFocus>
            프로필 수정하기
          </Button>
        </DialogActions>
      </Dialog >
    </div >
  );
}
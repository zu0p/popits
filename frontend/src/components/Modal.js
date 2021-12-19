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

export function Modal(props){
  const [info, setInfo] = useState();

  useEffect(()=>{
    console.log(props)
    if(props.open){
      setInfo(props.info)
    }
  },[props])

  useEffect(()=>{
    console.log(info)
  },[info])

  const onClose = () => {
    props.close()
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
          <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <img src={info?.packageImg} width={'200px'}/>
            </Grid>
            <Grid item xs={10}>
              <div style={{overflow:'auto'}}>
                {
                  info?.stickers.map((item, idx)=>{
                    let res;
                    if(idx%4==0){
                      res += (<Grid 
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        key={idx}
                        m={2}
                      >)
                    }
                    res+=(<Grid item>
                      <img src={item.stickerImg} />
                    </Grid>)
                    if(idx%4==3 || idx==info?.stickers.length){
                      res+=(</Grid>)
                    }

                    return res;
                  })
                }
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}><CloseIcon/></Button>
          <Button onClick={onClose} autoFocus>
            프로필 수정하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Header } from '../components/Header';
import { getProfileSticker, getPacakgeList } from '../app/profile';
import defaultImage from '../images/user.png';
import { Pagination } from '../components/Pagination';

export function Profile(){
  const [profile, setProfile] = useState('')
  const [packages, setPackages] = useState()

  useEffect(()=>{
    getProfileSticker(2) //2=userId
    .then(res=>{
      console.log(res) 
      if(res.data.body.profileSticker.length>0){
        setProfile(res.data.body.profileSticker[0].stickerImg)
      }
      else{
        setProfile(defaultImage)
      }
      //res.data.body.profileSticker[0].sticerImg
      //res.data.body.profileSticker[0].stickerId가 없으면 기본 이미지로 setProfile해주기
    })
    .catch(err=>{
      console.log(err)
    })

    // get package list
    getPacakgeList(2)
      .then(res=>{
        console.log(res)
        setPackages(res.data.body.profilePackageList)
      })
  },[])

  return(
    <div>
      <Header />
      <Grid container>
        <Grid item xs={3} mt={5}>
          <div>
            <img src={profile} width={'200px'}/>
          </div>
          <div>
            사용자 이름
          </div>
        </Grid>
        <Grid item xs={9}>
          <Pagination data={packages} onChangeProfile={setProfile}/>
        </Grid>
      </Grid>
    </div>
  );
}
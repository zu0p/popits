import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Header } from '../components/Header';
import { getProfileSticker, setProfileSticker, getPacakgeList, getPacakgeInfo } from '../app/profile';
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

  const onSetProfile = () => {
    let param = {
      userId: 2,
      stickerId: 6080
    }
    setProfileSticker(param)
      .then(res=>{
        console.log(res)
      })
  }

  const onGetPackageList = () => {
    getPacakgeList(2)
      .then(res=>{
        console.log(res)
      })
  }

  const onGetPackageInfo = () => {
    let param = {
      userId: 2,
      packageId: 5104
    }
    getPacakgeInfo(param)
      .then(res=>{
        console.log(res)
      })
  }

  return(
    <div>
      <Header />
      <div>
        <button onClick={onSetProfile}>등록</button>
        <button onClick={onGetPackageList}>리스트</button>
        <button onClick={onGetPackageInfo}>인포</button>
        
      </div>
      <Grid container>
        <Grid item xs={3}>
          <div>
            <img src={profile} width={'200px'}/>
          </div>
          <div>
            사용자 이름
          </div>
        </Grid>
        <Grid item xs={9}>
          <Pagination data={packages}/>
        </Grid>
      </Grid>
    </div>
  );
}
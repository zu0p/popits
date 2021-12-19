import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { getPacakgeInfo } from '../app/profile';
import { Modal } from './Modal';

export function Pagination(props){
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [maxSize, setMaxSize] = useState(-1);

  useEffect(()=>{
    if(props.data){
      setData(props.data.slice(0,15));
      setMaxSize(props.data.length);
    }
  },[props])

  useEffect(()=>{
    console.log("aaaaaaaaaa"+currentPage)
    if(props.data){
      setData(props.data.slice(currentPage*15, Math.min(currentPage*15+15, props.data.length)));
    }
  },[currentPage])

  const onNextPage = () => {
    setCurrentPage(pre=>pre+1);
  }

  const onPrevPage = () => {
    setCurrentPage(pre=>pre-1);
  }

  return(
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <IconButton onClick={onPrevPage} disabled={currentPage<1?true:false}> 
            <ArrowBackIosRoundedIcon/> 
          </IconButton>
        </Grid>
        <Grid item>
          <List packages={data} onChangeProfile={props.onChangeProfile}/>
        </Grid>
        <Grid item>
          <IconButton onClick={onNextPage} disabled={currentPage>=(maxSize/15)-1?true:false}> 
            <ArrowForwardIosRoundedIcon /> 
          </IconButton>
        </Grid>
      </Grid>

    </div>
  );
}

function List(props){/* props = 현재 페이지에 보여질 배열 */
  const [packages, setPackages] = useState()

  useEffect(()=>{
    if(props.packages){
      let packageArray = [
        props.packages.slice(0,5),
        props.packages.slice(5,10),
        props.packages.slice(10,15)
      ]
      setPackages(packageArray)
    }
  },[props])

  return(
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {
        packages?.map((items,idx)=>{
          return(
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              key={idx}
              m={2}
            >   
              {
                items.map((item)=>{
                  return(
                    <Grid item key={item.packageId} m={2}>
                      <ListItem packageInfo={item} onChangeProfile={props.onChangeProfile}/>
                    </Grid>
                  )
                })
              }
            </Grid>)
        })
      }
    </Grid>
  );
}

function ListItem({packageInfo, onChangeProfile}){
  const [packageItem, setPackageItem] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [info, setInfo] = useState();

  useEffect(()=>{
    setPackageItem(packageInfo.packageImg)
  },[])

  const clickPackage = () => {
    // info 불러오기 -> props.packageId 사용
    // console.log(packageInfo)
    const param ={
      userId: 2,
      packageId: packageInfo.packageId
    }

    // 클릭한 패키지 정보 가져오기
    getPacakgeInfo(param)
      .then(res=>{
        // console.log(res);
        setInfo(res.data.body.profileSticker[0]);
        setModalOpen(true);
      })
  }

  const onClose = () => {
    setModalOpen(false);
  }

  return(
    <div>
      <img src={packageItem} width={'150px'} onClick={clickPackage}/>
      <Modal open={modalOpen} info={info} close={onClose}  onChangeProfile={onChangeProfile}/>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { getPacakgeInfo } from '../app/profile';

export function Pagination(props){
  const [data, setData] = useState();

  useEffect(()=>{
    if(props.data){
      setData(props.data)
    }
  },[props])
  return(
    <div>
      <List packages={data} />

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
            >   
              {
                items.map((item)=>{
                  return(
                    <Grid item key={item.packageId}>
                      <ListItem packageInfo={item}/>
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

function ListItem({packageInfo}){
  // console.log(packageInfo)
  const [packageItem, setPackageItem] = useState()

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
    getPacakgeInfo(param)
      .then(res=>{
        console.log(res)
        //res.data.body.profileSticker[0].stickers //arr
      })
  }

  return(
    <div>
      <img src={packageItem} width={'150px'} onClick={clickPackage}/>
    </div>
  );
}
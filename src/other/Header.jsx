import React, { useState } from 'react'

function Header(props) {
  // const[userName,setUserName]=useState('')
  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.name)
  // }

  const logOut=()=>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
     <h1 className='text-3xl font-medium'>Hello <br />
    <span className='text-3xl font-semibold'>username😊</span> </h1> 
      <button onClick={logOut} className='bg-red-500 text-white px-5 py-3 rounded-full text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header

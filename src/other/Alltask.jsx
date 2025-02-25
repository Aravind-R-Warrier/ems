import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function Alltask() {
  const [userData,setUserData]=useContext(AuthContext)
  // console.log(authData.employees)
  return (
    <div className='bg-[#1c1c1c] p-5  h-50  '>
 <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5  font-medium text-lg'>Employee Name</h2>
        <h3  className='w-1/5  font-medium text-lg'>New Task</h3>
        <h5  className='w-1/5  font-medium text-lg'>Active</h5>
        <h5  className='w-1/5 font-medium text-lg '>Completed</h5>
        <h5  className='w-1/5  font-medium text-lg'>Failed</h5>
      </div>

      <div className='h-[80%] overflow-auto'>
      {userData.map((emp,i)=>(
      <div key={i} className='bg-black-300 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 font-medium text-lg text-white'>{emp.name}</h2>
        <h3  className='w-1/5 font-medium text-lg text-blue-500'>{emp.taskNumbers.newTask}</h3>
        <h5  className='w-1/5 font-medium text-lg text-yellow-400'>{emp.taskNumbers.active}</h5>
        <h5  className='w-1/5 font-medium text-lg text-green-600'>{emp.taskNumbers.completed}</h5>
        <h5  className='w-1/5 font-medium text-lg text-red-600'>{emp.taskNumbers.failed}</h5>
      </div>
     )) }
      </div>
     
    </div>
  )
}

export default Alltask

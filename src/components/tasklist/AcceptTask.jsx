import React from 'react'

function AcceptTask({data}) {
  return (
    <div className="h-full w-[300px] p-5 bg-green-400 flex-shrink-0 rounded-xl mt-3">
    <div className="flex justify-between items-center">
    <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
    <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-xl mt-3'>
        {data.taskDescription}
    </p>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
</div>
  )
}

export default AcceptTask

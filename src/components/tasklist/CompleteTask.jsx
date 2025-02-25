import React from 'react'

function CompleteTask({data}) {
    return (
        <div className="h-full w-[300px] p-5 bg-blue-400 flex-shrink-0 rounded-xl mt-3">
            <div className="flex justify-between items-center">
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-xl mt-3'>
               {data.taskDescription}
            </p>
            <div className='mt-2 flex bg-green-500 justify-start'>
                <button className='w-full'>Complete</button>
            </div>
        </div>
    )
}

export default CompleteTask

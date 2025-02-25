import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({ data }) {
    console.log(data)
    return (
        <div id='task-list' className='h-[55%] overflow-x-auto py-5 w-full  mt-10 flex items-center justify-start gap-5 flex-nowrap'>
            {data.tasks.map((item, id) => {
                if (item.active) {
                    return <AcceptTask key={id} data={item}/>
                }
                if (item.newTask) {
                    return <NewTask key={id}  data={item}/>
                }
                if (item.completed) {
                    return <CompleteTask key={id}  data={item}/>
                }
                if (item.failed) {
                    return <FailedTask key={id}  data={item}/>
                }
            })}
        </div>
    )
}

export default TaskList

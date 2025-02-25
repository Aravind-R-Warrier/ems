import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

function CreateTask() {

    const [userData,setUserData]=useContext(AuthContext)
  
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const[newTask,setNewTask]=useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    const data=userData
    // console.log(taskTitle, taskDescription, taskDate, assignTo, category)
    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})

    data.forEach((elem)=>{
      if(assignTo==elem.name){
       return elem.tasks.push(newTask)
      }
    })
    setUserData(data)
    console.log(data)
    
    setTaskDate('')
    setTaskTitle('')
    setTaskDescription('')
    setAssignTo('')
    setCategory('')

    
  }

  return (
    <div className="h-80% p-5  text-white ">
      <div className="mt-8">
        <form onSubmit={(e) => submitHandler(e)} className="flex flex-wrap bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 pr-4">
            <div>
              <label htmlFor="taskTitle" className="block text-gray-300">Task Title</label>
              <input
                type="text"
                id="taskTitle"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Title of task"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="taskDate" className="block text-gray-300">Date</label>
              <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                id="taskDate"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="assignTo" className="block text-gray-300">Assign To</label>
              <input
                type="text"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                id="assignTo"
                placeholder="Employee Name"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-gray-300">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="category"
                placeholder="Design,development,documentation.."
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <label htmlFor="description" className="block text-gray-300">Description</label>
            <textarea
              id="description"
              cols="30"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows="6"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task details..."
            ></textarea>
          </div>

          {/* Button */}
          <div className="w-full flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-600 px-6 py-2 rounded-md text-white font-semibold hover:bg-blue-700 transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask

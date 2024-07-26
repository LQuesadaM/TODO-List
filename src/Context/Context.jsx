import { createContext, useEffect, useState } from 'react'

// 1. Context
export const TaskContext = createContext('')

// 2. Provider
export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([])
  const [hasTask, setHasTask] = useState()
  const [countTask, setCountTask] = useState(0)

  // Createtask
  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        task,
        done: false, // Crea una funcion que retorne el valor del chacked.
      },
    ])
  }

  useEffect(() => {
    const dataStore = localStorage.getItem('tasks')
    setTasks(JSON.parse(dataStore))
  }, [])

  useEffect(() => {
    setCountTask(tasks.length)
    if (tasks.length >= 1) {
      setHasTask(true)
    } else {
      setHasTask(false)
    }

    //  Save in localStorage
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // deleteTask
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <TaskContext.Provider
      value={{ tasks, createTask, deleteTask, hasTask, countTask }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

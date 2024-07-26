import { ListTodo } from 'lucide-react'
import { Form } from './components/Form.jsx'
import { TaskInfo } from './components/TaskInfo.jsx'
import { ListTask } from './components/ListTask.jsx'
import { EmptyTasks } from './components/EmptyTasks.jsx'
import { TaskContext } from './Context/Context.jsx'
import { useContext } from 'react'

function App() {
  const { createTask, hasTask } = useContext(TaskContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new window.FormData(event.target)
    const input = formData.get('task')
    if (input === '') return
    createTask(input)
  }

  return (
    <div className="relative flex w-screen flex-col items-center px-4">
      <header className="absolute inset-x-0 top-0 flex h-28 items-center justify-center bg-gray-300">
        <h1 className="flex items-center gap-2 text-2xl">
          <ListTodo />
          Todo list
        </h1>
      </header>

      <div className="absolute w-full max-w-2xl space-y-6 px-4">
        <Form handleSubmit={handleSubmit} />
        <div className="flex flex-col justify-center gap-6">
          <TaskInfo />
          {hasTask ? <ListTask /> : <EmptyTasks />}
        </div>
      </div>
    </div>
  )
}

export default App

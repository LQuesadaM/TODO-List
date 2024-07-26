import { Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { TaskContext } from '../Context/Context'

export const ListTask = () => {
  const { tasks, deleteTask } = useContext(TaskContext)

  return (
    <section className="w-full space-y-6">
      {tasks.map((task) => {
        return (
          <div
            className="flex items-center gap-2 rounded-lg bg-gray-300/20 p-3 text-sm text-gray-600 shadow-shape ring-1 ring-gray-400 has-[:checked]:bg-white has-[:checked]:ring-gray-200"
            key={task.id}
          >
            <label className="flex flex-auto items-center gap-3">
              <input
                type="checkbox"
                className="peer size-5 rounded-full bg-inherit ring-1 ring-purple-700 checked:text-green-600 checked:ring-0"
              />
              <p className="break-words peer-[:checked]:line-through">
                {task.task}
              </p>
            </label>
            <button onClick={() => deleteTask(task.id)}>
              <Trash2 />
            </button>
          </div>
        )
      })}
    </section>
  )
}

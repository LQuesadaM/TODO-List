import { useContext } from 'react'
import { TaskContext } from '../Context/Context'

export const TaskInfo = () => {
  const { countTask } = useContext(TaskContext)
  return (
    <section className="flex w-full justify-between px-2">
      <div>
        <p>
          Tarefas criadas{' '}
          <span className="rounded-full bg-purple-100 px-4 py-2 font-semibold text-purple-700">
            {countTask}
          </span>
        </p>
      </div>
      <div>
        <p>
          Concluidas{' '}
          <span className="rounded-full bg-green-200 px-4 py-2 font-semibold text-green-600">
            0
          </span>
        </p>
      </div>
    </section>
  )
}

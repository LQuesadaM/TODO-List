import { ClipboardList } from 'lucide-react'

export const EmptyTasks = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center space-y-4">
      <ClipboardList className="size-12 text-gray-200" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-400">
          Você ainda não tem tarefas cadastradas
        </span>
        <span className="text-sm font-medium text-gray-300">
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  )
}

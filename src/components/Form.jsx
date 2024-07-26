import { CirclePlus } from 'lucide-react'

export const Form = ({ handleSubmit }) => {
  return (
    <form className="mx-auto mt-24 px-2" onSubmit={handleSubmit}>
      <label className="flex gap-2">
        <input
          type="text"
          name="task"
          placeholder="Adicione uma nova tarefa"
          className="flex-1 rounded-lg"
        />
        <button className="flex items-center justify-center rounded-lg bg-purple-700 px-2 text-gray-300 shadow-shape active:bg-purple-800 sm:gap-2 sm:px-4">
          <span className="hidden font-semibold sm:block">Criar</span>
          <CirclePlus className="size-6" />
        </button>
      </label>
    </form>
  )
}

import { useQuery } from '@tanstack/react-query'
import { Todo } from '../types/Todo'
import { useAtom } from 'jotai'

import { Search, TodoItem, atom, api } from '../features/todo/index'

export default function TodoPage(): JSX.Element {
  const [search] = useAtom(atom.searchAtom)
  const { data: todos, isLoading, isError, error } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: api.getTodos,
    staleTime: Infinity,
  })

  const Todolist = () => {
    const filtered = todos?.filter((t) => t.name.includes(search))

    if (filtered?.length === 0) return <h5>No Result</h5>

    return filtered?.map((todo: Todo) => {
      return <TodoItem {...todo} key={todo.id} />
    })
  }

  return (
    <div
      style={{
        paddingLeft: '40vw',
        paddingTop: '15vh',
      }}
    >
      <h1
        style={{
          color: 'white',
          textShadow: '0px 2px 5px rgba(0, 0, 0, 0.36)',
        }}
      >
        Todo
      </h1>
      <Search />
      <div>
        {isLoading ? (
          <h5>Loading. . .</h5>
        ) : isError ? (
          <h5>{error.message}</h5>
        ) : (
          Todolist()
        )}
      </div>
    </div>
  )
}

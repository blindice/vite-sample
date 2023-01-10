import { Todo } from '../../types/Todo'

export async function updateTodo(todo: Todo) {
  const { isDone: done, ...rest } = todo
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: rest.id, name: rest.name, isDone: !done }),
  }
  const response = await fetch(
    `https://localhost:44336/api/Todo/todo/${todo.id}`,
    requestOptions,
  )

  console.log(response)
}

export async function getTodos() {
  const res = await fetch('https://localhost:44336/api/Todo/todos')

  if (!res.ok) throw new Error('Something went wrong!')

  const todos: unknown[] = await res.json()

  return todos as Todo[]
}

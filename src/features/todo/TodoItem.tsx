/** @jsxImportSource @emotion/react */
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { motion, spring } from 'framer-motion'

import { Todo } from '../../types/Todo'
import { updateTodo } from './api'

export default function TodoItem(todo: Todo): JSX.Element {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
  const toggleStyle = (isDone: boolean) => {
    return {
      color: 'rgb(249,111,5)',
      textDecoration: isDone ? 'line-through' : 'none',
    }
  }
  return (
    <motion.div
      style={{
        background: 'white',
        padding: '5px',
        width: '20vw',
        borderRadius: '5px',
        margin: '6px 0px',
        boxShadow:
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      }}
      whileHover={{
        scale: 1.03,
        backgroundColor: 'whitesmoke',
      }}
      transition={{ type: 'spring', damping: 2, stiffness: 300 }}
    >
      <input
        type="checkbox"
        onChange={() => mutate(todo)}
        checked={todo.isDone}
      />
      <span style={toggleStyle(todo.isDone)}>{todo.name}</span>

      <span
        onClick={() => alert('hey')}
        css={{
          fontSize: '12px',
          color: 'rgb(249,111,5)',
          cursor: 'pointer',
          float: 'right',
          lineHeight: 1.7,
          textAlign: 'center',
        }}
      >
        ✖
      </span>
    </motion.div>
  )
}

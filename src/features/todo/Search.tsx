/** @jsxImportSource @emotion/react */
import { useAtom } from 'jotai'
import { searchAtom } from './atoms'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Search(): JSX.Element {
  const setSearch = useAtom(searchAtom)[1]
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClear = () => {
    setSearch('')
    inputRef.current!.value = ''
  }

  return (
    <div>
      <input
        css={{
          color: 'rgb(249,111,5)',
          border: 0,
          background: 'white',
          borderRadius: '10px',
          height: 30,
          fontSize: 20,
          marginBottom: 20,
          marginRight: 3,
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',

          '&:focus': {
            outline: 'none',
          },

          '&::placeholder': {
            color: 'rgb(249,111,5)',
          },
        }}
        ref={inputRef}
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <motion.button
        onClick={handleClear}
        style={{
          background: 'white',
          color: 'rgb(249,111,5)',
          height: 30,
          width: 60,
          borderRadius: 10,
          border: 0,
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.01 }}
      >
        Clear
      </motion.button>
    </div>
  )
}

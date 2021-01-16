import React from 'react'

import './styles.css'
import type { Book } from '~/types'

type Props = {
  book: Book
}

export function Book({ book }: Props) {
  return (
    <div className="book">
      <div>{book.title}</div>
      <div>{book.author}</div>
    </div>
  )
}

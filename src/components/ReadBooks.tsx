import React, { useEffect, useState } from 'react'

import type { Book as BookType } from '~/types'
import { getReadBooks } from '~/api'
import { Book } from '~/components/Book'

export function ReadBooks() {
  const [books, setBooks] = useState<BookType[]>([])

  async function fetchBooks() {
    const booksData = await getReadBooks()
    setBooks(booksData)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className="w-2/3 mx-auto my-0">
      {books.map((book) => (
        <div key={book.id}>
          <Book book={book} />
        </div>
      ))}
    </div>
  )
}

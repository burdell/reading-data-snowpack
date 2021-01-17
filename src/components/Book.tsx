import React from 'react'
import { format } from 'date-fns'

import type { Book } from '~/types'
import { Rating } from '~/components/Rating'
import { TagList } from '~/components/TagList'

type Props = {
  book: Book
}

export function Book({ book }: Props) {
  return (
    <div className="py-5 leading-5">
      <div className="flex flex-col">
        <div className="my-5">
          <div className="py-1">
            {format(new Date('2020-01-13'), 'M/dd/yyyy')}
          </div>
          <div className="text-4xl">{book.title}</div>
          <div className="text-xl">{book.author}</div>
          <div className="text-md">
            <Rating rating={book.my_rating} />
          </div>
        </div>
      </div>
      <div>{book.my_review}</div>
      {book.tags.length ? <TagList tags={book.tags} /> : null}
    </div>
  )
}

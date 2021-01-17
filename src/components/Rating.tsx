import type { Rating } from '~/types'

const ratings: Rating[] = [1, 2, 3, 4, 5]
import React from 'react'

function generateRatingDisplay(ratingNum: Rating) {
  return ratings.map((rating) => (ratingNum >= rating ? '★' : '☆')).join('')
}

type Props = {
  rating: Rating
}

export function Rating({ rating }: Props) {
  return <div>{generateRatingDisplay(rating)}</div>
}

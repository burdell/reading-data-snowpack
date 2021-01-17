export type Rating = 1 | 2 | 3 | 4 | 5

export type Tag =
  | 'fiction'
  | 'nonfiction'
  | 'theology'
  | 'russian'
  | 'insightful'

export type Book = {
  id: string
  book_id: number
  title: string
  author: string
  my_rating: Rating
  number_of_pages: number
  date_read: string
  my_review: string
  isbn?: string
  tags: Tag[]
}

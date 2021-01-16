// import { rest } from 'msw'
// import faker from 'faker'
// import * as dateFns from 'date-fns'

// import type { MockConfig } from '../types'
// import type { Book } from '~/types'

// function getRandomItem<T>(items: T[]) {
//   return items[getRandomInt(items.length)]
// }

// function getRandomInt(theNumber: number) {
//   return Math.floor(Math.random() * theNumber)
// }

// function generateBook(): Book {
//   return {
//     id: faker.random.uuid(),
//     author: `${faker.name.firstName()} ${faker.name.lastName()}`,
//     book_id: faker.random.number(),
//     title: faker.lorem.words(),
//     my_rating: getRandomItem([1, 2, 3, 4, 5]),
//     number_of_pages: faker.random.number(),
//     date_read: dateFns.format(faker.date.past(), 'yyyy-mm-dd'),
//     my_review: '',
//     isbn: '1234567890'
//   }
// }

// export const booksConfig: MockConfig[] = [
//   {
//     name: 'getReadBooks',
//     getMock: () => {
//       const path = /.*\/books/

//       return {
//         path,
//         mockFn: rest.get(path, (req, res, { status, set, delay, json }) => {
//           console.log('=== mock')
//           const books = new Array(20).fill(undefined).map(generateBook)
//           return res(
//             status(200),
//             set({ 'X-Header': 'mocked response' }),
//             json(books)
//           )
//         })
//       }
//     }
//   }
// ]
